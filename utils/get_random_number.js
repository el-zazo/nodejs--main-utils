/**
 * ### Get Random Number
 * Get Random Number between [0 and `num: default 1 000 000`]
 */
function getRandomNumber(num = 1000000) {
  return Math.floor(Math.random() * num);
}

module.exports = { getRandomNumber };
