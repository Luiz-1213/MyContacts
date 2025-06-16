export default function generateLightenHex(hex, amount = 0.5) {
  // Remove o "#" se existir
  const cleanHex = hex.replace('#', '');

  // Extrai R, G e B
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);

  // Clareia cada canal em direção ao branco
  const lighten = (channel) =>
    Math.round(channel + (255 - channel) * amount)
      .toString(16)
      .padStart(2, '0');

  // Concatena os canais clareados
  const newHex = `#${lighten(r)}${lighten(g)}${lighten(b)}`;

  return newHex;
}
