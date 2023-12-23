/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: "jit",
    content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
    darkMode: "media", //media, class. media = device preference, class = user button
    theme: {
        extend:{ //standard breakpoints for all pojetcts
            screens:{
                xxs: "320px",
                xs: "480px",
            }
        }
    },
    plugins: [],
    data: {
      checked: 'ui~="checked"',
    },
};
