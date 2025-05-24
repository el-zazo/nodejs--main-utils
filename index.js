/**
 * @module main-utils
 *
 * @description A collection of JavaScript utility functions
 */

// Utilities
const datetime_to_duration = require("./src/utils/datetime_to_duration");
const get_formatted_datetime = require("./src/utils/get_formatted_datetime");
const get_keys = require("./src/utils/get_keys");
const get_random_number = require("./src/utils/get_random_number");
const is_object = require("./src/utils/is_object");
const seconds_to_duration = require("./src/utils/seconds_to_duration");
const separate_numbers = require("./src/utils/separate_numbers");
const set_len = require("./src/utils/set_len");

/**
 * Export all utility functions
 * @type {Object}
 */
module.exports = {
  // Date and time utilities
  ...datetime_to_duration,
  ...get_formatted_datetime,
  ...seconds_to_duration,

  // String and number formatting
  ...separate_numbers,
  ...set_len,

  // Object utilities
  ...get_keys,
  ...is_object,

  // Random utilities
  ...get_random_number,
};
