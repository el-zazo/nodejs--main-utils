/**
 * LocalStorage utility class for browser environments
 * Provides methods to interact with the browser's localStorage API
 * @module local-storage
 */

/**
 * Class with static methods for localStorage operations
 */
class LocalStorage {
  /**
   * Sets a value in localStorage with the given key
   * @param {string} key - The key to store the value under
   * @param {any} value - The value to store (will be converted to string)
   * @throws {Error} If localStorage is not available or operation fails
   */
  static set(key, value) {
    try {
      if (!key || typeof key !== "string") {
        throw new Error("Key must be a non-empty string");
      }
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`LocalStorage.set error: ${error.message}`);
      throw error;
    }
  }

  /**
   * Gets a value from localStorage by key
   * @param {string} key - The key to retrieve the value for
   * @returns {any} The stored value (parsed from JSON) or null if not found
   * @throws {Error} If localStorage is not available or operation fails
   */
  static get(key) {
    try {
      if (!key || typeof key !== "string") {
        throw new Error("Key must be a non-empty string");
      }
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`LocalStorage.get error: ${error.message}`);
      return null;
    }
  }

  /**
   * Removes a value from localStorage by key
   * @param {string} key - The key to remove
   * @throws {Error} If localStorage is not available or operation fails
   */
  static del(key) {
    try {
      if (!key || typeof key !== "string") {
        throw new Error("Key must be a non-empty string");
      }
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`LocalStorage.del error: ${error.message}`);
      throw error;
    }
  }

  /**
   * Clears all values from localStorage
   * @throws {Error} If localStorage is not available or operation fails
   */
  static clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`LocalStorage.clear error: ${error.message}`);
      throw error;
    }
  }

  /**
   * Checks if a key exists in localStorage
   * @param {string} key - The key to check
   * @returns {boolean} True if the key exists, false otherwise
   */
  static has(key) {
    try {
      if (!key || typeof key !== "string") {
        throw new Error("Key must be a non-empty string");
      }
      return localStorage.getItem(key) !== null;
    } catch (error) {
      console.error(`LocalStorage.has error: ${error.message}`);
      return false;
    }
  }
}

module.exports = { LocalStorage };
