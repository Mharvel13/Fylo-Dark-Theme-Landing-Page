/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                "Dark-Blue-sign-up": "hsl(217, 28%, 15%)",
                "Dark-Blue-main": "hsl(218, 28%, 13%)",
                "Dark-Blue-footer": "hsl(216, 53%, 9%)",
                "Dark-Blue-testimonials": "hsl(219, 30%, 18%)",
                "Cyan-cta": "hsl(176, 68%, 64%)",
                "Blue-cta": "hsl(198, 60%, 50%)",
                "Light-Red-error": "hsl(0, 100%, 63%)",
                White: " hsl(0, 0%, 100%)",
            },
            backgroundImage: {
                "wavy-pattern-desktop": "url('/images/bg-curvy-desktop.svg')",
                "wavy-pattern-mobile": "url('/images/bg-curvy-mobile.svg')",
            },
        },
    },
    plugins: [],
};
