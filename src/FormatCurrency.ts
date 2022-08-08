const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { //this currency_formatter undefined will make automatically currency number based on where you live. ex: $ for USA, R$ for Brazil etc...
    currency: "USD",
    style: "currency",
  })
  
  export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
  }