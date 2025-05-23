const DEFAULT_SET_LEN_OPTIONS = require("../options/set_len_options");

/**
 * ### Set Len By Caracter
 * Add `caracter` in a specifique `position` [start or end] of `text` for set a specifique `length`
 *
 * @param {string|number} text
 * @param {DEFAULT_SET_LEN_OPTIONS} options
 */
function setLenByCaracter(text, options) {
  let { caracter, length, position } = { ...DEFAULT_SET_LEN_OPTIONS, ...options };
  position = position.toLowerCase();

  const diff_len = length - String(text).length;
  return diff_len > 0 ? (position === "start" ? `${caracter.repeat(diff_len)}${text}` : position === "end" ? `${text}${caracter.repeat(diff_len)}` : String(text)) : String(text);
}

/**
 * ### Add Zero
 * Add Zero `0` in start of `num` for set a specifique `len`
 */
function setLenByZero(num = 1, len = 2) {
  return setLenByCaracter(num, { length: len });
}

/**
 * ### Add Space
 * Add Space ` ` to `text` in end for set a specifique `len: default 20`
 */
function setLenBySpace(text = "", len = 20) {
  return setLenByCaracter(text, { caracter: " ", length: len, position: "end" });
}

module.exports = { setLenByCaracter, setLenByZero, setLenBySpace };
