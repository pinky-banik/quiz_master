/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "",    
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2491eb",
          secondary: "#0FCFEC",
          accent: "#19D3AE",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
