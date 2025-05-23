/**
 * ### Get All Keys in An Object
 *
 * #### Example
 *
 * object:
 *
 * ```js
 * { a: { b: { b2: "v" }, c: "v" }, a2: "v" }
 * ```
 *
 * keys:
 *
 * ```js
 * [ "a.b.b2", "a.c", "a2" ]
 * ```
 */
function getKeys(o = {}) {
  const keys = [];

  for (let key in o) {
    if (typeof o[key] === "object" && !Array.isArray(o[key])) {
      const get_keys_res = getKeys(o[key]);
      if (get_keys_res.length > 0) {
        get_keys_res.forEach((e) => keys.push(`${key}.${e}`));
        continue;
      }
    }

    keys.push(key);
  }

  return keys;
}

module.exports = { getKeys };
