const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/paystack", async (req, res) => {
  try {
    const { email, product } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          amount: product === "vip" ? "12000" : "5000",
          currency: "USD",
          callback_url: `https://ian-xau-bot.onrender.com/payment-success`
        })
      }
    );

    const data = await response.json();

    if (!data.status) {
      return res.status(400).json({
        error: data.message || "Payment initialization failed"
      });
    }

    res.json({
      url: data.data.authorization_url
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error"
    });
  }
});

app.get("/payment-success", (req, res) => {
  res.send(`
    <html>
      <body style="background:#050505;color:white;text-align:center;padding:80px 20px;font-family:Arial">
        <h1 style="color:#dfff00">Payment Received</h1>
        <p>We're checking your payment.</p>
        <p>Reference: ${req.query.reference || "Not provided"}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
