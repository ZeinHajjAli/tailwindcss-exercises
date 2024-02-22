/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        colors: {
            white: "hsl(0, 0%, 100%)",
            lightPink: "hsl(275, 100%, 97%)",
            grayishPurple: "hsl(292, 16%, 49%)",
            darkPurple: "hsl(292, 42%, 14%)",
            purple: "hsl(281, 83%, 54%)",
        },
        fontFamily: {
            sans: ["Work Sans", "sans-serif"],
        },
        extend: {
            screens: {
                mobile: "375px",
                desktop: "1440px",
            },
            backgroundImage: {
                desktop: "url('/assets/images/background-pattern-desktop.svg')",
                mobile: "url('/assets/images/background-pattern-mobile.svg')",
            },
            backgroundSize: {
                "100%": "100%",
            },
        },
    },
    plugins: [],
};
