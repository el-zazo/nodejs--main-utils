/**
 * @module get_formatted_datetime
 *
 * @description Provides a utility for formatting date and time
 */

const { setLenByZero } = require("./set_len");

/**
 * Returns formatted date and time strings
 *
 * @param {number|null} seconds - Timestamp in milliseconds or null for current time
 * @returns {Object} Object containing formatted time, date, and datetime strings
 * @returns {string} returns.time - Formatted time string (HH:MM:SS)
 * @returns {string} returns.date - Formatted date string (DD/MM/YYYY)
 * @returns {string} returns.datetime - Formatted datetime string (DD/MM/YYYY HH:MM:SS)
 *
 * @example
 * // Returns object with current formatted date and time
 * getFormattedDateTime()
 *
 * @example
 * // Returns object with formatted date and time for the specified timestamp
 * getFormattedDateTime(1672531200000) // Jan 1, 2023
 */
const getFormattedDateTime = (seconds = null) => {
  try {
    // Create date object from seconds or current time
    const d = seconds !== null ? new Date(seconds) : new Date();

    // Check if date is valid
    if (isNaN(d.getTime())) {
      throw new Error(`Invalid timestamp: ${seconds}`);
    }

    // Extract and format date components
    const day = setLenByZero(d.getDate());
    const month = setLenByZero(d.getMonth() + 1); // Months are 0-indexed
    const hours = setLenByZero(d.getHours());
    const minutes = setLenByZero(d.getMinutes());
    const secs = setLenByZero(d.getSeconds());
    const year = setLenByZero(d.getFullYear(), 4);

    // Return formatted strings
    return {
      time: `${hours}:${minutes}:${secs}`,
      date: `${day}/${month}/${year}`,
      datetime: `${day}/${month}/${year} ${hours}:${minutes}:${secs}`,
    };
  } catch (error) {
    console.error(`Error in getFormattedDateTime: ${error.message}`);
    return {
      time: "--:--:--",
      date: "--/--/----",
      datetime: "--/--/---- --:--:--",
    };
  }
};

module.exports = { getFormattedDateTime };
