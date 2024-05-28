/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      /* Fontes */
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
        robotoBold: ["RobotoBold", "sans-serif"],
        robotoMedium: ["RobotoMedium", "sans-serif"],
        robotoSemiBold: ["RobotoSemiBold", "sans-serif"],
      },
      
      /* Animação de imagem */
      animation: {
        blink: "blink 3s infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      
      /* Cores personalizadas */
      colors: {
        customPurple: '#6B1872',
        customPurple1: "#CEB6D2",
      },
    },
  },
  plugins: [],
};

