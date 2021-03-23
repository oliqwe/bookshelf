import React, { useState } from 'react'
import { getLocalStorageValue, setLocalStorageValue } from '../utils'
import { shelvesMock } from '../mock'
import { LOCAL_STORAGE_SHELVES_KEY } from '../constants/constants'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const BookShelfContext = React.createContext()
BookShelfContext.displayName = 'BookShelfContext'

function initState() {
  const shelvesInfo = getLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY)

  if (!shelvesInfo) {
    setLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY, shelvesMock)
  }

  return shelvesInfo || shelvesMock
}

function BookShelfProvider({ children }) {
  const [shelves, setShelves] = useState(initState)

  function removeShelf(shelfId) {
    const updatedShelves = shelves.filter(shelf => shelf.id !== shelfId)
    updateShelves(updatedShelves)
  }

  function addShelf(categoryId, name) {
    const updatedShelves = [
      ...shelves,
      { id: categoryId + name, categoryId, name, books: [] },
    ]
    updateShelves(updatedShelves)
  }

  function updateShelf(shelf) {
    const updatedShelves = shelves.map(shelfInfo =>
      shelfInfo.id === shelf.id ? shelf : shelfInfo,
    )
    updateShelves(updatedShelves)
  }

  function updateShelves(data) {
    setLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY, data)
    setShelves(data)
  }

  // const value = React.useMemo(() => ({ user, login, logout, register }), [
  //   login,
  //   logout,
  //   register,
  //   user
  // ]);

  return (
    <BookShelfContext.Provider
      value={{
        shelves,
        addShelf,
        removeShelf,
        updateShelf,
      }}
    >
      {children}
      <Snackbar open={open} onClose={close} autoHideDuration={3000}>
        <Alert severity="success">Operation succeeded</Alert>
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

// addShelf
// removeShelf
// updateShell
// updateCommentAndRating
//
//
// addBook
// removeBook
// updateBook
// updateCommentAndRating

// eslint-disable-next-line no-unused-vars
// function updateShelfReview({ categoryId, shelfName }) {}
//
// function updateBookReview({ categoryId, shelfName, bookInfo }) {}
//
// function addBookToTheShelf({ categoryId, shelfName, bookInfo }) {}
//
// function removeBookFromShelf({ categoryId, shelfName, bookId }) {}
