module.exports = {
  purge: ["./templates/**/*.html", "./theme/**/*.html"],
  darkMode: "class",
  theme: {},
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
