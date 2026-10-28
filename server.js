const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 3000;

// Render runs behind a proxy; this allows secure session cookies.
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

/*
SESSION
Set SESSION_SECRET in Render Environment Variables.
*/
app.use(
session({
name: "ian.sid",
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
ADMIN LOGIN
Render variables required:
ADMIN_EMAIL
ADMIN_PASSWORD
SESSION_SECRET
*/
app.post("/api/login", async (req, res) => {
try {
const { email, password } = req.body || {};

if (  
        typeof email !== "string" ||  
        typeof password !== "string" ||  
        !email.trim() ||  
        !password  
    ) {  
        return res.status(400).json({  
            error: "Email and password are required."  
        });  
    }  

    const correctEmail = process.env.ADMIN_EMAIL;  
    const correctPassword = process.env.ADMIN_PASSWORD;  

    if (!correctEmail || !correctPassword) {  
        return res.status(500).json({  
            error: "Admin login is not configured on the server."  
        });  
    }  

    const emailMatch =  
        email.trim().toLowerCase() ===  
        correctEmail.trim().toLowerCase();  

    const passwordMatch =  
        password === correctPassword;  

    if (!emailMatch || !passwordMatch) {  
        return res.status(401).json({  
            error: "Invalid email or password."  
        });  
    }  

    req.session.user = {  
        email: correctEmail  
    };  

    return req.session.save((error) => {  
        if (error) {  
            console.error("Session save error:", error.message);  
            return res.status(500).json({  
                error: "Could not save login session."  
            });  
        }  

        return res.json({  
            success: true,  
            message: "Login successful."  
        });  
    });  
} catch (error) {  
    console.error("Login error:", error.message);  

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
console.error("Logout error:", error.message);

return res.status(500).json({  
            error: "Logout failed."  
        });  
    }  

    res.clearCookie("ian.sid", {  
        httpOnly: true,  
        secure: process.env.NODE_ENV === "production",  
        sameSite: "lax  
    });  

    return res.json({  
        success: true  
    });  
});

});

/*
GOLD SPOT PRICE
Indicative price from XAUS.
Not an Exness execution quote.
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
    console.error("Gold market data error:", error.message);  

    return res.status(502).json({  
        error: "Could not retrieve the gold price."  
    });  
}

});

/*
XAUUSD CANDLE DATA
Render variable required:
TWELVE_DATA_API_KEY

Example:
/api/xauusd/candles?timeframe=M1&days=3
*/
app.get("/api/xauusd/candles", async (req, res) => {
try {
const apiKey = process.env.TWELVE_DATA_API_KEY;

if (!apiKey) {  
        return res.status(500).json({  
            error: "TWELVE_DATA_API_KEY is missing in Render."  
        });  
    }  

    const intervals = {  
        M1: "1min",  
        M5: "5min",  
        M15: "15min",  
        M30: "30min",  
        H1: "1h",  
        H4: "4h",  
        D1: "1day"  
    };  

    const timeframe = String(  
        req.query.timeframe || "M1"  
    ).toUpperCase();  

    const interval = intervals[timeframe];  

    if (!interval) {  
        return res.status(400).json({  
            error:  
                "Unsupported timeframe. Use M1, M5, M15, M30, H1, H4 or D1."  
        });  
    }  

    const requestedDays = Number(req.query.days) || 3;  
    const days = Math.min(7, Math.max(1, requestedDays));  

    const candlesPerDay = {  
        M1: 1440,  
        M5: 288,  
        M15: 96,  
        M30: 48,  
        H1: 24,  
        H4: 6,  
        D1: 1  
    };  

    const outputsize = Math.min(  
        5000,  
        Math.ceil(candlesPerDay[timeframe] * days) + 100  
    );  

    const url = new URL(  
        "https://api.twelvedata.com/time_series"  
    );  

    url.search = new URLSearchParams({  
        symbol: "XAU/USD",  
        interval,  
        outputsize: String(outputsize),  
        timezone: "UTC",  
        order: "desc",  
        apikey: apiKey  
    }).toString();  

    const response = await fetch(url, {  
        signal: AbortSignal.timeout(20000)  
    });  

    const data = await response.json();  

    if (  
        !response.ok ||  
        data.status === "error" ||  
        !Array.isArray(data.values)  
    ) {  
        console.error(  
            "Twelve Data error:",  
            data.message || data.code || response.status  
        );  

        return res.status(502).json({  
            error:  
                data.message ||  
                "Candle provider failed. Check the API key, plan and request limits.",  
            providerCode: data.code || null  
        });  
    }  

    const candles = data.values  
        .map((candle) => {  
            const datetime = String(candle.datetime || "");  

            // Provider timestamps are requested in UTC.  
            const timestamp = datetime.includes("T")  
                ? datetime  
                : datetime.replace(" ", "T");  

            const milliseconds = Date.parse(  
                /Z$|[+-]\d{2}:\d{2}$/.test(timestamp)  
                    ? timestamp  
                    : timestamp + "Z"  
            );  

            return {  
                time: Math.floor(milliseconds / 1000),  
                open: Number(candle.open),  
                high: Number(candle.high),  
                low: Number(candle.low),  
                close: Number(candle.close)  
            };  
        })  
        .filter((candle) =>  
            Number.isFinite(candle.time) &&  
            Number.isFinite(candle.open) &&  
            Number.isFinite(candle.high) &&  
            Number.isFinite(candle.low) &&  
            Number.isFinite(candle.close)  
        )  
        .sort((a, b) => a.time - b.time);  

    if (candles.length === 0) {  
        return res.status(502).json({  
            error: "The provider returned no valid candles."  
        });  
    }  

    res.set("Cache-Control", "public, max-age=60");  

    return res.json({  
        symbol: "XAUUSD",  
        timeframe,  
        timezone: "UTC",  
        source: "Twelve Data",  
        candleCount: candles.length,  
        candles  
    });  
} catch (error) {  
    console.error("XAUUSD candles error:", error.message);  

    return res.status(502).json({  
        error: "Could not retrieve XAUUSD candles.",  
        detail: error.message  
    });  
}

});

/*
LEGACY PAYSTACK PAYMENT
Retained for compatibility.
*/
app.post("/api/paystack", async (req, res) => {
try {
const { email, product } = req.body || {};

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
    console.error("Paystack error:", error.message);  

    return res.status(500).json({  
        error: "Payment service error."  
    });  
}

});

/*
PAYMENT SUCCESS PAGE
A return to this page does not verify payment
or grant paid membership.
*/
app.get("/payment-success", (req, res) => {
res.send(`

<!DOCTYPE html>  <html lang="en">  
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
});  /*
START SERVER
*/
app.listen(PORT, () => {
console.log(Server running on port ${PORT});
});
