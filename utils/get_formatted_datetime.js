/**
 * ### Get Date & Time
 *
 * _return `{ time: 'XX:XX:XX', date: 'XX/XX/XXXX', datetime: 'XX/XX/XXXX XX:XX:XX' }`_\
 * _default_ `seconds` is `current date`
 * @param {number} seconds
 */
function getFormattedDateTime(seconds = null) {
  const d = seconds !== null ? new Date(seconds) : new Date();
  const [DD, MM, hh, mm, ss] = [d.getDate(), d.getMonth() + 1, d.getHours(), d.getMinutes(), d.getSeconds()].map((e) => Init.setLenByZero(e));
  const YYYY = Init.setLenByZero(d.getFullYear(), 4);

  return {
    time: `${hh}:${mm}:${ss}`,
    date: `${DD}/${MM}/${YYYY}`,
    datetime: `${DD}/${MM}/${YYYY} ${hh}:${mm}:${ss}`,
  };
}

module.exports = { getFormattedDateTime };
