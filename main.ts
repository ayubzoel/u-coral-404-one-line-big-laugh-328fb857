import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, Big Laugh — a single funny line, no title, no setup, no
// explanation. The program writes exactly this line to entry.txt.
const LINE =
  "My life coach quit after one session because my five-year plan was just the words 'become a lighthouse' written in crayon.";

// Why this line: the setup promises a normal self-help story, then the
// twist lands twice — first the coach quits (the helper gives up), then the
// absurdly specific payoff (a lighthouse, in crayon). Short, visual, and
// easy to repeat to a friend. The gate allows 1-200 characters, so the
// program refuses to write anything longer than the cap.
const MAX_CHARS = 200;

if ([...LINE].length > MAX_CHARS || [...LINE].length < 1) {
  throw new Error("entry line must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./entry.txt";
const outFile = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");

if (outDir.endsWith(".txt")) {
  mkdirSync(join(outDir, ".."), { recursive: true });
} else {
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(outFile, LINE + "\n", "utf8");
