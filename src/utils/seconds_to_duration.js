/**
 * @module seconds_to_duration
 *
 * @description Converts seconds to a formatted duration string (HH:MM:SS)
 *
 * @example
 * // Returns "00:02:55"
 * secondsToDuration(175)
 */

const { setLenByZero } = require("./set_len");

/**
 * Converts seconds to a formatted duration string (HH:MM:SS)
 *
 * @param {number} seconds - The number of seconds to convert
 * @returns {string} A formatted duration string in HH:MM:SS format
 *
 * @example
 * // Returns "00:02:55"
 * secondsToDuration(175)
 *
 * @example
 * // Returns "01:00:00"
 * secondsToDuration(3600)
 */
const secondsToDuration = (seconds) => {
  try {
    // Validate input
    if (isNaN(seconds)) {
      throw new Error(`Input '${seconds}' is not a valid number`);
    }

    // Convert to number to ensure proper calculation
    const totalSeconds = Number(seconds);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = Math.ceil(totalSeconds % 60);

    // Format with leading zeros
    const HH = setLenByZero(hours);
    const MM = setLenByZero(minutes);
    const SS = setLenByZero(remainingSeconds);

    return `${HH}:${MM}:${SS}`;
  } catch (error) {
    console.error(`Error in secondsToDuration: ${error.message}`);
    return String(seconds); // Return the original input as a fallback
  }
};

module.exports = { secondsToDuration };
