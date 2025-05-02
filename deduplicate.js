const { reasonLanguages, readJson, writeJson } = require("./reasons.js");

for (const [lang, file] of reasonLanguages()) {
  const reasons = readJson(file);
  const normalized = [...new Set(reasons)].sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
  writeJson(file, normalized);
}
