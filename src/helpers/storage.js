/**
 * Helpers: Storage
 * ------------------------------------------------------------------------------
 * Contains functions to interact with local storage.
 *
 */

/**
 * Set local storage
 * @param {String} item - storage key
 * @param {Any} item - value to store
 */
export function persist(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

/**
 * Get local storage items
 * @param {String} key - storage key
 */
export function getStorageItem(key) {
  const storage = localStorage.getItem(key);

  if (!storage) return;

  return JSON.parse(storage);
}
