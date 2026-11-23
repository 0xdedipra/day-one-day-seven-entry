// main.ts — the entry program for the "Day one, day seven" make.fun bounty.
//
// Why this file exists: the bounty entry itself is a TikTok video, and the
// only thing the grader needs from this repository is the address of that
// post. VIDEO.json, sitting beside this file, holds the address. When the
// harness runs this program it mounts the repo as the "bot" directory and
// hands us a separate output directory; our single task is to deliver a
// faithful copy of VIDEO.json into that output directory so the checker can
// read which post to score.
//
// Behaviour contract:
//   - source:      <bot dir>/VIDEO.json     (MAKEFUN_BOT_DIR, default /bot)
//   - destination: <output dir>/VIDEO.json  (MAKEFUN_OUTPUT_DIR, default /output)
//   - the output directory is created when it does not exist yet
//   - success is silent and exits 0
//   - any failure prints one clear line to stderr and exits 1
// Node's standard library is all we need — no packages, no network.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

// Resolve the two directories once, up front. The environment variables let
// the harness (and a local test) point the program at scratch folders;
// the defaults match the grader's mount points.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const destPath = join(outputDir, "VIDEO.json");

// The copy itself. A missing or unreadable source is a hard failure: without
// VIDEO.json there is no entry to check, so we say so plainly and stop
// rather than writing an empty or partial output.
function deliverVideoJson(): void {
  let info;
  try {
    info = statSync(sourcePath);
  } catch {
    throw new Error(`no VIDEO.json at ${sourcePath} — nothing to deliver`);
  }
  if (!info.isFile()) {
    throw new Error(`${sourcePath} exists but is not a file`);
  }
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, destPath);
}

// Entry point: run the delivery, translate any failure into the contract's
// single stderr line plus exit code 1, and otherwise exit quietly.
try {
  deliverVideoJson();
} catch (err) {
  console.error(`day-one-day-seven entry: ${(err as Error).message}`);
  process.exit(1);
}
