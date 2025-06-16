export default function formatPhone(phoneNumber) {
  const digits = phoneNumber.replace(/\D/g, '');

  // Se tiver 3 ou menos dígitos, retorna como está
  if (digits.length <= 3) {
    return digits;
  }

  // Se tiver até 10 ou 11 dígitos, formata
  return digits
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3');
}
