/**
 * Utility for creating timed delays in async functions
 * @module wait
 */

/**
 * Waits for a specified amount of time
 * @param {number} timeout - Time to wait in milliseconds
 * @param {Object} [options] - Additional options
 * @param {boolean} [options.rejectOnError=false] - Whether to reject the promise on error
 * @returns {Promise<boolean>} - Resolves to true after the timeout
 * @throws {Error} If options.rejectOnError is true and an error occurs
 *
 * @example
 * // Wait for 2 seconds
 * await wait(2000);
 *
 * // Wait with error handling
 * try {
 *   await wait(1000, { rejectOnError: true });
 * } catch (error) {
 *   console.error('Wait failed:', error);
 * }
 */
const wait = async (timeout = 10000, options = {}) => {
  // Validate timeout parameter
  if (typeof timeout !== "number" || isNaN(timeout) || timeout < 0) {
    const error = new Error("Timeout must be a non-negative number");
    if (options.rejectOnError) {
      throw error;
    }
    console.error(`Wait error: ${error.message}`);
    return false;
  }

  try {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  } catch (error) {
    if (options.rejectOnError) {
      throw error;
    }
    console.error(`Wait error: ${error.message}`);
    return false;
  }
};

module.exports = { wait };
