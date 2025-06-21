/**
 * @module datetime_to_duration
 * 
 * @description Converts a datetime string to a human-readable duration string (e.g., "2 years ago")
 * 
 * @example
 * // Returns "2 years ago"
 * datetimeToDuration('2022-12-26')
 */

/**
 * Converts a datetime string to a human-readable duration string
 * 
 * @param {string|Date} datetime - The datetime to convert
 * @returns {string|null} A human-readable duration string or null if invalid
 * 
 * @example
 * // Returns "2 years ago"
 * datetimeToDuration('2022-12-26')
 * 
 * @example
 * // Returns "5 minutes ago"
 * datetimeToDuration(new Date(Date.now() - 300000))
 */
const datetimeToDuration = (datetime) => {
  try {
    const now = new Date().getTime();
    const date = new Date(datetime).getTime();
    const diff = now - date;

    if (isNaN(date)) {
      throw new Error(`Datetime '${datetime}' is not valid`);
    } 
    
    if (diff < 0) {
      const complete = new Date(datetime).toLocaleString().replace(",", "");
      throw new Error(`Datetime '${complete}' is in the future`);
    }

    // Calculate time units
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    // Return the appropriate duration string
    if (years > 0) return `${years} years ago`;
    if (months > 0) return `${months} months ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    if (seconds > 0) return `${seconds} seconds ago`;

    return "just now";
  } catch (error) {
    console.error(`Error in datetimeToDuration: ${error.message}`);
    return null;
  }
};

module.exports = { datetimeToDuration };
