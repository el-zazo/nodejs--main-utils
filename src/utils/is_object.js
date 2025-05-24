/**
 * @module is_object
 *
 * @description Provides a utility for checking if a value is a plain object
 */

/**
 * Checks if a value is a plain JavaScript object (not an array, function, null, etc.)
 *
 * @param {*} value - The value to check
 * @returns {boolean} True if the value is a plain object, false otherwise
 *
 * @example
 * // Returns true
 * isObject({})
 *
 * @example
 * // Returns false
 * isObject([])
 *
 * @example
 * // Returns false
 * isObject(null)
 */
const isObject = (value) => {
  try {
    // Use Object.prototype.toString to get the exact type of the value
    return Object.prototype.toString.call(value) === "[object Object]";
  } catch (error) {
    console.error(`Error in isObject: ${error.message}`);
    return false; // Return false as a fallback
  }
};

module.exports = { isObject };
