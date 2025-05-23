/**
 * ### Check if a Value is `Object` like `{}`
 */
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

module.exports = { isObject };
