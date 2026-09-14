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
        secret: process.env.SESSION_SECRET || "CHANGE_THIS_SECRET",
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
  LOGIN DETAILS

  Set these in Render Environment Variables:

  ADMIN_EMAIL
  ADMIN_PASSWORD

  Example:
  ADMIN_EMAIL = your@email.com
  ADMIN_PASSWORD = your strong password

  Do NOT put your real password inside this file.
*/

/*
  LOGIN
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
            email.toLowerCase().trim() === correctEmail.toLowerCase().trim();

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

        res.json({
            success: true,
            message: "Login successful."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
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

    res.json({
        loggedIn: true,
        email: req.session.user.email
    });
});

/*
  LOGOUT
*/
app.post("/api/logout", (req, res) => {
    req.session.destroy(() => {
        res.json({
            success: true
        });
    });
});

/*
  PAYSTACK PAYMENT
  Legacy endpoint kept so the current website does not break.
*/
app.post("/api/paystack", async (req, res) => {
    try {
        const { email, product } = req.body;

        if (!email) {
            return res.status(400).json({
                error: "Email is required."
            });
        }

        let amount;

        if (product === "vip") {
            amount = 1550000;
        } else {
            amount = 650000;
        }

        const response = await fetch(
            "https://api.paystack.co/transaction/initialize",
            {
                method: "POST",
                headers: {
                    Authorization:
                        `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    amount: amount,
                    currency: "KES",
                    callback_url:
                        "https://ian-xau-bot.onrender.com/payment-success"
                })
            }
        );

        const data = await response.json();

        if (!data.status) {
            return res.status(400).json({
                error:
                    data.message ||
                    "Payment initialization failed."
            });
        }

        res.json({
            url: data.data.authorization_url
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Server error."
        });
    }
});

/*
  PAYMENT SUCCESS PAGE
*/
app.get("/payment-success", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Payment Received</title>
</head>

<body style="
background:#050505;
color:white;
font-family:Arial;
text-align:center;
padding:80px 20px;
">

<h1 style="color:#dfff00;">
Payment Received
</h1>

<p>
We're checking your payment.
</p>

<p>
Reference:
${req.query.reference || "Not provided"}
</p>

<a
href="/"
style="
display:inline-block;
margin-top:25px;
padding:14px 22px;
background:#dfff00;
color:#050505;
text-decoration:none;
font-weight:bold;
border-radius:8px;
">
BACK TO WEBSITE
</a>

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
