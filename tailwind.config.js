/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clinic: {
          50: "#effffd",
          100: "#d6f6f1",
          200: "#afeae1",
          300: "#80d9cc",
          400: "#4dc2b3",
          500: "#2ea89a",
          600: "#25897f",
          700: "#226d66",
          800: "#205853",
          900: "#1f4a46",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "Sora",
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glass: "0 10px 40px -22px rgba(26, 112, 108, 0.45)",
        soft: "0 6px 20px -14px rgba(26, 112, 108, 0.4)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 15% 20%, rgba(112, 220, 204, 0.18), transparent 40%), radial-gradient(circle at 85% 15%, rgba(98, 173, 235, 0.15), transparent 42%), linear-gradient(165deg, #f8fffe 0%, #f1f8f9 50%, #ecf4f5 100%)",
      },
    },
  },
  plugins: [],
};
