//Auth page Constants
export const STACK_CONCEPTS = [
  "React components & JSX",
  "React Hooks (useState, useEffect, useContext)",
  "React Router (routing & protected routes)",
  "Context API for global state",
  "Custom hooks (useAuth, useDebounce)",
  "REST API integration with Fetch",
  "localStorage session persistence",
  "Tailwind CSS utility-first styling",
  "Form handling & validation",
  "Async/await & promise-based flows",
  "Component composition & feature folders",
];

export const STACK_CONCEPT_HEADERS = {
  eyebrow: "Skills in this project",
  heading: "Built with modern web fundamentals",
  description:
    "Taskyy uses the core React and web development skills that show up in real projects and job descriptions every day.",
};

export const AUTH_LAYOUT_LABELS = {
  login: {
    title: "Sign in to Taskyy",
    subtitle:
      "Pick up your projects, keep your routine moving, and get back into the flow with a calm, secure sign in.",
    footerPrompt: "New to Taskyy?",
    footerLink: "Create your account",
    footerLinkTo: "/signup",
  },
  signup: {
    title: "Create your Taskyy account",
    subtitle:
      "Set up a clean workspace in a few moments and start tracking work, routines, and side projects with less friction.",
    footerPrompt: "Already have an account?",
    footerLink: "Sign in instead",
    footerLinkTo: "/login",
  },
};

export const AUTH_FORM_LABELS = {
  title: "Taskyy access",
  signIn: "Sign in",
  signUp: "Sign up",
  extraMethodFirst: "Sign in with passkey",
  extraMethodSecond: "or use email",
  rememberMe: "Remember me",
  forgotPassword: "Forgot password?",
  privacyPolicy:
    " I agree to the terms of service and privacy policy for my Taskyy account.",
};
