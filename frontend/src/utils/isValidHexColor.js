export default function isValidHexColor(hexColor) {
  const regex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
  return regex.test(hexColor);
}
