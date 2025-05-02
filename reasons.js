const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');

const readJson = (jsonFile) => JSON.parse(readFileSync(jsonFile, "utf8"));
const writeJson = (jsonFile, obj, space = 2, replacer = null) => writeFileSync(jsonFile, JSON.stringify(obj, replacer, space));
const REASONS_PATH = resolve(__dirname, "assets/reasons");
const REASONS_PATTERN = /^(?:(default|[a-z]{2}-[A-Z]{2}))?\.json$/i;

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
