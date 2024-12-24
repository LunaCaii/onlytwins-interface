import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif']
      },
      backgroundImage: {
        'ai-gril': "url('/ai-gril.svg')",
        'rectangle-bg': "url('/rectangle.svg')",
        'router-map-bg': "url('/rm-index2-wap-bg.svg')",
        'footer': "url('/footer.png')",
        'chain': "url('/chain.svg')"
      },
      colors: {
        'nav-bg': 'rgba(89, 89, 89, 0.50)',
      },
    },
  },
  plugins: [],
} satisfies Config;
