
<!-- SECTION 1: IAN XAU AI PRO PLUS AUTHENTICATION -->
<section id="ian-auth-section">
  <style>
    #ian-auth-section {
      --ian-green: #39ff78;
      --ian-bg: #030603;
      --ian-card: #081109;
      --ian-line: rgba(57, 255, 120, .22);
      background: radial-gradient(ellipse at top, #102b17 0%, #030603 65%);
      color: #f4fff6;
      font-family: Arial, Helvetica, sans-serif;
      padding: 38px 16px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    #ian-auth-section * {
      box-sizing: border-box;
    }

    #ian-auth-section .ian-auth-card {
      width: 100%;
      max-width: 440px;
      padding: 28px 22px;
      border: 1px solid var(--ian-line);
      border-radius: 20px;
      background: linear-gradient(145deg, #0a140c, #050805);
      box-shadow: 0 20px 70px rgba(0, 0, 0, .4);
    }

    #ian-auth-section .ian-brand {
      text-align: center;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 3px;
      color: var(--ian-green);
    }

    #ian-auth-section .ian-status {
      display: table;
      margin: 18px auto 12px;
      padding: 7px 11px;
      border: 1px solid var(--ian-line);
      border-radius: 30px;
      color: var(--ian-green);
      font-size: 10px;
      letter-spacing: 1.4px;
      font-weight: 800;
    }

    #ian-auth-section h2 {
      text-align: center;
      font-size: 29px;
      letter-spacing: -1px;
      margin: 12px 0 8px;
    }

    #ian-auth-section .ian-subtitle {
      color: #9eaea1;
      text-align: center;
      font-size: 13px;
      line-height: 1.6;
      margin: 0 0 26px;
    }

    #ian-auth-section label {
      display: block;
      margin: 15px 0 7px;
      color: #dce8df;
      font-size: 12px;
      font-weight: 700;
    }

    #ian-auth-section input {
      width: 100%;
      padding: 14px;
      border: 1px solid #203725;
      border-radius: 10px;
      background: #030603;
      color: #fff;
      font-size: 14px;
      outline: none;
    }

    #ian-auth-section input:focus {
      border-color: var(--ian-green);
      box-shadow: 0 0 0 3px rgba(57, 255, 120, .07);
    }

    #ian-auth-section .ian-password-wrap {
      position: relative;
    }

    #ian-auth-section .ian-password-wrap input {
      padding-right: 65px;
    }

    #ian-auth-section .ian-show-password {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      border: 0;
      background: transparent;
      color: var(--ian-green);
      font-size: 11px;
      font-weight: 800;
      cursor: pointer;
    }

    #ian-auth-section .ian-btn {
      display: block;
      width: 100%;
      padding: 14px;
      margin-top: 15px;
      border: 1px solid var(--ian-green);
      border-radius: 10px;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .6px;
      cursor: pointer;
    }

    #ian-auth-section .ian-btn-primary {
      background: var(--ian-green);
      color: #001a07;
    }

    #ian-auth-section .ian-btn-secondary {
      background: #080e09;
      color: #f4fff6;
    }

    #ian-auth-section .ian-btn:disabled {
      opacity: .55;
      cursor: wait;
    }

    #ian-auth-section .ian-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 21px 0 6px;
      color: #829286;
      font-size: 10px;
      text-align: center;
    }

    #ian-auth-section .ian-divider::before,
    #ian-auth-section .ian-divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #203725;
    }

    #ian-auth-section .ian-links {
      text-align: center;
      color: #9eaea1;
      font-size: 12px;
      line-height: 2.1;
      margin-top: 20px;
    }

    #ian-auth-section .ian-links a {
      color: var(--ian-green);
      text-decoration: none;
      cursor: pointer;
    }

    #ian-auth-section .ian-message {
      display: none;
      margin-top: 17px;
      padding: 12px;
      border: 1px solid #29482f;
      border-radius: 9px;
      color: #d8e5db;
      font-size: 12px;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }

    #ian-auth-section .ian-security-note {
      margin-top: 22px;
      color: #77877a;
      font-size: 10px;
      text-align: center;
      line-height: 1.7;
    }

    #ian-auth-section .ian-auth-form[hidden] {
      display: none !important;
    }

    @media (max-width: 420px) {
      #ian-auth-section .ian-auth-card {
        padding: 25px 17px;
      }

      #ian-auth-section h2 {
        font-size: 25px;
      }
    }
  </style>

  <div class="ian-auth-card">
    <div class="ian-brand">IAN XAU AI</div>
    <div class="ian-status">PRO PLUS MEMBER ACCESS</div>

    <h2 id="ianAuthTitle">CLIENT LOGIN</h2>
    <p class="ian-subtitle" id="ianAuthSubtitle">
      Sign in to access your IAN XAU AI account.
    </p>

    <!-- LOGIN -->
    <form class="ian-auth-form" id="ianLoginForm">
      <label for="ianLoginEmail">Email address</label>
      <input id="ianLoginEmail" type="email"
        autocomplete="email" placeholder="you@example.com" required>

      <label for="ianLoginPassword">Password</label>
      <div class="ian-password-wrap">
        <input id="ianLoginPassword" type="password"
          autocomplete="current-password" placeholder="Your password" required>
        <button class="ian-show-password" type="button"
          data-ian-toggle="ianLoginPassword">SHOW</button>
      </div>

      <button class="ian-btn ian-btn-primary" type="submit">
        LOG IN
      </button>

      <div class="ian-divider">OR</div>

      <button class="ian-btn ian-btn-secondary" type="button"
        id="ianGoogleLogin">
        🌐 CONTINUE WITH GOOGLE
      </button>

      <div class="ian-links">
        <a href="#" data-ian-view="forgot">Forgot password?</a>
        <br>
        Don't have an account?
        <a href="#" data-ian-view="signup">Create account</a>
      </div>
    </form>

    <!-- CREATE ACCOUNT -->
    <form class="ian-auth-form" id="ianSignupForm" hidden>
      <label for="ianSignupName">Full name</label>
      <input id="ianSignupName" type="text"
        autocomplete="name" placeholder="Your full name" required>

      <label for="ianSignupEmail">Email address</label>
      <input id="ianSignupEmail" type="email"
        autocomplete="email" placeholder="you@example.com" required>

      <label for="ianSignupPassword">Create password</label>
      <div class="ian-password-wrap">
        <input id="ianSignupPassword" type="password"
          autocomplete="new-password" minlength="8"
          placeholder="At least 8 characters" required>
        <button class="ian-show-password" type="button"
          data-ian-toggle="ianSignupPassword">SHOW</button>
      </div>

      <button class="ian-btn ian-btn-primary" type="submit">
        CREATE ACCOUNT
      </button>

      <div class="ian-divider">OR</div>

      <button class="ian-btn ian-btn-secondary" type="button"
        id="ianGoogleSignup">
        🌐 SIGN UP WITH GOOGLE
      </button>

      <div class="ian-links">
        Already registered?
        <a href="#" data-ian-view="login">Log in</a>
      </div>
    </form>

    <!-- FORGOT PASSWORD -->
    <form class="ian-auth-form" id="ianForgotForm" hidden>
      <label for="ianForgotEmail">Account email</label>
      <input id="ianForgotEmail" type="email"
        autocomplete="email" placeholder="you@example.com" required>

      <button class="ian-btn ian-btn-primary" type="submit">
        SEND PASSWORD RESET LINK
      </button>

      <div class="ian-links">
        <a href="#" data-ian-view="login">Back to login</a>
      </div>
    </form>

    <!-- SET NEW PASSWORD -->
    <form class="ian-auth-form" id="ianUpdatePasswordForm" hidden>
      <label for="ianNewPassword">New password</label>
      <div class="ian-password-wrap">
        <input id="ianNewPassword" type="password"
          autocomplete="new-password" minlength="8"
          placeholder="At least 8 characters" required>
        <button class="ian-show-password" type="button"
          data-ian-toggle="ianNewPassword">SHOW</button>
      </div>

      <label for="ianConfirmPassword">Confirm new password</label>
      <div class="ian-password-wrap">
        <input id="ianConfirmPassword" type="password"
          autocomplete="new-password" minlength="8"
          placeholder="Repeat new password" required>
        <button class="ian-show-password" type="button"
          data-ian-toggle="ianConfirmPassword">SHOW</button>
      </div>

      <button class="ian-btn ian-btn-primary" type="submit">
        UPDATE PASSWORD
      </button>
    </form>

    <div id="ianAuthMessage" class="ian-message" role="status"
      aria-live="polite"></div>

    <div class="ian-security-note">
      Passwords and login sessions are handled by Supabase.
      <br>
      Trading involves risk. Profits are not guaranteed.
    </div>
  </div>

  <!-- Supabase JavaScript library -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <script>
    (() => {
      "use strict";

      /*
       * IAN XAU AI Supabase public configuration.
       * Never put a Supabase service-role key in website code.
       */
      const IAN_SUPABASE_URL =
        "https://elnqijtvqstzaxrydyox.supabase.co";

      const IAN_SUPABASE_KEY =
        "sb_publishable_krU-ZfHaxTgJC46LWL_1Tw_3iiV6FW4";

      const root = document.getElementById("ian-auth-section");
      if (!root) return;

      if (!window.supabase || !window.supabase.createClient) {
        console.error("Supabase library failed to load.");
        return;
      }

      /*
       * Reuse an existing client if the rest of the website has one.
       * This avoids creating a second client on the same page.
       */
      const client = window.ianSupabase ||
        window.supabase.createClient(
          IAN_SUPABASE_URL,
          IAN_SUPABASE_KEY,
          {
            auth: {
              persistSession: true,
              autoRefreshToken: true,
              detectSessionInUrl: true
            }
          }
        );

      window.ianSupabase = client;

      const title = root.querySelector("#ianAuthTitle");
      const subtitle = root.querySelector("#ianAuthSubtitle");
      const message = root.querySelector("#ianAuthMessage");

      const forms = {
        login: root.querySelector("#ianLoginForm"),
        signup: root.querySelector("#ianSignupForm"),
        forgot: root.querySelector("#ianForgotForm"),
        update: root.querySelector("#ianUpdatePasswordForm")
      };

      function showMessage(text, success = false) {
        message.textContent = text;
        message.style.display = text ? "block" : "none";
        message.style.borderColor = success ? "#39ff78" : "#29482f";
        message.style.color = success ? "#39ff78" : "#d8e5db";
      }

      function setView(view) {
        Object.values(forms).forEach(form => {
          form.hidden = true;
        });

        const settings = {
          login: ["CLIENT LOGIN", "Sign in to your IAN XAU AI account."],
          signup: ["CREATE ACCOUNT", "Create your IAN XAU AI member account."],
          forgot: ["RESET PASSWORD", "Receive a password reset link by email."],
          update: ["SET NEW PASSWORD", "Choose a new password for your account."]
        };

        const selected = settings[view] ? view : "login";
        forms[selected].hidden = false;
        title.textContent = settings[selected][0];
        subtitle.textContent = settings[selected][1];
        showMessage("");
      }

      root.querySelectorAll("[data-ian-view]").forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();
          setView(link.dataset.ianView);
        });
      });

      root.querySelectorAll("[data-ian-toggle]").forEach(button => {
        button.addEventListener("click", () => {
          const input = root.querySelector(
            "#" + button.dataset.ianToggle
          );
          if (!input) return;

          const reveal = input.type === "password";
          input.type = reveal ? "text" : "password";
          button.textContent = reveal ? "HIDE" : "SHOW";
        });
      });

      async function withButtonLoading(form, action) {
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "PLEASE WAIT...";
        showMessage("");

        try {
          await action();
        } catch (error) {
          showMessage(error.message || "Something went wrong. Please try again.");
        } finally {
          button.disabled = false;
          button.textContent = originalText;
        }
      }

      /* Email login */
      forms.login.addEventListener("submit", event => {
        event.preventDefault();

        withButtonLoading(forms.login, async () => {
          const email = root.querySelector("#ianLoginEmail").value.trim();
          const password = root.querySelector("#ianLoginPassword").value;

          const { error } = await client.auth.signInWithPassword({
            email,
            password
          });

          if (error) throw error;

          showMessage("Login successful.", true);

          /*
           * Connect your existing dashboard-opening logic here if required.
           * This code does not grant paid access or verify payment.
           */
          if (typeof window.ianOnLoginSuccess === "function") {
            window.ianOnLoginSuccess();
          }
        });
      });

      /* Create account */
      forms.signup.addEventListener("submit", event => {
        event.preventDefault();

        withButtonLoading(forms.signup, async () => {
          const name = root.querySelector("#ianSignupName").value.trim();
          const email = root.querySelector("#ianSignupEmail").value.trim();
          const password = root.querySelector("#ianSignupPassword").value;

          if (password.length < 8) {
            throw new Error("Your password must contain at least 8 characters.");
          }

          const { data, error } = await client.auth.signUp({
            email,
            password,
            options: {
              data: { full_name: name },
              emailRedirectTo: window.location.origin +
                window.location.pathname
            }
          });

          if (error) throw error;

          if (data.session) {
            showMessage("Account created and signed in successfully.", true);
          } else {
            showMessage(
              "Account created. Check your email to confirm your account.",
              true
            );
          }
        });
      });

      /* Google login and signup */
      async function googleSignIn() {
        showMessage("Opening Google sign-in...");

        const { error } = await client.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: window.location.origin +
              window.location.pathname
          }
        });

        if (error) showMessage(error.message);
      }

      root.querySelector("#ianGoogleLogin")
        .addEventListener("click", googleSignIn);

      root.querySelector("#ianGoogleSignup")
        .addEventListener("click", googleSignIn);

      /* Password reset email */
      forms.forgot.addEventListener("submit", event => {
        event.preventDefault();

        withButtonLoading(forms.forgot, async () => {
          const email = root.querySelector("#ianForgotEmail").value.trim();

          const { error } = await client.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin +
              window.location.pathname
          });

          if (error) throw error;

          showMessage("Password reset email sent. Check your inbox.", true);
        });
      });

      /* Save new password after opening the reset link */
      forms.update.addEventListener("submit", event => {
        event.preventDefault();

        withButtonLoading(forms.update, async () => {
          const password = root.querySelector("#ianNewPassword").value;
          const confirm = root.querySelector("#ianConfirmPassword").value;

          if (password.length < 8) {
            throw new Error("Your password must contain at least 8 characters.");
          }

          if (password !== confirm) {
            throw new Error("The passwords do not match.");
          }

          const { error } = await client.auth.updateUser({ password });

          if (error) throw error;

          forms.update.reset();
          showMessage("Password updated successfully.", true);
          setTimeout(() => setView("login"), 1500);
        });
      });

      /* Detect password-recovery links */
      client.auth.onAuthStateChange((event) => {
        if (event === "PASSWORD_RECOVERY") {
          setView("update");
          showMessage("Choose your new password below.", true);
        }
      });

      if (
        window.location.hash.includes("type=recovery") ||
        window.location.hash.includes("access_token=")
      ) {
        setView("update");
      }

      /* Keep the login screen as the default initial view */
      setView("login");
    })();
  </script>
</section>
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
