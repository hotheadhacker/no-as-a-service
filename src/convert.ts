import fs from "fs"

const data = JSON.parse(fs.readFileSync("reasons.json", "utf-8")) as string[];

const reasons = data.map((reason) => ({ reason }));

fs.writeFileSync("convertedReasons.js", "export const reasons = " + JSON.stringify(reasons, null, 2) + ";");