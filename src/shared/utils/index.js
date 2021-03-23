export function setLocalStorageValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorageValue(key) {
  const valueInLocalStorage = window.localStorage.getItem(key)
  return valueInLocalStorage && JSON.parse(valueInLocalStorage)
}

export function compareShelves({ categoryId, name, shelf }) {
  return (
    compareStrings(shelf.name, name) &&
    compareStrings(shelf.categoryId, categoryId)
  )
}

// TODO:  add jsDoc
export function groupByKey(key, array) {
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
}

export const compareStrings = (str1 = '', str2 = '') =>
  (str1 && str1.toString().toLowerCase()) ===
  (str2 && str2.toString().toLowerCase())

export function compareNumbers(n1, n2) {
  return parseInt(n1) === parseInt(n2)
}
