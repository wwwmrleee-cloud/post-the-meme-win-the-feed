// Post the Meme, Win the Feed — entry program (Node 22, standard library only).
//
// The entry is the X post itself: a meme picture about make.fun, posted from a
// public X account with @_myronera tagged and a make.fun play code in the text.
// This program does exactly one thing: it copies POST.json (which names the
// post's address) from the repository root to /output/POST.json, where the
// house's gate scorer reads it. Nothing this program writes about the post
// is scored — the house reads the post itself from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate POST.json before handing it on: it must be a JSON object naming
// the post's address as a non-empty string. A placeholder or a malformed
// file fails loudly here instead of silently reaching the gate scorer.
function copyPostFile(): void {
  const source = join(BOT_DIR, 'POST.json');
  const target = join(OUTPUT_DIR, 'POST.json');
  const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    typeof (parsed as { url?: unknown }).url !== 'string' ||
    ((parsed as { url: string }).url as string).trim() === ''
  ) {
    throw new Error('POST.json must be a JSON object with a non-empty "url" string');
  }
  copyFileSync(source, target);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyPostFile();
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
