/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        colors: {
            yellow: "hsl(47, 88%, 63%)",
            white: "hsl(0, 0%, 100%)",
            grey: "hsl(0, 0%, 50%)",
            black: "hsl(0, 0%, 7%)",
        },
        fontFamily: {
            sans: ["Figtree", "sans-serif"],
        },
        extend: {
            inset: {
                shadow: "0 -0.5rem -0.5rem 0px",
            },
        },
    },
    plugins: [],
};
