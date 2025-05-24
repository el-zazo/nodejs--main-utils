/**
 * @module set_len_options
 *
 * @description Default options for the setLenByCaracter function
 */

/**
 * Default options for the setLenByCaracter function
 *
 * @typedef {Object} SetLenOptions
 * @property {string} caracter - The character to add (default: "0")
 * @property {number} length - The target length (default: 2)
 * @property {string} position - The position to add characters ("start" or "end") (default: "start")
 */
const DEFAULT_SET_LEN_OPTIONS = {
  /**
   * The character to add when padding
   * @type {string}
   * @default "0"
   */
  caracter: "0",

  /**
   * The target length for the resulting string
   * @type {number}
   * @default 2
   */
  length: 2,

  /**
   * The position where characters should be added
   * Valid values are "start" or "end"
   * @type {string}
   * @default "start"
   */
  position: "start",
};

module.exports = DEFAULT_SET_LEN_OPTIONS;
