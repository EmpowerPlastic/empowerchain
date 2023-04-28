/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                greenPrimary: "#00C131",
                greenMedium: "#00B82E",
                greenDark: "#007A1F",
                black: "rgba(0, 0, 0, 1)",
                lightBlack: "rgba(255, 255, 255, 0.06)",
                dropdownBlack: "rgba(33, 33, 33, 1)",
                white: "#FFFFFF",
                whiteLight: "#F6F5F5",
                darkGray: "rgba(255, 255, 255, 0.19)",
                lightGray: "rgba(255, 255, 255, 0.1)",
                buttonGray: "rgba(74, 74, 74, 1)",
                mediumGray: "rgba(255, 255, 255, 0.13)",
                textGray: "rgba(255, 255, 255, 0.6)",
                textLightGray: "rgba(155, 155, 155, 1)",
                textPlaceHolderGray: "rgba(230, 230, 230, 1)",
                dropDownText: "rgba(255, 255, 255, 0.6)",
                navBarBlack: "rgba(0, 0, 0, 0.95)",
                borderBlack:"rgba(255, 255, 255, 0.03)",
                dividerGray:"rgba(255, 255, 255, 0.08)"
            },
            fontSize: {
                title32: "32px",
                title26: "26px",
                title16:"16px",
                title24: "24px",
                title40: "40px",
                title64: "64px",
                title12: "12px",
                title13: "13px",
                title11: "11px",
                title14: "14px",
                title15: "15px",
                title18: "18px",
                title38: "38px",
            },
            fontFamily: {
                openSans: ["Open Sans", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            borderRadius: {
                sm: "15px",
                lg: "20px",
                xl: "50px",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}

