import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh — one word: the word the agent blurts when it
// doesn't know what to do.
// Mechanism: stalling by searching. The agent buys time by
// "googling" instead of admitting it is stuck — a machine action
// verb, blurted flat, instantly understood. The word is the stall
// itself: no apology, no filler, no explanation.
const line = "googling";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
