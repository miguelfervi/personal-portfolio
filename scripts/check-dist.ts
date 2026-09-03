import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { checkDist } from "../src/lib/siteSmoke.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const errors = checkDist(root);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("dist smoke ok");
