/**
 * ### Convert Datetime To Duration
 *
 * #### Example
 *
 * ```
 * '2022-12-26' => '2 years ago'
 * ```
 */
function datetimeToDuration(datetime) {
  const now = new Date().getTime();
  const date = new Date(datetime).getTime();
  const diff = now - date;

  if (isNaN(date)) {
    console.log(`Datetime '${datetime}' is not valid`);
    return null;
  } else if (diff < 0) {
    const complete = new Date(datetime).toLocaleString().replace(",", "");
    console.log(`datetime '${complete}' is in the future`);
    return null;
  } else if (date) {
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} years ago`;
    if (months > 0) return `${months} months ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    if (seconds > 0) return `${seconds} seconds ago`;

    return "just now";
  }
}

module.exports = { datetimeToDuration };
