/**
 * @module get_random_number
 *
 * @description Provides a utility for generating random numbers
 */

/**
 * Generates a random integer between 0 and the specified maximum value (exclusive)
 *
 * @param {number} max - The upper bound (exclusive) for the random number
 * @returns {number} A random integer between 0 (inclusive) and max (exclusive)
 *
 * @example
 * // Returns a random number between 0 and 999999
 * getRandomNumber()
 *
 * @example
 * // Returns a random number between 0 and 99
 * getRandomNumber(100)
 */
const getRandomNumber = (max = 1000000) => {
  try {
    // Validate input
    if (typeof max !== "number" || isNaN(max) || max <= 0) {
      throw new Error(`Maximum value must be a positive number, received: ${max}`);
    }

    // Generate and return a random integer
    return Math.floor(Math.random() * max);
  } catch (error) {
    console.error(`Error in getRandomNumber: ${error.message}`);
    return 0; // Return 0 as a fallback
  }
};

module.exports = { getRandomNumber };
