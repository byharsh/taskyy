import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  ArrowRight,
  BadgeCheck,
  Fingerprint,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import { AuthField, AuthFeatureCard } from "../components";

const authCopy = {
  login: {
    badge: "Welcome back",
    title: "Sign in to Taskyy",
    subtitle:
      "Pick up your projects, keep your routine moving, and get back into the flow with a calm, secure sign in.",
    heroTitle: "The fastest way back to your workspace.",
    heroDescription:
      "Taskyy keeps the interface light, warm, and focused so you can jump straight into your day without visual noise.",
    features: [
      {
        icon: ShieldCheck,
        title: "Private and secure",
        description:
          "Use your password or a passkey to keep access quick without losing control.",
        toneClassName: "bg-[#fff1eb]",
      },
      {
        icon: Sparkles,
        title: "Calm, familiar flow",
        description:
          "The same soft colors and rounded spacing from the dashboard keep the experience consistent.",
        toneClassName: "bg-[#fff7e6]",
      },
      {
        icon: BadgeCheck,
        title: "Ready for momentum",
        description:
          "Your tasks, projects, and progress are waiting exactly where you left them.",
        toneClassName: "bg-[#f2f5ff]",
      },
    ],
    footerPrompt: "New to Taskyy?",
    footerLink: "Create your account",
    footerLinkTo: "/signup",
  },
  signup: {
    badge: "Start here",
    title: "Create your Taskyy account",
    subtitle:
      "Set up a clean workspace in a few moments and start tracking work, routines, and side projects with less friction.",
    heroTitle: "A fresh account with the same warm energy.",
    heroDescription:
      "Sign up once and keep your to-dos, projects, and daily planning organized in one space designed to feel light and approachable.",
    features: [
      {
        icon: UserRound,
        title: "Simple account setup",
        description:
          "Add your details once and the app will be ready to personalize your workspace.",
        toneClassName: "bg-[#fff1eb]",
      },
      {
        icon: LockKeyhole,
        title: "Security built in",
        description:
          "Choose a password now, and later you can switch to passkeys for faster sign in.",
        toneClassName: "bg-[#fff7e6]",
      },
      {
        icon: Fingerprint,
        title: "Flexible access",
        description:
          "Move between desktop and mobile while keeping the same polished experience.",
        toneClassName: "bg-[#f2f5ff]",
      },
    ],
    footerPrompt: "Already have an account?",
    footerLink: "Sign in instead",
    footerLinkTo: "/login",
  },
};

const switchLinkClassName = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-sm font-medium transition",
    isActive
      ? "bg-white text-[#2f271f] shadow-[0_8px_20px_rgba(214,158,140,0.16)]"
      : "text-[#8a7e76] hover:text-[#554b43]",
  ].join(" ");

const AuthPage = ({ mode = "login" }) => {
  const isLogin = mode === "login";
  const content = authCopy[isLogin ? "login" : "signup"];
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top_left,_rgba(255,222,216,0.58),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,246,214,0.54),_transparent_32%),linear-gradient(180deg,#fff8f3_0%,#fcf5f0_100%)] px-4 py-4 text-[#2f271f] sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100dvh-2rem)] max-w-6xl gap-5 lg:grid-cols-[1.03fr_0.97fr]">
        <section className="relative overflow-hidden rounded-[36px] border border-[#f0ddd2] bg-[linear-gradient(180deg,#fffdfb_0%,#fff6ef_100%)] p-6 shadow-[0_22px_60px_rgba(213,150,132,0.14)] sm:p-8 lg:p-10">
          <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-[#ffe7de] blur-3xl" />
          <div className="absolute bottom-[-3rem] left-[-3rem] h-36 w-36 rounded-full bg-[#fff2c8] blur-3xl" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f1ddd0] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a8679] shadow-[0_8px_20px_rgba(215,160,144,0.1)] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#ef9c8e]" strokeWidth={2} />
                <span>{content.badge}</span>
              </div>

              <div className="max-w-xl space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight text-[#2f271f] sm:text-4xl">
                  {content.heroTitle}
                </h1>
                <p className="max-w-lg text-sm leading-7 text-[#796e66] sm:text-[15px]">
                  {content.heroDescription}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {content.features.map((feature) => (
                <AuthFeatureCard key={feature.title} {...feature} />
              ))}
            </div>

            <div className="grid gap-3 rounded-[30px] border border-[#f4e4d8] bg-white/75 p-4 shadow-[0_10px_28px_rgba(213,154,134,0.08)] backdrop-blur-sm sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a28d80]">
                  Focused feel
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6f625a]">
                  Soft shadows, airy spacing, and warm neutrals keep the interface friendly.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a28d80]">
                  Fast access
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6f625a]">
                  Passkey sign in gives login a one-tap option when the device supports it.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a28d80]">
                  Same workflow
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6f625a]">
                  Sign in or sign up without breaking the visual language used in the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-[36px] border border-[#efdacc] bg-white/95 p-6 shadow-[0_18px_42px_rgba(211,149,131,0.12)] sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex rounded-full bg-[#fff3ec] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d07f71]">
                  Taskyy access
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2f271f]">
                  {content.title}
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#786d66]">
                  {content.subtitle}
                </p>
              </div>

              <div className="hidden rounded-full border border-[#f1ded4] bg-[#fff8f3] p-1 shadow-[0_8px_24px_rgba(214,158,140,0.08)] sm:flex">
                <NavLink to="/login" className={switchLinkClassName} end>
                  Sign in
                </NavLink>
                <NavLink to="/signup" className={switchLinkClassName} end>
                  Sign up
                </NavLink>
              </div>
            </div>

            <div className="mt-6 flex gap-2 sm:hidden">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  [
                    "flex-1 rounded-full border px-4 py-2.5 text-center text-sm font-medium transition",
                    isActive
                      ? "border-[#efb4a8] bg-[#fff3ed] text-[#2f271f] shadow-[0_8px_18px_rgba(214,158,140,0.12)]"
                      : "border-[#e7d6cb] bg-white text-[#8a7e76] hover:text-[#554b43]",
                  ].join(" ")
                }
                end
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  [
                    "flex-1 rounded-full border px-4 py-2.5 text-center text-sm font-medium transition",
                    isActive
                      ? "border-[#efb4a8] bg-[#fff3ed] text-[#2f271f] shadow-[0_8px_18px_rgba(214,158,140,0.12)]"
                      : "border-[#e7d6cb] bg-white text-[#8a7e76] hover:text-[#554b43]",
                  ].join(" ")
                }
                end
              >
                Sign up
              </NavLink>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {isLogin ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#edded4] bg-[#fff8f4] px-4 py-3 text-sm font-medium text-[#4f433c] shadow-[0_10px_22px_rgba(213,154,134,0.08)] transition hover:border-[#efc2b8] hover:bg-[#fff3ed]"
                  >
                    <Fingerprint className="h-4 w-4 text-[#d47f72]" strokeWidth={2} />
                    Sign in with passkey
                  </button>

                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-[#efe2d8]" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-xs font-medium uppercase tracking-[0.2em] text-[#ab9d93]">
                        or use email
                      </span>
                    </div>
                  </div>

                  <AuthField
                    id="login-email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    placeholder="sarah@example.com"
                    rightSlot={<Mail className="h-4 w-4 text-[#b49d91]" strokeWidth={2} />}
                  />

                  <AuthField
                    id="login-password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    rightSlot={
                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="text-[#9d8e84] transition hover:text-[#544941]"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" strokeWidth={2} />
                        ) : (
                          <Eye className="h-4 w-4" strokeWidth={2} />
                        )}
                      </button>
                    }
                    helperText="Use the same password you created for your workspace account."
                  />
                </>
              ) : (
                <>
                  <AuthField
                    id="signup-name"
                    label="Full name"
                    type="text"
                    autoComplete="name"
                    placeholder="Sarah Sunshine"
                    rightSlot={<UserRound className="h-4 w-4 text-[#b49d91]" strokeWidth={2} />}
                  />

                  <AuthField
                    id="signup-email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    placeholder="sarah@example.com"
                    rightSlot={<Mail className="h-4 w-4 text-[#b49d91]" strokeWidth={2} />}
                  />

                  <AuthField
                    id="signup-password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
                    rightSlot={
                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="text-[#9d8e84] transition hover:text-[#544941]"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" strokeWidth={2} />
                        ) : (
                          <Eye className="h-4 w-4" strokeWidth={2} />
                        )}
                      </button>
                    }
                    helperText="Use at least 8 characters with a mix of letters, numbers, and symbols."
                  />

                  <AuthField
                    id="signup-confirm-password"
                    label="Confirm password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repeat your password"
                    rightSlot={
                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="text-[#9d8e84] transition hover:text-[#544941]"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" strokeWidth={2} />
                        ) : (
                          <Eye className="h-4 w-4" strokeWidth={2} />
                        )}
                      </button>
                    }
                  />
                </>
              )}

              {isLogin ? (
                <div className="flex items-center justify-between gap-4 pt-1">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-[#695c54]">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#ddcec4] text-[#ef9c8e] focus:ring-[#ffd8cb]"
                    />
                    Remember me
                  </label>

                  <Link
                    to="/login"
                    className="text-sm font-medium text-[#cf7566] transition hover:text-[#b25d50]"
                  >
                    Forgot password?
                  </Link>
                </div>
              ) : (
                <label className="flex items-start gap-3 rounded-[24px] border border-[#f0e2d7] bg-[#fffaf6] p-4 text-sm leading-6 text-[#6b5d54]">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-[#ddcec4] text-[#ef9c8e] focus:ring-[#ffd8cb]"
                  />
                  <span>
                    I agree to the terms of service and privacy policy for my Taskyy account.
                  </span>
                </label>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff8f84] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(233,130,116,0.26)] transition hover:-translate-y-0.5 hover:bg-[#f98378]"
              >
                {isLogin ? "Sign in" : "Create account"}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>

              <p className="text-center text-sm text-[#7f7269]">
                {content.footerPrompt}{" "}
                <Link
                  to={content.footerLinkTo}
                  className="font-semibold text-[#cf7566] transition hover:text-[#b25d50]"
                >
                  {content.footerLink}
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthPage;
