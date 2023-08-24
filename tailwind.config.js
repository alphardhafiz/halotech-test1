/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "template-icon": "url('./src/assets/template.svg')",
        "template-icon-active": "url('./src/assets/template (1).svg')",
        "album-icon": "url('./src/assets/album.svg')",
        "album-icon-active": "url('./src/assets/album (1).svg')",
        "webite-icon": "url('./src/assets/website.svg')",
        "website-icon-active": "url('./src/assets/template (1).svg')",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fade 1s linear 0s infinite",
      },
    },
  },
  plugins: [],
};
