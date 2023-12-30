export function formatPhoneNumber(phoneNumber: string) {
  // Убираем все символы, кроме цифр
  var cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Применяем регулярное выражение для форматирования
  var formattedNumber = cleanedNumber.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "+7 ($2) $3-$4-$5"
  );

  return formattedNumber;
}
