/* eslint-disable no-undef */
const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/main.jsx", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  optimization: {
    usedExports: true,
  },
};
