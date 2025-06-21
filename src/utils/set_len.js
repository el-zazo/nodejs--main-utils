/**
 * @module set_len
 *
 * @description Provides utilities for setting the length of strings by adding characters
 */

/**
 * Sets the length of a string by adding a specified character at a specified position
 *
 * @param {string|number} text - The text to modify
 * @param {Object} options - Configuration options
 * @param {string} [options.caracter="0"] - The character to add
 * @param {number} [options.length=2] - The target length
 * @param {string} [options.position="start"] - The position to add characters ("start" or "end")
 * @returns {string} The modified string with the specified length
 *
 * @example
 * // Returns "001"
 * setLenByCaracter(1, { length: 3 })
 *
 * @example
 * // Returns "1***"
 * setLenByCaracter(1, { caracter: "*", length: 4, position: "end" })
 */
const setLenByCaracter = (text, options = {}) => {
  try {
    // Merge default options with provided options
    const { caracter = "0", length = 2, position = "start" } = options;
    const normalizedPosition = position.toLowerCase();

    // Convert input to string
    const textString = String(text);

    // Calculate how many characters need to be added
    const diffLen = length - textString.length;

    // If no characters need to be added, return the original text as a string
    if (diffLen <= 0) {
      return textString;
    }

    // Add characters at the specified position
    switch (normalizedPosition) {
      case "start":
        return `${caracter.repeat(diffLen)}${textString}`;
      case "end":
        return `${textString}${caracter.repeat(diffLen)}`;
      default:
        return textString;
    }
  } catch (error) {
    console.error(`Error in setLenByCaracter: ${error.message}`);
    return String(text); // Return the original input as a fallback
  }
};

/**
 * Adds leading zeros to a number to achieve a specified length
 *
 * @param {number} num - The number to pad with zeros
 * @param {number} len - The target length
 * @returns {string} The number padded with leading zeros
 *
 * @example
 * // Returns "01"
 * setLenByZero(1)
 *
 * @example
 * // Returns "0005"
 * setLenByZero(5, 4)
 */
const setLenByZero = (num = 1, len = 2) => {
  return setLenByCaracter(num, { length: len });
};

/**
 * Adds trailing spaces to a string to achieve a specified length
 *
 * @param {string} text - The text to pad with spaces
 * @param {number} len - The target length
 * @returns {string} The text padded with trailing spaces
 *
 * @example
 * // Returns "Hello     " (with 5 spaces)
 * setLenBySpace("Hello", 10)
 */
const setLenBySpace = (text = "", len = 20) => {
  return setLenByCaracter(text, { caracter: " ", length: len, position: "end" });
};

module.exports = { setLenByCaracter, setLenByZero, setLenBySpace };
