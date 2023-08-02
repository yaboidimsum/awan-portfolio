/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./404.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      white: "#F1F6F9",
      // "blue-grey": "#394867",
      // "dark-blue": "#212A3E",
      "its-blue": "#0085FF",
      "green-neon": "#0FFF27",
      "dark-black": "#050505",
      "udemy-purple": "#A336EE",
      grey: "#9BA4B5",
    },
    boxShadow: {
      sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
      lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
    },
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "0.05px" }],
      sm: ["16px", { lineHeight: "24px", letterSpacing: "0.05px" }],
      base: ["18px", { lineHeight: "24px", letterSpacing: "0.05px" }],
      lg: ["20px", { lineHeight: "24px", letterSpacing: "0.05px" }],
      xl: ["24px", { lineHeight: "32px", letterSpacing: "0.05px" }],
      "2xl": ["32px", { lineHeight: "48px", letterSpacing: "0.055px" }],
      "3xl": ["48px", { lineHeight: "64px", letterSpacing: "0.055px" }],
      "4xl": ["64px", { lineHeight: "84px", letterSpacing: "0.055px" }],
      "5xl": ["72px", { lineHeight: "90px", letterSpacing: "0.055px" }],
      "6xl": ["80px", { lineHeight: "96px", letterSpacing: "0.055px" }],
    },
    fontFamily: {
      dmmono: ["DM Mono", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        // mobile: "320px",
        // tablet: "960px",
        // desktop: "1280px",
        // sm: "370px",
        // md: "768px",
        "2xl": "1920px",
      },
    },
    plugins: [],
  },
};
