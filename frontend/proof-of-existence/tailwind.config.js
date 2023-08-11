/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: "rgba(0, 0, 0, 0.22)",
        darkBlack: "rgba(0, 0, 0, 0.91)",
        black: "rgba(0, 0, 0, 1)",
        lightGreen: "#00D045",
        lightGray: "rgba(255, 255, 255, 0.2)",
        gray: "rgba(112, 112, 112, 1)",
        white: "rgba(255, 255, 255, 1)",
        lightWhite: "rgba(255, 255, 255, 0.08)",
        //Proper naming
        textPrimary: "#022D41",
        textSecondary: "#00D045",
        textTertiary: "rgba(255, 255, 255, 1)",
        bgPrimary: "rgba(255, 255, 255, 1)",
        bgSecondary: "#00D045",
        bgTertiary: "#022D41",
        bgBigButton: "rgba(255, 255, 255, 0.55)",
        hashBackground: "rgba(217, 217, 217, 0.30)",
        modalBackground: "rgba(3, 3, 3, 0.85)",
      },
      fontSize: {
        title28: "1.75rem",
        title22: "1.275rem",
        title16: "1rem",
        title14: "0.875rem",
        title12: "0.75rem",
      },
      borderRadius: {
        sm: "10px",
        lg: "12px",
        xl: "15px",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "main-image": "url('/src/assets/images/main-bg.png')",
        "emp-astro": "url('/src/assets/images/emp-astro-1.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
