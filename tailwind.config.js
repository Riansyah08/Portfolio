module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", // ✅ for Flowbite
  ],
  darkMode: "class", // ✅ must be "class"
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
