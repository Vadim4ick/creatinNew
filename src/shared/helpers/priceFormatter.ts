export function priceFormatter(number: number) {
  return new Intl.NumberFormat("ru-RU").format(number);
}
