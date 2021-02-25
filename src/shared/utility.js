function currencyFormatter(number) {
  return number.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  });
}

export { currencyFormatter };
