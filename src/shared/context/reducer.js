import { CATEGORIES, shelfInfoMock } from '../mock'
import { getLocalStorageValue, setLocalStorageValue } from '../utils'

export const Actions = {
  addNewShelf: 'ADD_NEW_SHELF',
  addNewCategory: 'ADD_NEW_CATEGORY',
}

export const initialState = {
  categories: [],
  shelvesInfo: [],
}

export function reducerInit(initialState) {
  const selvesInfo = getLocalStorageValue('shelvesInfo')
  const categories = getLocalStorageValue('categories')

  if (!selvesInfo) {
    setLocalStorageValue('shelvesInfo', shelfInfoMock)
  }

  if (!categories) {
    setLocalStorageValue('categories', CATEGORIES)
  }

  return {
    ...initialState,
    categories: categories || CATEGORIES,
    shelvesInfo: selvesInfo || shelfInfoMock,
  }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.addNewShelf:
      return {
        ...state,
        selvesInfo: payload.shelvesInfo,
        categories: payload.categories || state.categories,
      }
    case Actions.addNewCategory: {
      return {
        ...state,
        categories: [...state.categories, payload.category],
      }
    }
    default:
      return state
  }
}
