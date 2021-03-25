import React, { useReducer } from 'react'
import { setLocalStorageValue } from '../utils'

import { LOCAL_STORAGE_SHELVES_KEY } from '../constants/constants'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { initialValues, initReducer, reducer } from './book-shelf-context.utils'

const BookShelfContext = React.createContext()
BookShelfContext.displayName = 'BookShelfContext'

function BookShelfProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValues, initReducer)

  function removeShelf(shelfId) {
    const updatedShelves = state.shelves.filter(shelf => shelf.id !== shelfId)
    updateShelves(updatedShelves)
  }

  function addShelf(categoryId, name) {
    const updatedShelves = [
      ...state.shelves,
      { id: categoryId + name, categoryId, name, books: [] },
    ]
    updateShelves(updatedShelves)
  }

  function updateShelf(shelf) {
    const updatedShelves = state.shelves.map(shelfInfo =>
      shelfInfo.id === shelf.id ? shelf : shelfInfo,
    )
    updateShelves(updatedShelves)
  }

  function updateShelves(data) {
    setLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY, data)
    dispatch({ type: 'updateShelves', payload: data })
  }

  function handleSnackBarClose() {
    dispatch({ type: 'closeNotification' })
  }

  return (
    <BookShelfContext.Provider
      value={{ shelves: state.shelves, addShelf, removeShelf, updateShelf }}
    >
      {children}
      <Snackbar
        open={state.isNotificationOpen}
        onClose={handleSnackBarClose}
        ClickAwayListenerProps={{
          mouseEvent: false,
        }}
        autoHideDuration={2000}
      >
        <Alert variant="filled" severity="success">
          Successful !!!
        </Alert>
      </Snackbar>
    </BookShelfContext.Provider>
  )
}

function useBookShelf() {
  const context = React.useContext(BookShelfContext)
  if (context === undefined) {
    throw new Error(`useBookShelf must be used within a BookShelfProvider`)
  }
  return context
}

export { BookShelfProvider, useBookShelf }
