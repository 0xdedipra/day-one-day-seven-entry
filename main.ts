// Entry program for the make.fun bounty
// "Day one, day seven"
// (post-tiktok-day-one-day-seven-20261123-0327).
//
// The harness mounts this repository at MAKEFUN_BOT_DIR (default /bot) and a
// writable directory at MAKEFUN_OUTPUT_DIR (default /output). The program's
// whole job: carry VIDEO.json — which names the TikTok post holding the
// day-one / day-seven video — from the bot directory to the output
// directory, byte for byte. Silent on success; exit 1 with a message on
// failure.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(botDir, "VIDEO.json");
const dst = join(outDir, "VIDEO.json");

try {
  if (!existsSync(src)) {
    throw new Error(`VIDEO.json not found in bot dir (${src})`);
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(src, dst);
} catch (err) {
  console.error(`main: failed to copy VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
