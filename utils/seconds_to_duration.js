const { setLenByZero } = require("./set_len");

/**
 * ### Convert Seconds To Duration
 *
 * #### Example
 *
 * ```
 * '175' => '00:02:55'
 * ```
 *
 * @param {number} seconds
 */
function secondsToDuration(seconds) {
  if (isNaN(seconds)) return seconds;

  // Prepare Duration
  const HH = setLenByZero(Math.floor(+seconds / 3600));
  const MM = setLenByZero(Math.floor((+seconds % 3600) / 60));
  const SS = setLenByZero(Math.ceil(+seconds % 60));

  return `${HH}:${MM}:${SS}`;
}

module.exports = { secondsToDuration };
