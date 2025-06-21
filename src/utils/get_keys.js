/**
 * @module get_keys
 *
 * @description Provides a utility for extracting all keys from an object, including nested keys
 */

/**
 * Extracts all keys from an object, including nested keys using dot notation
 *
 * @param {Object} obj - The object to extract keys from
 * @returns {string[]} Array of keys, with nested keys in dot notation
 *
 * @example
 * // Returns ["a.b.b2", "a.c", "a2"]
 * getKeys({ a: { b: { b2: "v" }, c: "v" }, a2: "v" })
 */
const getKeys = (obj = {}) => {
  try {
    // Validate input
    if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      throw new Error(`Input must be an object, received ${Array.isArray(obj) ? "array" : typeof obj}`);
    }

    const keys = [];

    // Iterate through all keys in the object
    for (const key in obj) {
      // Check if the property belongs to the object itself, not its prototype chain
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // If the value is an object (but not an array), recursively get its keys
        if (typeof obj[key] === "object" && !Array.isArray(obj[key]) && obj[key] !== null) {
          const nestedKeys = getKeys(obj[key]);

          // If nested keys exist, add them with the current key as prefix
          if (nestedKeys.length > 0) {
            nestedKeys.forEach((nestedKey) => {
              keys.push(`${key}.${nestedKey}`);
            });
            continue;
          }
        }

        // Add the current key
        keys.push(key);
      }
    }

    return keys;
  } catch (error) {
    console.error(`Error in getKeys: ${error.message}`);
    return [];
  }
};

module.exports = { getKeys };
