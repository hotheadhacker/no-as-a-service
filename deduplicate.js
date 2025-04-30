const { readFileSync, writeFileSync } = require("fs");
const reasons = JSON.parse(readFileSync("./reasons.json", "utf8"));
const deduplicated = [...new Set(reasons)];
const sorted = deduplicated.toSorted((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : a > b ? 1 : 0;
});
writeFileSync("./reasons.json", JSON.stringify(sorted, null, 2), "utf8");
