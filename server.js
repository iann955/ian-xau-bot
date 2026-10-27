
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

/*
  SESSION
*/
app.use(
    session({
        secret:
            process.env.SESSION_SECRET ||
            "CHANGE_THIS_SECRET",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);

/*
  ADMIN LOGIN
  Configure ADMIN_EMAIL, ADMIN_PASSWORD and SESSION_SECRET
  in Render Environment Variables.
*/
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Email and password are required."
            });
        }

        const correctEmail = process.env.ADMIN_EMAIL;
        const correctPassword = process.env.ADMIN_PASSWORD;

        if (!correctEmail || !correctPassword) {
            return res.status(500).json({
                error: "Login is not configured on the server."
            });
        }

        const emailMatch =
            email.toLowerCase().trim() ===
            correctEmail.toLowerCase().trim();

        const passwordMatch = await bcrypt.compare(
            password,
            await bcrypt.hash(correctPassword, 10)
        );

        if (!emailMatch || !passwordMatch) {
            return res.status(401).json({
                error: "Invalid email or password."
            });
        }

        req.session.user = {
            email: correctEmail
        };

        return res.json({
            success: true,
            message: "Login successful."
        });
    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            error: "Login failed."
        });
    }
});

/*
  CHECK LOGIN
*/
app.get("/api/me", (req, res) => {
    if (!req.session.user) {
        return res.json({
            loggedIn: false
        });
    }

    return res.json({
        loggedIn: true,
        email: req.session.user.email
    });
});

/*
  LOGOUT
*/
app.post("/api/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({
                error: "Logout failed."
            });
        }

        res.clearCookie("connect.sid");

        return res.json({
            success: true
        });
    });
});

/*
  GOLD MARKET DATA
  Indicative XAU/USD spot price from XAUS.
  This is not an Exness execution quote.
*/
app.get("/api/market/gold", async (req, res) => {
    try {
        const response = await fetch(
            "https://xaus.com/api/v1/spot?compact=1",
            {
                headers: {
                    Accept: "application/json"
                },
                signal: AbortSignal.timeout(10000)
            }
        );

        if (!response.ok) {
            return res.status(502).json({
                error: "Gold price provider is unavailable."
            });
        }

        const data = await response.json();

        const price = Number(data.spot_usd_oz);

        if (!Number.isFinite(price) || price <= 0) {
            return res.status(502).json({
                error: "The provider returned an invalid gold price."
            });
        }

        res.set("Cache-Control", "public, max-age=60");

        return res.json({
            symbol: "XAUUSD",
            price,
            updatedAt: data.updated_at || null,
            dataStatus: data.data_state?.status || "unknown",
            source: "XAUS",
            disclaimer:
                "Indicative spot price; not an Exness trading quote."
        });
    } catch (error) {
        console.error(
            "Gold market data error:",
            error.message
        );

        return res.status(502).json({
            error: "Could not retrieve the gold price."
        });
    }
});

/*
  PAYSTACK PAYMENT
  Legacy endpoint retained for compatibility.
*/
app.post("/api/paystack", async (req, res) => {
    try {
        const { email, product } = req.body;

        if (!email) {
            return res.status(400).json({
                error: "Email is required."
            });
        }

        const secretKey = process.env.PAYSTACK_SECRET_KEY;

        if (!secretKey) {
            return res.status(500).json({
                error: "Paystack is not configured."
            });
        }

        const amount =
            product === "vip" ? 1550000 : 650000;

        const response = await fetch(
            "https://api.paystack.co/transaction/initialize",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${secretKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    amount,
                    currency: "KES",
                    callback_url:
                        "https://ian-xau-bot.onrender.com/payment-success"
                }),
                signal: AbortSignal.timeout(15000)
            }
        );

        const data = await response.json();

        if (!response.ok || !data.status) {
            return res.status(400).json({
                error:
                    data.message ||
                    "Payment initialization failed."
            });
        }

        return res.json({
            url: data.data.authorization_url
        });
    } catch (error) {
        console.error("Paystack error:", error);

        return res.status(500).json({
            error: "Payment service error."
        });
    }
});

/*
  PAYMENT SUCCESS PAGE
  This page does not independently verify payment.
*/
app.get("/payment-success", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Payment Status</title>
</head>
<body style="
background:#050505;
color:white;
font-family:Arial,sans-serif;
text-align:center;
padding:80px 20px;
">
<h1 style="color:#39ff78;">Payment Status</h1>
<p>Your payment return was received.</p>
<p>Payment must be verified separately before access is granted.</p>
<a href="/" style="
display:inline-block;
margin-top:25px;
padding:14px 22px;
background:#39ff78;
color:#050505;
text-decoration:none;
font-weight:bold;
border-radius:8px;
">BACK TO WEBSITE</a>
</body>
</html>
`);
});

/*
  START SERVER
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  
