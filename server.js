
<!-- SECTION 1: IAN XAU AI PRO PLUS AUTH -->
<section id="ian-auth-section">
  <style>
    #ian-auth-section {
      box-sizing: border-box;
      min-height: 100vh;
      padding: 36px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(ellipse at 50% 0%, #173b22 0%, transparent 48%),
        #030603;
      color: #eef7ef;
      font-family: Arial, sans-serif;
    }

    #ian-auth-section * { box-sizing: border-box; }

    #ian-auth-section .ian-auth-card {
      width: 100%;
      max-width: 440px;
      padding: 30px;
      border: 1px solid #294b31;
      border-radius: 20px;
      background: linear-gradient(145deg, #0b140d, #060a07);
      box-shadow: 0 20px 70px #0009, 0 0 35px #39ff780b;
    }

    #ian-auth-section .ian-topline {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      margin-bottom: 25px;
    }

    #ian-auth-section .ian-logo-mark {
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 1px solid #39ff78;
      border-radius: 10px;
      color: #39ff78;
      font-weight: 900;
      font-size: 18px;
      background: #102416;
    }

    #ian-auth-section .ian-brand {
      color: #f2f8f2;
      font-size: 14px;
      letter-spacing: 2px;
      font-weight: 900;
    }

    #ian-auth-section .ian-brand span {
      display: block;
      margin-top: 4px;
      color: #39ff78;
      font-size: 9px;
      letter-spacing: 3px;
    }

    #ian-auth-section .ian-eyebrow {
      text-align: center;
      color: #c5a96a;
      font-size: 10px;
      letter-spacing: 2px;
      font-weight: 800;
    }

    #ian-auth-section h2 {
      margin: 12px 0 9px;
      text-align: center;
      font-size: clamp(25px, 6vw, 32px);
      letter-spacing: -1px;
    }

    #ian-auth-section .ian-subtitle {
      margin: 0 0 27px;
      color: #9eafa1;
      text-align: center;
      font-size: 13px;
      line-height: 1.6;
    }

    #ian-auth-section label {
      display: block;
      margin: 16px 0 8px;
      color: #d3e0d5;
      font-size: 12px;
      font-weight: 700;
    }

    #ian-auth-section input {
      width: 100%;
      min-height: 47px;
      padding: 13px 14px;
      color: #fff;
      background: #030704;
      border: 1px solid #2b4130;
      border-radius: 10px;
      outline: none;
      font-size: 14px;
    }

    #ian-auth-section input:focus {
      border-color: #39ff78;
      box-shadow: 0 0 0 3px #39ff7812;
    }

    #ian-auth-section button {
      width: 100%;
      min-height: 47px;
      margin-top: 16px;
      padding: 13px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .6px;
      cursor: pointer;
      transition: opacity .2s, transform .2s;
    }

    #ian-auth-section button:disabled {
      opacity: .55;
      cursor: wait;
    }

    #ian-auth-section .ian-primary {
      color: #031006;
      background: linear-gradient(100deg, #39ff78, #a3ffb9);
      border: 0;
    }

    #ian-auth-section .ian-secondary {
      color: #eef7ef;
      background: #0c150e;
      border: 1px solid #304734;
    }

    #ian-auth-section .ian-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 21px;
      color: #718273;
      font-size: 10px;
    }

    #ian-auth-section .ian-divider::before,
    #ian-auth-section .ian-divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #243328;
    }

    #ian-auth-section .ian-links {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 21px;
      font-size: 12px;
    }

    #ian-auth-section a {
      color: #65ff91;
      text-decoration: none;
      cursor: pointer;
    }

    #ian-auth-section a:hover { text-decoration: underline; }

    #ian-auth-section .ian-message {
      display: none;
      margin-top: 16px;
      padding: 12px;
      border-radius: 9px;
      color: #e6f8e9;
      background: #101a12;
      border: 1px solid #34533a;
      font-size: 12px;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }

    #ian-auth-section .ian-security {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      margin-top: 27px;
      color: #829386;
      font-size: 10px;
      text-align: center;
    }

    #ian-auth-section .ian-security-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #39ff78;
      box-shadow: 0 0 8px #39ff7866;
    }

    #ian-auth-section .ian-footnote {
      margin-top: 13px;
      text-align: center;
      color: #536457;
      font-size: 10px;
      line-height: 1.6;
    }

    @media (max-width: 420px) {
      #ian-auth-section { padding: 20px 12px; }
      #ian-auth-section .ian-auth-card { padding: 23px 19px; }
    }
  </style>

  <div class="ian-auth-card">
    <div class="ian-topline">
      <div class="ian-logo-mark">I</div>
      <div class="ian-brand">
        IAN XAU AI
        <span>PRO PLUS</span>
      </div>
    </div>

    <div class="ian-eyebrow">GOLD TRADING INTELLIGENCE</div>

    <h2 id="ian-auth-title">Welcome back.</h2>

    <div class="ian-subtitle" id="ian-auth-subtitle">
      Sign in to continue to your trading dashboard.
    </div>

    <form id="ian-auth-form">
      <div id="ian-name-wrap" hidden>
        <label for="ian-auth-name">FULL NAME</label>
        <input id="ian-auth-name" type="text"
          autocomplete="name" placeholder="Enter your full name">
      </div>

      <label for="ian-auth-email">EMAIL ADDRESS</label>
      <input id="ian-auth-email" type="email"
        autocomplete="email" required placeholder="you@example.com">

      <div id="ian-password-wrap">
        <label for="ian-auth-password">PASSWORD</label>
        <input id="ian-auth-password" type="password"
          autocomplete="current-password"
          minlength="8" required placeholder="Enter your password">
      </div>

      <button id="ian-auth-submit" class="ian-primary" type="submit">
        SIGN IN TO YOUR ACCOUNT
      </button>
    </form>

    <div class="ian-divider">OR CONTINUE WITH</div>

    <button id="ian-google-login" class="ian-secondary" type="button">
      Continue with Google
    </button>

    <div class="ian-links">
      <a href="#" id="ian-forgot-password">Forgot password?</a>
      <a href="#" id="ian-toggle-mode">Create account</a>
    </div>

    <div id="ian-auth-message" class="ian-message" role="status"
      aria-live="polite"></div>

    <div class="ian-security">
      <span class="ian-security-dot"></span>
      SECURE ACCOUNT ACCESS · SUPABASE AUTH
    </div>

    <div class="ian-footnote">
      Trading involves risk. Account access does not guarantee trading profits.
    </div>
  </div>
</section>

<!-- Load Supabase only once on the page. -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
(function () {
  const SUPABASE_URL =
    "https://elnqijtvqstzaxrydyox.supabase.co";
  const SUPABASE_KEY =
    "sb_publishable_krU-ZfHaxTgJC46LWL_1Tw_3iiV6FW4";

  const root = document.getElementById("ian-auth-section");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  const $ = (selector) => root.querySelector(selector);

  const title = $("#ian-auth-title");
  const subtitle = $("#ian-auth-subtitle");
  const form = $("#ian-auth-form");
  const nameWrap = $("#ian-name-wrap");
  const nameInput = $("#ian-auth-name");
  const emailInput = $("#ian-auth-email");
  const passwordInput = $("#ian-auth-password");
  const passwordWrap = $("#ian-password-wrap");
  const submitButton = $("#ian-auth-submit");
  const googleButton = $("#ian-google-login");
  const toggleLink = $("#ian-toggle-mode");
  const forgotLink = $("#ian-forgot-password");
  const message = $("#ian-auth-message");

  let mode = "login";
  let busy = false;
  let recoveryMode = false;

  function showMessage(text) {
    message.textContent = text;
    message.style.display = "block";
  }

  function clearMessage() {
    message.textContent = "";
    message.style.display = "none";
  }

  function setMode(nextMode) {
    mode = nextMode;
    clearMessage();

    const signup = mode === "signup";
    const reset = mode === "reset";

    title.textContent = signup ? "Create your account" :
      reset ? "Reset your password" : "Welcome back.";

    subtitle.textContent = signup ?
      "Create your account to get started with IAN XAU AI." :
      reset ? "Request a secure password-reset email." :
      "Sign in to continue to your trading dashboard.";

    nameWrap.hidden = !signup;
    nameInput.required = signup;
    passwordWrap.style.display = reset ? "none" : "";
    passwordInput.required = !reset;
    passwordInput.autocomplete = signup ? "new-password" :
      "current-password";

    submitButton.textContent = signup ? "CREATE ACCOUNT" :
      reset ? "SEND RESET EMAIL" : "SIGN IN TO YOUR ACCOUNT";

    toggleLink.textContent = signup ? "Back to login" : "Create account";
    forgotLink.style.display = signup || reset ? "none" : "";
    googleButton.style.display = reset ? "none" : "";
  }

  function openDashboard() {
    // Use the site's existing login-success handler if it exists.
    if (typeof window.ianOnLoginSuccess === "function") {
      window.ianOnLoginSuccess();
      return;
    }

    const dashboard = document.getElementById("ian-dashboard");

    if (dashboard) {
      root.hidden = true;
      dashboard.hidden = false;
      dashboard.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      return;
    }

    showMessage(
      "Login succeeded, but Section 2 was not found on this page. " +
      "Check that the dashboard section is included."
    );
  }

  if (!window.supabase || !window.supabase.createClient) {
    showMessage(
      "Supabase did not load. Check your internet connection and refresh."
    );
    return;
  }

  // Reuse the existing Supabase client if Section 2 already created it.
  window.ianSupabase = window.ianSupabase ||
    window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const client = window.ianSupabase;

  async function handleSubmit(event) {
    event.preventDefault();
    if (busy) return;

    clearMessage();
    busy = true;
    submitButton.disabled = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const fullName = nameInput.value.trim();

    try {
      let result;

      if (recoveryMode) {
        if (password.length < 8) {
          showMessage("Your new password must be at least 8 characters.");
          return;
        }

        result = await client.auth.updateUser({ password });

        if (result.error) {
          showMessage(result.error.message);
        } else {
          recoveryMode = false;
          showMessage("Password updated successfully. Please sign in again.");
          setMode("login");
          passwordInput.value = "";
        }
        return;
      }

      if (mode === "login") {
        result = await client.auth.signInWithPassword({
          email,
          password
        });
      } else if (mode === "signup") {
        result = await client.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo:
              window.location.origin + window.location.pathname
          }
        });
      } else {
        result = await client.auth.resetPasswordForEmail(email, {
          redirectTo:
            window.location.origin + window.location.pathname
        });

        if (!result.error) {
          showMessage(
            "If the email is registered, a password-reset link will be sent."
          );
          return;
        }
      }

      if (result.error) {
        showMessage(result.error.message);
        return;
      }

      if (mode === "signup" && !result.data.session) {
        showMessage(
          "Account created. Check your email to confirm your account, " +
          "then return here and log in."
        );
        return;
      }

      if (result.data && result.data.session) {
        openDashboard();
      } else {
        showMessage(
          "No active session yet. Confirm your email if requested, then log in."
        );
      }
    } catch (error) {
      showMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      busy = false;
      submitButton.disabled = false;
    }
  }

  form.addEventListener("submit", handleSubmit);

  toggleLink.addEventListener("click", function (event) {
    event.preventDefault();
    setMode(mode === "signup" ? "login" : "signup");
  });

  forgotLink.addEventListener("click", function (event) {
    event.preventDefault();
    setMode(mode === "reset" ? "login" : "reset");
  });

  googleButton.addEventListener("click", async function () {
    if (busy) return;

    clearMessage();
    busy = true;
    googleButton.disabled = true;

    try {
      const result = await client.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo:
            window.location.origin + window.location.pathname
        }
      });

      if (result.error) showMessage(result.error.message);
    } catch (error) {
      showMessage(error.message || "Google sign-in failed.");
    } finally {
      busy = false;
      googleButton.disabled = false;
    }
  });

  client.auth.onAuthStateChange(function (event, session) {
    if (event === "PASSWORD_RECOVERY") {
      recoveryMode = true;
      setMode("reset");
      title.textContent = "Choose a new password";
      subtitle.textContent = "Enter your new password below.";
      passwordWrap.style.display = "";
      passwordInput.required = true;
      passwordInput.autocomplete = "new-password";
      submitButton.textContent = "UPDATE PASSWORD";
      return;
    }

    if (session && (
      event === "SIGNED_IN" ||
      event === "INITIAL_SESSION"
    )) {
      setTimeout(openDashboard, 0);
    }
  });

  client.auth.getSession().then(function (result) {
    if (result.error) {
      console.error("Supabase session check failed:", result.error);
      return;
    }

    if (result.data && result.data.session) {
      openDashboard();
    }
  }).catch(function (error) {
    console.error("Session check failed:", error);
  });

  // Support password-reset links using Supabase's recovery URL hash.
  if (window.location.hash.includes("type=recovery")) {
    recoveryMode = true;
    setMode("reset");
    title.textContent = "Choose a new password";
    subtitle.textContent = "Enter your new password below.";
    passwordWrap.style.display = "";
    passwordInput.required = true;
    passwordInput.autocomplete = "new-password";
    submitButton.textContent = "UPDATE PASSWORD";
  } else {
    setMode("login");
  }
})();
</script>
<!-- END SECTION 1 -->
  
<!-- SECTION 2: IAN XAU AI PRO PLUS INSTITUTIONAL TERMINAL -->
<section id="ian-dashboard">
<style>
#ian-dashboard {
  --bg:#030603;--panel:#080e0a;--panel2:#0b140e;
  --line:#1d3824;--green:#39ff78;--muted:#8da494;
  --gold:#e8c66a;--red:#ff7777;--amber:#ffc76b;
  background:var(--bg);color:#e9f5eb;
  font-family:Arial,Helvetica,sans-serif;width:100%;
  max-width:1500px;margin:0 auto;padding:14px;
  border:1px solid var(--line);border-radius:14px;
  box-sizing:border-box;font-size:13px;
}
#ian-dashboard *{box-sizing:border-box}
#ian-dashboard .terminal-top{
  display:flex;justify-content:space-between;align-items:center;
  gap:14px;flex-wrap:wrap;padding:7px 2px 17px;
  border-bottom:1px solid var(--line)
}
#ian-dashboard .brandline{display:flex;align-items:center;gap:10px}
#ian-dashboard .brandmark{
  width:40px;height:40px;display:grid;place-items:center;
  border:1px solid #2d6940;border-radius:10px;
  color:var(--green);font-weight:900;font-size:17px;
  background:linear-gradient(145deg,#102417,#050805)
}
#ian-dashboard .eyebrow{
  color:var(--muted);font-size:10px;font-weight:bold;
  letter-spacing:1.5px;text-transform:uppercase
}
#ian-dashboard .main-title{
  font-size:22px;line-height:1.2;margin:5px 0 0;letter-spacing:-.5px
}
#ian-dashboard .top-right{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
#ian-dashboard .pill{
  border:1px solid var(--line);border-radius:6px;padding:8px 10px;
  color:var(--muted);font-size:10px;font-weight:bold;letter-spacing:.5px
}
#ian-dashboard .pill.live{color:var(--green);border-color:#285536}
#ian-dashboard .pill.live:before{
  content:"";display:inline-block;width:6px;height:6px;
  background:var(--green);border-radius:50%;margin-right:7px
}
#ian-dashboard .section-heading{
  display:flex;align-items:center;justify-content:space-between;
  gap:10px;flex-wrap:wrap;margin:22px 0 11px
}
#ian-dashboard .section-heading h3{
  margin:0;color:#e9f5eb;font-size:14px;letter-spacing:.3px
}
#ian-dashboard .section-heading span{
  color:var(--muted);font-size:10px;letter-spacing:.6px;text-transform:uppercase
}
#ian-dashboard .terminal-grid{
  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;margin-top:15px
}
#ian-dashboard .panel{
  min-width:0;background:linear-gradient(145deg,var(--panel2),var(--panel));
  border:1px solid var(--line);border-radius:10px;padding:14px
}
#ian-dashboard .panel-label{
  color:var(--muted);font-size:10px;font-weight:bold;
  letter-spacing:1px;text-transform:uppercase
}
#ian-dashboard .panel-value{
  font-size:23px;font-weight:750;line-height:1.3;
  margin-top:12px;overflow-wrap:anywhere;color:var(--green)
}
#ian-dashboard .panel-value.gold{color:var(--gold)}
#ian-dashboard .panel-value.neutral{color:#e9f5eb}
#ian-dashboard .panel-value.small-value{font-size:16px}
#ian-dashboard .panel-note{
  color:var(--muted);font-size:11px;line-height:1.6;margin-top:8px
}
#ian-dashboard .terminal-button,#ian-dashboard select{
  display:block;width:100%;margin-top:12px;padding:11px;
  border:1px solid #285536;border-radius:7px;
  background:#0d1c11;color:var(--green);font-size:11px;font-weight:bold
}
#ian-dashboard .terminal-button{cursor:pointer}
#ian-dashboard .terminal-button:hover{background:#142b1a}
#ian-dashboard .terminal-button:disabled{opacity:.6;cursor:wait}
#ian-dashboard select{cursor:pointer}
#ian-dashboard .muted{color:var(--muted)}
#ian-dashboard .green{color:var(--green)!important}
#ian-dashboard .warning{color:var(--amber)!important}
#ian-dashboard .error{color:var(--red)!important}
#ian-dashboard .gold-text{color:var(--gold)!important}
#ian-dashboard .chart-panel{padding:8px}
#ian-dashboard .chart-head{
  display:flex;justify-content:space-between;align-items:center;
  gap:8px;flex-wrap:wrap;padding:8px 7px 12px
}
#ian-dashboard .chart-frame{
  width:100%;height:440px;border:0;border-radius:7px;
  display:block;background:#050805
}
#ian-dashboard .levels-grid{
  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px
}
#ian-dashboard .level-card{
  background:#080e0a;border:1px solid var(--line);
  border-radius:9px;padding:14px;min-width:0
}
#ian-dashboard .level-name{
  color:var(--muted);font-size:10px;font-weight:bold;
  letter-spacing:.8px;text-transform:uppercase
}
#ian-dashboard .level-value{
  font-size:19px;font-weight:bold;color:var(--green);
  margin-top:11px;overflow-wrap:anywhere
}
#ian-dashboard .level-card.high .level-value{color:#ff8d8d}
#ian-dashboard .level-card.low .level-value{color:#70d9ff}
#ian-dashboard .level-card.pdh .level-value{color:var(--gold)}
#ian-dashboard .level-card.pdl .level-value{color:#c6a8ff}
#ian-dashboard .level-foot{
  font-size:10px;color:var(--muted);margin-top:8px;line-height:1.5
}
#ian-dashboard .two-col{
  display:grid;grid-template-columns:1fr 1fr;gap:10px
}
#ian-dashboard .info-row{
  display:flex;justify-content:space-between;align-items:flex-start;
  gap:12px;padding:11px 0;border-bottom:1px solid #14251a
}
#ian-dashboard .info-row:last-child{border-bottom:0}
#ian-dashboard .info-label{color:var(--muted);line-height:1.5}
#ian-dashboard .info-value{text-align:right;font-weight:bold;line-height:1.5}
#ian-dashboard .system-dot{
  display:inline-block;width:7px;height:7px;border-radius:50%;
  background:var(--amber);margin-right:6px
}
#ian-dashboard .terminal-footer{
  border-top:1px solid var(--line);margin-top:18px;padding:13px 2px 2px;
  color:var(--muted);font-size:10px;line-height:1.7
}
#ian-dashboard .disclaimer{
  border:1px solid #4b3a1b;background:#151108;color:#d8c48d;
  border-radius:8px;padding:11px;margin-top:12px;
  font-size:11px;line-height:1.7
}
@media(max-width:760px){
  #ian-dashboard{padding:10px}
  #ian-dashboard .terminal-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  #ian-dashboard .levels-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  #ian-dashboard .chart-frame{height:360px}
  #ian-dashboard .main-title{font-size:19px}
}
@media(max-width:430px){
  #ian-dashboard .two-col{grid-template-columns:1fr}
  #ian-dashboard .panel{padding:11px}
  #ian-dashboard .panel-value{font-size:20px}
  #ian-dashboard .chart-frame{height:330px}
}
</style>

<header class="terminal-top">
  <div class="brandline">
    <div class="brandmark">IX</div>
    <div>
      <div class="eyebrow">IAN XAU AI / PRO PLUS</div>
      <h2 class="main-title">Institutional Trading Terminal</h2>
      <div class="eyebrow" style="margin-top:6px">RULE-BASED XAUUSD TRADING SYSTEM</div>
    </div>
  </div>
  <div class="top-right">
    <span class="pill live">MARKET MONITOR</span>
    <span class="pill">XAUUSD / GOLD</span>
    <span class="pill" id="ianFeedState">CONNECTING</span>
  </div>
</header>

<div class="terminal-grid">
  <div class="panel">
    <div class="panel-label">Gold spot reference</div>
    <div class="panel-value gold" id="ianGoldPrice">Loading...</div>
    <div class="panel-note">Indicative price from your configured market-price endpoint.</div>
    <button type="button" class="terminal-button" id="ianRefreshGold">REFRESH PRICE</button>
    <div class="panel-note" id="ianGoldStatus">Waiting for market data...</div>
  </div>

  <div class="panel">
    <div class="panel-label">Chart timeframe</div>
    <div class="panel-value neutral" id="ianCurrentTimeframe">M15</div>
    <select id="ianTimeframe" aria-label="Select chart timeframe">
      <option value="1">M1 — 1 minute</option>
      <option value="5">M5 — 5 minutes</option>
      <option value="15" selected>M15 — 15 minutes</option>
      <option value="30">M30 — 30 minutes</option>
      <option value="60">H1 — 1 hour</option>
      <option value="240">H4 — 4 hours</option>
      <option value="D">D1 — Daily</option>
    </select>
    <div class="panel-note">Changes the TradingView chart interval.</div>
  </div>

  <div class="panel">
    <div class="panel-label">Trading connection</div>
    <div class="panel-value small-value warning">NOT CONNECTED</div>
    <div class="panel-note">No live MT5 or Exness execution connection is configured by this dashboard.</div>
  </div>

  <div class="panel">
    <div class="panel-label">Market feed status</div>
    <div class="panel-value small-value" id="ianEndpointStatus">CHECKING</div>
    <div class="panel-note">Last update: <span id="ianGoldUpdated">Not yet updated</span></div>
    <div class="panel-note">Prices may differ between providers and brokers.</div>
  </div>
</div>

<div class="section-heading">
  <h3>01 / Market Chart</h3>
  <span>TradingView · OANDA XAUUSD</span>
</div>
<div class="panel chart-panel">
  <div class="chart-head">
    <div>
      <div class="panel-label">XAUUSD · Gold versus US dollar</div>
      <div class="panel-note">Use the chart to inspect price action. This is not an order-entry panel.</div>
    </div>
    <span class="pill" id="ianChartStatus">CHART READY</span>
  </div>
  <iframe
    id="ianTradingViewChart"
    class="chart-frame"
    title="XAUUSD TradingView chart"
    src="https://s.tradingview.com/widgetembed/?symbol=OANDA%3AXAUUSD&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>

<div class="section-heading">
  <h3>02 / Key Market Levels</h3>
  <span>New York session reference</span>
</div>
<div class="levels-grid">
  <div class="level-card high">
    <div class="level-name">Asia High</div>
    <div class="level-value" id="ianAsiaHigh">Loading...</div>
    <div class="level-foot">High of the configured Asia session.</div>
  </div>
  <div class="level-card low">
    <div class="level-name">Asia Low</div>
    <div class="level-value" id="ianAsiaLow">Loading...</div>
    <div class="level-foot">Low of the configured Asia session.</div>
  </div>
  <div class="level-card pdh">
    <div class="level-name">Previous Day High</div>
    <div class="level-value" id="ianPDH">Loading...</div>
    <div class="level-foot">Highest candle high from the previous New York calendar day.</div>
  </div>
  <div class="level-card pdl">
    <div class="level-name">Previous Day Low</div>
    <div class="level-value" id="ianPDL">Loading...</div>
    <div class="level-foot">Lowest candle low from the previous New York calendar day.</div>
  </div>
</div>
<div class="panel" style="margin-top:10px">
  <div class="info-row">
    <span class="info-label">Candle-data status</span>
    <span class="info-value" id="ianLevelsStatus">Waiting for candles...</span>
  </div>
  <div class="info-row">
    <span class="info-label">Session definition</span>
    <span class="info-value">19:00–23:59 New York time</span>
  </div>
  <div class="info-row">
    <span class="info-label">Calculation timezone</span>
    <span class="info-value">America/New_York</span>
  </div>
  <div class="panel-note">The levels are calculated from candles returned by your backend. If the feed does not contain enough candles for the relevant period, the dashboard will show an unavailable status instead of inventing values.</div>
</div>

<div class="section-heading">
  <h3>03 / Strategy Overview</h3>
  <span>Rule-based analysis</span>
</div>
<div class="two-col">
  <div class="panel">
    <div class="panel-label">Market structure workflow</div>
    <div class="info-row">
      <span class="info-label">Reference levels</span>
      <span class="info-value green">Asia H/L · PDH/PDL</span>
    </div>
    <div class="info-row">
      <span class="info-label">Liquidity event</span>
      <span class="info-value">Watch for a sweep</span>
    </div>
    <div class="info-row">
      <span class="info-label">Entry condition</span>
      <span class="info-value">Confirmation required</span>
    </div>
    <div class="info-row">
      <span class="info-label">Trade management</span>
      <span class="info-value">Predefined SL / TP</span>
    </div>
  </div>
  <div class="panel">
    <div class="panel-label">Risk controls</div>
    <div class="info-row">
      <span class="info-label">Risk per trade</span>
      <span class="info-value warning">Set before entry</span>
    </div>
    <div class="info-row">
      <span class="info-label">Spread and slippage</span>
      <span class="info-value">Check broker conditions</span>
    </div>
    <div class="info-row">
      <span class="info-label">Signal confirmation</span>
      <span class="info-value">No blind level entries</span>
    </div>
    <div class="info-row">
      <span class="info-label">Automated execution</span>
      <span class="info-value warning">Not configured</span>
    </div>
  </div>
</div>

<div class="section-heading">
  <h3>04 / System Monitor</h3>
  <span>Connection diagnostics</span>
</div>
<div class="two-col">
  <div class="panel">
    <div class="panel-label">Backend services</div>
    <div class="info-row">
      <span class="info-label">Gold price endpoint</span>
      <span class="info-value" id="ianPriceServiceStatus">Checking...</span>
    </div>
    <div class="info-row">
      <span class="info-label">Candle endpoint</span>
      <span class="info-value" id="ianCandleServiceStatus">Checking...</span>
    </div>
    <div class="info-row">
      <span class="info-label">Chart provider</span>
      <span class="info-value green">TradingView embed</span>
    </div>
  </div>
  <div class="panel">
    <div class="panel-label">Execution and account services</div>
    <div class="info-row">
      <span class="info-label">MT5 / Exness connection</span>
      <span class="info-value warning">Not configured</span>
    </div>
    <div class="info-row">
      <span class="info-label">Live order execution</span>
      <span class="info-value warning">Not configured</span>
    </div>
    <div class="info-row">
      <span class="info-label">Payment verification</span>
      <span class="info-value warning">Separate integration</span>
    </div>
  </div>
</div>

<div class="disclaimer">
  <strong>Risk notice:</strong> Market levels and chart prices are informational. A level touch is not a trade signal, and this dashboard does not establish profitability. Confirm data quality, spread, risk limits and execution rules before making any trading decision.
</div>

<div class="terminal-footer">
  IAN XAU AI PRO PLUS · RULE-BASED XAUUSD MARKET MONITOR<br>
  Data availability depends on your deployed backend and configured market-data provider.
</div>

<script>
(function () {
  const root = document.getElementById("ian-dashboard");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  const $ = id => root.querySelector("#" + id);
  const priceUrl = "/api/market/gold";
  const candlesUrl = "/api/xauusd/candles?timeframe=M1&days=3";
  const nyZone = "America/New_York";

  function setText(id, value) {
    const el = $(id);
    if (el) el.textContent = value;
  }

  function setStatus(id, value, type) {
    const el = $(id);
    if (!el) return;
    el.textContent = value;
    el.classList.remove("green", "warning", "error");
    if (type) el.classList.add(type);
  }

  function numberText(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return "Unavailable";
    return n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3
    });
  }

  function nyParts(date) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: nyZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(date);

    const result = {};
    for (const part of parts) {
      if (part.type !== "literal") result[part.type] = part.value;
    }
    return {
      year: Number(result.year),
      month: Number(result.month),
      day: Number(result.day),
      hour: Number(result.hour),
      minute: Number(result.minute),
      dateKey: result.year + "-" + result.month + "-" + result.day
    };
  }

  function shiftDateKey(dateKey, amount) {
    const [year, month, day] = dateKey.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day + amount));
    return date.getUTCFullYear() + "-" +
      String(date.getUTCMonth() + 1).padStart(2, "0") + "-" +
      String(date.getUTCDate()).padStart(2, "0");
  }

  function validCandle(candle) {
    if (!candle) return false;
    const time = Number(candle.time);
    const high = Number(candle.high);
    const low = Number(candle.low);
    return Number.isFinite(time) &&
      Number.isFinite(high) &&
      Number.isFinite(low) &&
      high >= low;
  }

  function calculateLevels(candles) {
    const nowNY = nyParts(new Date());
    const previousDay = shiftDateKey(nowNY.dateKey, -1);

    /*
      Session rule retained from the existing dashboard:
      Asia session = 19:00–23:59 New York time.
      Before 19:00 NY, use the most recently completed session.
      At or after 19:00 NY, use the session currently forming.
    */
    const asiaDate = nowNY.hour >= 19 ? nowNY.dateKey : previousDay;
    const valid = candles.filter(validCandle).map(c => {
      const timestamp = Number(c.time);
      const date = new Date(timestamp < 100000000000
        ? timestamp * 1000
        : timestamp);
      return { ...c, _ny: nyParts(date) };
    });

    const asia = valid.filter(c =>
      c._ny.dateKey === asiaDate && c._ny.hour >= 19
    );

    const pd = valid.filter(c => c._ny.dateKey === previousDay);

    const levels = {
      asiaHigh: null,
      asiaLow: null,
      pdh: null,
      pdl: null,
      asiaCount: asia.length,
      previousDayCount: pd.length,
      asiaDate,
      previousDay
    };

    if (asia.length) {
      levels.asiaHigh = Math.max(...asia.map(c => Number(c.high)));
      levels.asiaLow = Math.min(...asia.map(c => Number(c.low)));
    }

    if (pd.length) {
      levels.pdh = Math.max(...pd.map(c => Number(c.high)));
      levels.pdl = Math.min(...pd.map(c => Number(c.low)));
    }

    return levels;
  }

  let priceBusy = false;
  let candlesBusy = false;

  async function refreshGoldPrice() {
    if (priceBusy) return;
    priceBusy = true;
    const button = $("ianRefreshGold");
    if (button) button.disabled = true;

    try {
      const response = await fetch(priceUrl, { cache: "no-store" });
      if (!response.ok) throw new Error("Price endpoint HTTP " + response.status);
      const data = await response.json();

      const price = Number(data.price);
      if (!Number.isFinite(price) || price <= 0) {
        throw new Error("Price response did not contain a valid price.");
      }

      setText("ianGoldPrice", "$" + numberText(price));
      setStatus("ianGoldStatus", "Market price received", "green");
      setStatus("ianEndpointStatus", "CONNECTED", "green");
      setStatus("ianPriceServiceStatus", "CONNECTED", "green");
      setStatus("ianFeedState", "PRICE FEED LIVE", "green");
      setText("ianGoldUpdated", new Date().toLocaleTimeString());
    } catch (error) {
      setText("ianGoldPrice", "Unavailable");
      setStatus("ianGoldStatus", "Price feed unavailable", "error");
      setStatus("ianEndpointStatus", "UNAVAILABLE", "error");
      setStatus("ianPriceServiceStatus", "ERROR", "error");
      setStatus("ianFeedState", "FEED ERROR", "error");
      console.error("IAN XAU AI price feed:", error);
    } finally {
      priceBusy = false;
      if (button) button.disabled = false;
    }
  }

  async function refreshMarketLevels() {
    if (candlesBusy) return;
    candlesBusy = true;
    setStatus("ianLevelsStatus", "Loading candle data...", "warning");
    setStatus("ianCandleServiceStatus", "Checking...", "warning");

    try {
      const response = await fetch(candlesUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Candle endpoint HTTP " + response.status);
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      if (!Array.isArray(data.candles)) {
        throw new Error("Response does not contain a candles array.");
      }

      const levels = calculate
      
<!-- SECTION 3: IAN XAU AI PRO PLUS ECONOMIC CALENDAR -->
<section id="ian-calendar">
<style>
#ian-calendar {
  background:#030603;color:#e9f5eb;
  font-family:Arial,sans-serif;padding:24px 14px;
}
#ian-calendar *{box-sizing:border-box}
#ian-calendar .ic-wrap{max-width:1400px;margin:auto}
#ian-calendar .ic-panel,#ian-calendar .ic-stat{
  background:#080e0a;border:1px solid #1d3824;
  border-radius:13px;padding:16px;margin-bottom:14px;
}
#ian-calendar .ic-brand{color:#39ff78;font-size:11px;
  font-weight:bold;letter-spacing:2px}
#ian-calendar h2{font-size:clamp(25px,4vw,36px);margin:10px 0}
#ian-calendar h3{font-size:16px;margin:0 0 14px}
#ian-calendar .ic-muted{color:#8da494;font-size:12px;line-height:1.6}
#ian-calendar .ic-toolbar{display:flex;flex-wrap:wrap;
  gap:10px;align-items:end;margin-top:18px}
#ian-calendar label{display:grid;gap:6px;color:#8da494;
  font-size:12px;flex:1 1 125px}
#ian-calendar input,#ian-calendar select,#ian-calendar button{
  min-width:0;width:100%;padding:11px;
  background:#0b140e;color:#e9f5eb;
  border:1px solid #294a32;border-radius:8px;font-size:13px
}
#ian-calendar button{cursor:pointer;font-weight:bold}
#ian-calendar .ic-primary{background:#39ff78;color:#031006;
  border-color:#39ff78}
#ian-calendar .ic-status{display:inline-block;padding:7px 10px;
  border:1px solid #294a32;border-radius:20px;
  color:#ffc76b;font-size:11px;margin-top:14px}
#ian-calendar .ic-status[data-state="ok"]{color:#39ff78}
#ian-calendar .ic-status[data-state="error"]{color:#ff8585}
#ian-calendar .ic-stats{display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
#ian-calendar .ic-stat{margin:0;padding:14px;min-width:0}
#ian-calendar .ic-stat small{display:block;color:#8da494;
  font-size:10px;margin-bottom:10px}
#ian-calendar .ic-stat strong{font-size:clamp(19px,3vw,27px)}
#ian-calendar .ic-table-wrap{overflow-x:auto;width:100%}
#ian-calendar table{width:100%;min-width:760px;
  border-collapse:collapse;font-size:12px}
#ian-calendar th,#ian-calendar td{
  padding:13px 10px;text-align:left;
  border-bottom:1px solid #1d3824;vertical-align:top}
#ian-calendar th{background:#0b140e;color:#8da494;
  font-weight:normal;white-space:nowrap}
#ian-calendar .ic-impact{display:inline-block;padding:5px 7px;
  border-radius:5px;font-size:10px;font-weight:bold}
#ian-calendar .ic-high{background:#3a1717;color:#ff8585}
#ian-calendar .ic-medium{background:#392b12;color:#ffc76b}
#ian-calendar .ic-low{background:#132d1b;color:#39ff78}
#ian-calendar .ic-unknown{background:#18231b;color:#aab9ad}
#ian-calendar .ic-empty{text-align:center;color:#8da494;padding:28px 12px}
#ian-calendar .ic-alert{border-left:3px solid #ffc76b;padding:10px 12px;
  background:#100f09;color:#e9d8a5;font-size:12px;
  line-height:1.6;margin:14px 0}
@media(max-width:600px){
  #ian-calendar{padding:16px 9px}
  #ian-calendar .ic-panel{padding:12px}
  #ian-calendar .ic-stat{padding:10px}
  #ian-calendar .ic-stats{gap:6px}
  #ian-calendar .ic-stat small{font-size:9px}
  #ian-calendar .ic-toolbar button{flex-basis:100%}
}
</style>

<div class="ic-wrap">
  <div class="ic-panel">
    <div class="ic-brand">IAN XAU AI / PRO PLUS</div>
    <h2>Economic Calendar</h2>
    <p class="ic-muted">
      Monitor scheduled economic releases that may affect gold and the USD.
    </p>

    <div class="ic-toolbar">
      <label>From
        <input id="ic-from" type="date">
      </label>
      <label>To
        <input id="ic-to" type="date">
      </label>
      <label>Impact
        <select id="ic-impact">
          <option value="ALL">All impacts</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
          <option value="UNKNOWN">Unknown</option>
        </select>
      </label>
      <label>Currency
        <select id="ic-currency">
          <option value="ALL">All currencies</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="NZD">NZD</option>
        </select>
      </label>
      <label>Timezone
        <select id="ic-timezone">
          <option value="local">Device timezone</option>
          <option value="Africa/Nairobi">Nairobi</option>
          <option value="America/New_York">New York</option>
          <option value="Etc/UTC">UTC</option>
          <option value="Europe/London">London</option>
        </select>
      </label>
      <button class="ic-primary" id="ic-refresh" type="button">
        Refresh Calendar
      </button>
    </div>

    <div id="ic-status" class="ic-status" data-state="loading"
         role="status" aria-live="polite">
      Checking calendar connection...
    </div>
    <p id="ic-updated" class="ic-muted">Last updated: —</p>

    <div class="ic-alert">
      <strong>Gold news monitor:</strong>
      High-impact USD releases can increase XAUUSD volatility.
      Check the event time before entering a trade.
    </div>
  </div>

  <div class="ic-stats">
    <div class="ic-stat">
      <small>EVENTS SHOWN</small>
      <strong id="ic-total">—</strong>
    </div>
    <div class="ic-stat">
      <small>HIGH IMPACT</small>
      <strong id="ic-high-count" style="color:#ff8585">—</strong>
    </div>
    <div class="ic-stat">
      <small>UPCOMING USD</small>
      <strong id="ic-usd-count" style="color:#39ff78">—</strong>
    </div>
  </div>

  <div class="ic-panel" style="margin-top:14px">
    <h3>Upcoming Economic Events</h3>
    <div class="ic-table-wrap">
      <table>
        <thead>
          <tr>
            <th>DATE / TIME</th>
            <th>COUNTRY</th>
            <th>CURRENCY</th>
            <th>EVENT</th>
            <th>IMPACT</th>
            <th>ACTUAL</th>
            <th>FORECAST</th>
            <th>PREVIOUS</th>
          </tr>
        </thead>
        <tbody id="ic-events">
          <tr><td colspan="8" class="ic-empty">
            Connecting to the economic calendar...
          </td></tr>
        </tbody>
      </table>
    </div>
    <p class="ic-muted">
      Calendar data may be revised or delayed. Impact labels do not
      predict market direction. This calendar does not execute trades.
    </p>
  </div>
</div>

<script>
(function(){
  const root=document.getElementById("ian-calendar");
  if(!root || root.dataset.initialized==="true") return;
  root.dataset.initialized="true";

  const $=id=>root.querySelector("#"+id);
  let events=[];
  let busy=false;

  const pad=n=>String(n).padStart(2,"0");
  const dateKey=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());

  const start=new Date();
  const end=new Date();
  end.setDate(end.getDate()+7);
  $("ic-from").value=dateKey(start);
  $("ic-to").value=dateKey(end);

  function status(message,state){
    $("ic-status").textContent=message;
    $("ic-status").dataset.state=state;
  }

  function textCell(row,value){
    const cell=document.createElement("td");
    cell.textContent=value===null||value===undefined||value===""
      ?"—":String(value);
    row.appendChild(cell);
  }

  function impactOf(value){
    const v=String(value||"UNKNOWN").toUpperCase();
    return ["HIGH","MEDIUM","LOW"].includes(v)?v:"UNKNOWN";
  }

  function displayTime(value){
    const d=new Date(value);
    if(Number.isNaN(d.getTime())) return "Time unavailable";
    const zone=$("ic-timezone").value;
    const options={
      year:"numeric",month:"short",day:"2-digit",
      hour:"2-digit",minute:"2-digit"
    };
    if(zone!=="local") options.timeZone=zone;
    try{
      return new Intl.DateTimeFormat("en-GB",options).format(d);
    }catch(e){
      return "Time unavailable";
    }
  }

  function render(){
    const selectedImpact=$("ic-impact").value;
    const selectedCurrency=$("ic-currency").value;
    const now=Date.now();

    const shown=events.filter(e=>{
      if(selectedImpact!=="ALL" &&
         impactOf(e.impact)!==selectedImpact) return false;
      if(selectedCurrency!=="ALL" &&
         String(e.currency||"").toUpperCase()!==selectedCurrency) return false;
      return true;
    }).sort((a,b)=>new Date(a.date)-new Date(b.date));

    $("ic-total").textContent=shown.length;
    $("ic-high-count").textContent=
      shown.filter(e=>impactOf(e.impact)==="HIGH").length;
    $("ic-usd-count").textContent=
      shown.filter(e=>String(e.currency||"").toUpperCase()==="USD" &&
        new Date(e.date).getTime()>=now).length;

    const body=$("ic-events");
    body.replaceChildren();

    if(!shown.length){
      const row=document.createElement("tr");
      const cell=document.createElement("td");
      cell.colSpan=8;
      cell.className="ic-empty";
      cell.textContent=events.length
        ?"No events match your filters."
        ?"No calendar events are available for this date range."
        :"No events are available.";
      row.appendChild(cell);
      body.appendChild(row);
      return;
    }

    shown.forEach(e=>{
      const row=document.createElement("tr");
      textCell(row,displayTime(e.date));
      textCell(row,e.country);
      textCell(row,e.currency);
      textCell(row,e.name);

      const impactCell=document.createElement("td");
      const badge=document.createElement("span");
      const level=impactOf(e.impact);
      badge.className="ic-impact ic-"+level.toLowerCase();
      badge.textContent=level;
      impactCell.appendChild(badge);
      row.appendChild(impactCell);

      textCell(row,e.actual);
      textCell(row,e.forecast);
      textCell(row,e.previous);
      body.appendChild(row);
    });
  }

  async function load(){
    if(busy) return;
    busy=true;
    $("ic-refresh").disabled=true;
    status("Loading economic calendar...","loading");

    try{
      const from=$("ic-from").value;
      const to=$("ic-to").value;
      if(!from||!to||from>to) throw new Error("Choose a valid date range.");

      const query=new URLSearchParams({from,to});
      const response=await fetch(
        "/api/economic-calendar?"+query.toString(),
        {cache:"no-store"}
      );
      const data=await response.json();

      if(!response.ok) throw new Error(
        data.error||"Calendar service is unavailable."
      );
      if(!Array.isArray(data.events)) throw new Error(
        "Calendar response is invalid."
      );

      events=data.events;
      render();
      status("CONNECTED · "+events.length+" EVENTS RECEIVED","ok");
      $("ic-updated").textContent=
        "Last updated: "+new Date(data.updatedAt||Date.now()).toLocaleString();
    }catch(error){
      events=[];
      render();
      status("CALENDAR UNAVAILABLE · "+error.message,"error");
      $("ic-updated").textContent=
        "Check the backend endpoint and provider API configuration.";
    }finally{
      busy=false;
      $("ic-refresh").disabled=false;
    }
  }

  $("ic-refresh").addEventListener("click",load);
  ["ic-from","ic-to"].forEach(id=>$(id).addEventListener("change",load));
  ["ic-impact","ic-currency","ic-timezone"].forEach(id=>
    $(id).addEventListener("change",render)
  );

  load();
})();
</script>
</section>
<!-- END SECTION 3 -->
    
