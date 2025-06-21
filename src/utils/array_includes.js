/**
 * @module array_includes
 *
 * @description Provides a utility for checking if an element exists in an array with loose type checking
 */

/**
 * Checks if an element exists in an array using loose equality (==)
 * which allows for type coercion (e.g., "1" == 1 is true)
 *
 * @param {Array} list - The array to search in
 * @param {*} element - The element to search for (can be null)
 * @returns {boolean} True if the element exists in the array, false otherwise
 *
 * @example
 * // Returns true
 * arrayIncludes([1, 2, 3], "3")
 *
 * @example
 * // Returns true
 * arrayIncludes([true, false], "true")
 *
 * @example
 * // Returns false
 * arrayIncludes([1, 2, 3], 4)
 *
 * @example
 * // Returns false
 * arrayIncludes(null, 1)
 *
 * @example
 * // Returns true
 * arrayIncludes([1, null, 3], null)
 *
 * @example
 * // Returns true if the array contains null
 * arrayIncludes([1, null, 3], null)
 */
const arrayIncludes = (list, element) => {
  try {
    // Check if list is an array
    if (!Array.isArray(list)) {
      return false;
    }

    // Check if element is undefined
    if (element === undefined) {
      return false;
    }

    // Check if element exists in the array using loose equality
    for (const item of list) {
      if (item == element) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(`Error in arrayIncludes: ${error.message}`);
    return false;
  }
};

module.exports = {
  arrayIncludes,
};
