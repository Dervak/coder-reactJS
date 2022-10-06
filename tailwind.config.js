/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s linear infinite',
      },
      colors: {
        "softred": {
          "50": "#feeaec",
          "100": "#fdd5d9",
          "200": "#fbacb3",
          "300": "#f9828d",
          "400": "#f75967",
          "500": "#f52f41",
          "600": "#c42634",
          "700": "#931c27",
          "800": "#62131a",
          "900": "#31090d",
          "sp": "#ffafc6"
        },
        "seagreen": {
          "50": "#eafefa",
          "100": "#d5fdf6",
          "200": "#acfbed",
          "300": "#82f9e3",
          "400": "#59f7da",
          "500": "#2ff5d1",
          "600": "#26c4a7",
          "700": "#1c937d",
          "800": "#136254",
          "900": "#09312a"
        }
      },
      boxShadow: {
        "sp": "0 2px 10px rgba(0, 0, 0, 0.3)"
      },
      dropShadow: {
        "sp": [
          "-1px 1px 5px rgb(41 42 45 / 0.2)",
          "2px -1px 5px rgb(41 42 45 / 0.2)"]
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: false,
  },
}
