export const tones = ["violet", "teal", "coral", "sky"] as const;

export type Tone = (typeof tones)[number];

export function toneFor(slug: string): Tone {
  let sum = 0;
  for (const char of slug) sum += char.charCodeAt(0);
  return tones[sum % tones.length];
}
