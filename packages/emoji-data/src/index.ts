import type { Emoji } from "./types";

const smileys = ["🙂", "😀", "😃", "😄", "😁", "😆", "😅"];

export const emojis: Emoji[] = Array.from({ length: 300 }).map((_, idx) => ({
  emoji: smileys[idx % smileys.length]!,
  name: `smiley-${idx}`,
}));

export type * from "./types";
