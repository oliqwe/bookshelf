export function setLocalStorageValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorageValue(key) {
  const valueInLocalStorage = window.localStorage.getItem(key)
  return valueInLocalStorage && JSON.parse(valueInLocalStorage)
}
