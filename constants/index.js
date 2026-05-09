const path = require("path");

const PORT = process.env.PORT || 3000;
const DEFAULT_LANG = "en";
const REASONS_DIR = path.join(__dirname, "..", "reasons");

module.exports = {
  PORT,
  DEFAULT_LANG,
  REASONS_DIR,
};
