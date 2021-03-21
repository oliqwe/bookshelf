import React, { useReducer } from 'react'
import { initialState, reducer, reducerInit } from './reducer'

const BookShelfContext = React.createContext()
BookShelfContext.displayName = 'BookShelfContext'

function BookShelfProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState, reducerInit)

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

  function addNewShelf({ name, category }) {
    if (!category.id) {
      const newCategory = !category.id && {
        id: state.categories.length + 1,
        name: category.name,
      }
    }

    const hasCategory = state.shelvesInfo.some(
      shelveInfo => shelveInfo.categoryId === category.id,
    )

    //
    // if (!hasShelvesInfoCategory) {
    //   state.shelvesInfo.map(shelfInfo => {
    //
    //   })
    // }

    // // if there is no id than it's a new category
    // const newCategory = !category.id && {
    //   id: state.categories.length + 1,
    //   name: category.name,
    // }

    // if (existingShelves) {
    //   const details = state.shelvesDetails.map(shelfDetails => {
    //     return shelfDetails.categoryId === category.id ? {} : shelfDetails
    //   })
    // }
    //
    // console.log(shelfDetails)

    // let shelvesDetails
    //
    // if (newCategory) {
    //   shelvesDetails = [
    //     ...state.shelveDetails,
    //     {
    //       category_id: category.id,
    //       shelves: [newShelf],
    //     },
    //   ]
    // }
    //
    // dispatch(Actions.addNewShelf, {
    //   shelvesDetails,
    // })
  }

  // const categories = !category.id && [
  //   ...state.categories,
  //   { id: state.categories.length + 1, name: category.name },
  // ]

  // const value = React.useMemo(() => ({ user, login, logout, register }), [
  //   login,
  //   logout,
  //   register,
  //   user
  // ]);

  return (
    <BookShelfContext.Provider value={{ ...state, addNewShelf }} {...props} />
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
