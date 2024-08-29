/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    `/base/**/*.{vue,js,ts}`,
    `/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `/pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/utils/**/*.{js,ts}`,
    `/error.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PoppinsRegular', ...defaultTheme.fontFamily.sans],
        PaperlogyThin: ["Paperlogy-1Thin"],
        Paperlogy3Light: ["Paperlogy-3Light"],
        Paperlogy4Regular: ["Paperlogy-4Regular"],
        Paperlogy5Medium: ["Paperlogy-5Medium"],
        Paperlogy6SemiBold: ["Paperlogy-6SemiBold"],
        Paperlogy7Bold: ["Paperlogy-7Bold"],
        Paperlogy8ExtraBold: ["Paperlogy-8ExtraBold"],
        Paperlogy9Black: ["Paperlogy-9Black"],
      },
      colors: {
        ...defaultTheme.colors,
        indigo: {
          50: "#fff1f3",
          100: "#ffe3e7",
          200: "#ffccd4",
          300: "#ffa2b1",
          400: "#fe6e88",
          500: "#f72d57",
          600: "#e5194d",
          700: "#c10f41",
          800: "#a20f3d",
          900: "#8a113a",
          950: "#4d041b",
        },
      },
      keyframes: {
        "move-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "move-up": "move-up 0.5s ease-in-out",
      },
    },
  },
  // 폰트 셋팅 하려면 install 받아야합니다.
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
