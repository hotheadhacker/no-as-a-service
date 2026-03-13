const fs = require("fs");
const path = require("path");

const { REASONS_DIR, DEFAULT_LANG } = require("../constants");

// Simple in-memory cache for loaded reason arrays
const reasonsCache = {};

function loadReasons(lang) {
  if (!lang || typeof lang !== "string") {
    lang = DEFAULT_LANG;
  }

  lang = lang.toLowerCase().replace(/[^a-z]/g, "");

  if (!/^[a-z]{2,3}$/.test(lang)) {
    lang = DEFAULT_LANG;
  }

  if (reasonsCache[lang]) {
    return reasonsCache[lang];
  }

  const filePath = path.join(REASONS_DIR, `${lang}.json`);

  try {
    if (!fs.existsSync(filePath)) {
      if (lang === DEFAULT_LANG) {
        return [];
      }

      return loadReasons(DEFAULT_LANG);
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!Array.isArray(data)) {
      reasonsCache[lang] = [];
    } else {
      reasonsCache[lang] = data;
    }

    return reasonsCache[lang];
  } catch (err) {
    console.warn(`Failed to load reasons for ${lang}: ${err.message}`);

    if (lang === DEFAULT_LANG) {
      return [];
    }

    return loadReasons(DEFAULT_LANG);
  }
}

module.exports = { loadReasons };
