module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        light: {
          primary: "#640CF3",
          secondary: "#F000B8",
          accent: "#FFE810",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "synthwave",
    ],
  },
  plugins: [require("daisyui")]
}
