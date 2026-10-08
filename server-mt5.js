const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("ERROR: Supabase environment variables are missing.");
  process.exit(1);
}

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);


// --------------------------------------------------
// SERVER STATUS
// --------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "IAN XAU AI MT5 License Server"
  });
});


// --------------------------------------------------
// MT5 LICENSE CHECK
// --------------------------------------------------

app.post("/api/mt5/check", async (req, res) => {
  try {
    const mt5_login = String(req.body.mt5_login || "").trim();
    const broker_server = String(req.body.broker_server || "").trim();

    if (!mt5_login || !broker_server) {
      return res.status(400).json({
        active: false,
        package: null,
        command: "STOP",
        message: "MT5 login and broker server are required."
      });
    }

    const { data, error } = await supabase
      .from("Costomer")
      .select(
        "id,email,package,payment_status,bot_command,mt5_login,broker_server"
      )
      .eq("mt5_login", mt5_login)
      .eq("broker_server", broker_server)
      .maybeSingle();

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        active: false,
        package: null,
        command: "STOP",
        message: "Server error."
      });
    }

    if (!data) {
      return res.json({
        active: false,
        package: null,
        command: "STOP",
        message: "MT5 account is not registered."
      });
    }

    /*
      Trading is allowed ONLY when:

      1. payment_status = active
      2. bot_command = START
    */

    const active =
      data.payment_status === "active" &&
      data.bot_command === "START";

    return res.json({
      active: active,
      package: active ? data.package : null,
      command: active ? "START" : "STOP",
      message: active
        ? "Account is active and bot is authorized."
        : "Account is not authorized to trade."
    });

  } catch (error) {
    console.error("MT5 check error:", error);

    return res.status(500).json({
      active: false,
      package: null,
      command: "STOP",
      message: "Server error."
    });
  }
});


// --------------------------------------------------
// SAVE MT5 ACTIVATION DETAILS
// --------------------------------------------------

app.post("/api/activation/save", async (req, res) => {
  try {
    const email = String(req.body.email || "").trim();
    const mt5_login = String(req.body.mt5_login || "").trim();
    const broker_server = String(req.body.broker_server || "").trim();

    if (!email || !mt5_login || !broker_server) {
      return res.status(400).json({
        success: false,
        message:
          "Email, MT5 login and broker server are required."
      });
    }

    const { data, error } = await supabase
      .from("Costomer")
      .update({
        mt5_login: mt5_login,
        broker_server: broker_server
      })
      .eq("email", email)
      .select(
        "id,email,package,payment_status,bot_command,mt5_login,broker_server"
      )
      .maybeSingle();

    if (error) {
      console.error("Activation save error:", error);

      return res.status(500).json({
        success: false,
        message: "Could not save activation details."
      });
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Customer account not found."
      });
    }

    return res.json({
      success: true,
      message: "MT5 activation details saved.",
      customer: {
        email: data.email,
        package: data.package,
        payment_status: data.payment_status,
        bot_command: data.bot_command,
        mt5_login: data.mt5_login,
        broker_server: data.broker_server
      }
    });

  } catch (error) {
    console.error("Activation error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error."
    });
  }
});


// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {
  console.log(
    `IAN XAU AI MT5 server running on port ${PORT}`
  );
});
