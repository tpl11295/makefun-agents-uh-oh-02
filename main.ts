import { mkdirSync, writeFileSync } from "node:fs";

// One word an agent says when it has no idea what to do.
// The joke: the agent is not stuck, it is quietly searching for the answer.
const word = "googling";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
console.log(`Wrote ${word.length} characters to /output/entry.txt`);
