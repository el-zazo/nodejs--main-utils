/**
 * ### Separate Numbers
 *
 * #### Example
 *
 * ```
 * '1000000000' => '1 000 000 000'
 * ```
 * @param {string|number} number
 */
function separateNumbers(number) {
  if (isNaN(number)) return number; // check is integer

  const n = String(number);
  return n.length < 4 ? n : n.match(/[0-9]{3}/gi).join(" ");
}

module.exports = { separateNumbers };
