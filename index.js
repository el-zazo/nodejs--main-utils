/**
 * @module main-utils
 *
 * @description A collection of JavaScript utility functions
 */

// Date and time utilities
const datetime_to_duration = require("./src/utils/datetime_to_duration");
const get_formatted_datetime = require("./src/utils/get_formatted_datetime");
const seconds_to_duration = require("./src/utils/seconds_to_duration");

// String and number formatting
const separate_numbers = require("./src/utils/separate_numbers");
const set_len = require("./src/utils/set_len");
const format_price = require("./src/utils/format_price");

// Object utilities
const get_keys = require("./src/utils/get_keys");
const is_object = require("./src/utils/is_object");

// Array utilities
const array_includes = require("./src/utils/array_includes");

// Random utilities
const get_random_number = require("./src/utils/get_random_number");

// Storage utilities
const local_storage = require("./src/utils/local_storage");

// Timing utilities
const wait = require("./src/utils/wait");

module.exports = {
  // Date and time utilities
  ...datetime_to_duration,
  ...get_formatted_datetime,
  ...seconds_to_duration,

  // String and number formatting
  ...separate_numbers,
  ...set_len,
  ...format_price,

  // Object utilities
  ...get_keys,
  ...is_object,

  // Array utilities
  ...array_includes,

  // Random utilities
  ...get_random_number,

  // Storage utilities
  ...local_storage,

  // Timing utilities
  ...wait,
};
