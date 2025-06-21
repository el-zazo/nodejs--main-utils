/**
 * Formats a number as a currency string
 *
 * @param {number} price - The price to format
 * @param {Object} options - Formatting options
 * @param {string} [options.locale="en-US"] - The locale to use for formatting
 * @param {string} [options.currency="USD"] - The currency code (ISO 4217)
 * @param {number} [options.minFractionDigits=2] - Minimum fraction digits
 * @param {number} [options.maxFractionDigits=2] - Maximum fraction digits
 * @param {boolean} [options.useGrouping=true] - Whether to use grouping separators
 * @param {string} [options.currencyDisplay="symbol"] - How to display the currency ("symbol", "code", or "name")
 * @param {boolean} [options.signDisplay=false] - Whether to always display the sign for positive numbers
 * @returns {string} The formatted price string
 *
 * @example
 * // Basic usage
 * formatPrice(1234.56); // "$1,234.56"
 *
 * @example
 * // Custom options
 * formatPrice(1234.56, {
 *   locale: "de-DE",
 *   currency: "EUR",
 *   maxFractionDigits: 0
 * }); // "1.235 €"
 */
function formatPrice(price, options = {}) {
  const { locale = "en-US", currency = "USD", minFractionDigits = 2, maxFractionDigits = 2, useGrouping = true, currencyDisplay = "symbol", signDisplay = false } = options;

  // Handle invalid input
  if (typeof price !== "number" || isNaN(price)) {
    return "";
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
    useGrouping,
    currencyDisplay,
    signDisplay: signDisplay ? "always" : "auto",
  });

  return formatter.format(price);
}

/**
 * Formats a price with a specific currency symbol
 *
 * @param {number} price - The price to format
 * @param {string} currencySymbol - The currency symbol to use
 * @param {Object} options - Additional formatting options
 * @param {string} [options.locale="en-US"] - The locale to use for formatting
 * @param {number} [options.minFractionDigits=2] - Minimum fraction digits
 * @param {number} [options.maxFractionDigits=2] - Maximum fraction digits
 * @param {boolean} [options.useGrouping=true] - Whether to use grouping separators
 * @param {string} [options.symbolPosition="before"] - Position of the currency symbol ("before" or "after")
 * @returns {string} The formatted price with custom currency symbol
 *
 * @example
 * formatPriceWithSymbol(1234.56, '₿'); // "₿ 1,234.56"
 */
function formatPriceWithSymbol(price, currencySymbol, options = {}) {
  // Handle invalid input
  if (typeof price !== "number" || isNaN(price)) {
    return "";
  }

  const {
    locale = "en-US",
    minFractionDigits = 2,
    maxFractionDigits = 2,
    useGrouping = true,
    symbolPosition = "before", // 'before' or 'after'
  } = options;

  const formatter = new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
    useGrouping,
  });

  const formattedNumber = formatter.format(price);

  return symbolPosition === "before" ? `${currencySymbol} ${formattedNumber}` : `${formattedNumber} ${currencySymbol}`;
}

module.exports = { formatPrice, formatPriceWithSymbol };
