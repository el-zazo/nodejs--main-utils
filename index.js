const datetime_to_duration = require("./utils/datetime_to_duration");
const get_formatted_datetime = require("./utils/get_formatted_datetime");
const get_keys = require("./utils/get_keys");
const get_random_number = require("./utils/get_random_number");
const is_object = require("./utils/is_object");
const seconds_to_duration = require("./utils/seconds_to_duration");
const separate_numbers = require("./utils/separate_numbers");
const set_len = require("./utils/set_len");

module.exports = {
  ...datetime_to_duration,
  ...get_formatted_datetime,
  ...get_keys,
  ...get_random_number,
  ...is_object,
  ...seconds_to_duration,
  ...separate_numbers,
  ...set_len,
};
