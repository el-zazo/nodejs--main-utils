/**
 * @module separate_numbers
 *
 * @description Provides a utility for formatting numbers with space separators
 */

/**
 * Formats a number by adding space separators between groups of three digits
 *
 * @param {string|number} number - The number to format
 * @returns {string} The formatted number with space separators
 *
 * @example
 * // Returns "1 000 000 000"
 * separateNumbers(1000000000)
 *
 * @example
 * // Returns "123"
 * separateNumbers(123)
 */
const separateNumbers = (number) => {
  try {
    // Check if input is a valid number
    if (isNaN(number)) {
      throw new Error(`Input must be a valid number, received: ${number}`);
    }

    // Convert to string
    const numStr = String(number);

    // If the number has fewer than 4 digits, return it as is
    if (numStr.length < 4) {
      return numStr;
    }

    // Format the number with space separators
    // This regex matches groups of 3 digits from the end of the string
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } catch (error) {
    console.error(`Error in separateNumbers: ${error.message}`);
    return String(number); // Return the original input as a fallback
  }
};

module.exports = { separateNumbers };
