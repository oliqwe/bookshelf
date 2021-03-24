import { getLocalStorageValue, setLocalStorageValue } from '../utils'
import { LOCAL_STORAGE_SHELVES_KEY } from '../constants/constants'
import { shelvesMock } from '../mock'

export function initReducer(initialValues) {
  const shelvesInfo = getLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY)

  if (!shelvesInfo) {
    setLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY, shelvesMock)
  }

  return { ...initialValues, shelves: shelvesInfo || shelvesMock }
}

export function reducer(state, { type, payload }) {
  switch (type) {
    case 'updateShelves':
      return { isNotificationOpen: true, shelves: payload }
    case 'closeNotification': {
      return { ...state, isNotificationOpen: false }
    }
    default:
      return state
  }
}

export const initialValues = {
  shelves: [],
  isNotificationOpen: false,
}
