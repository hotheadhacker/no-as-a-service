/**
 * Parse Accept-Language header and return the preferred language code
 * @param {string} acceptLanguageHeader - The Accept-Language header value
 * @returns {string|null} - The preferred language code (e.g., 'en', 'ru', 'ge') or null
 */
function parseAcceptLanguage(acceptLanguageHeader) {
  if (!acceptLanguageHeader || typeof acceptLanguageHeader !== "string") {
    return null;
  }

  // Parse the header: "en-US,en;q=0.9,ru;q=0.8"
  const languages = acceptLanguageHeader
    .split(",")
    .map((lang) => {
      const parts = lang.trim().split(";");
      const code = parts[0].trim();
      const quality = parts[1] ? parseFloat(parts[1].split("=")[1]) : 1.0;
      return { code, quality };
    })
    .sort((a, b) => b.quality - a.quality);

  if (languages.length > 0) {
    const langCode = languages[0].code.split("-")[0].toLowerCase();

    return langCode;
  }

  return null;
}

module.exports = { parseAcceptLanguage };
