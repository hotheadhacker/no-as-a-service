const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const readJson = (jsonFile) => JSON.parse(readFileSync(jsonFile, "utf8"));
const writeJson = (jsonFile, obj, space = 2, replacer = null) => writeFileSync(jsonFile, JSON.stringify(obj, replacer, space));
function* reasonLanguages() {
  const result = {};
  for (const file of readdirSync(REASONS_PATH)) {
    const m = file.match(REASONS_PATTERN);
    if (m) {
      yield [m[1] ?? 'default', join(REASONS_PATH, file)];
    }
  }
  return result;

};

const REASONS_PATH = __dirname;
const REASONS_PATTERN = /^reasons(?:\.([a-z]{2}-[A-Z]{2}))?\.json$/i;
const readReasons = () => {
  const result = {};
  for (const [lang, file] of reasonLanguages()) {
    result[lang] = readJson(file);
  }
  return result;
};

module.exports = {
  readReasons,
  reasonLanguages,
  readJson,
  writeJson,
};