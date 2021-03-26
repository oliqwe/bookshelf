import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import BookCard from '../BookCard'

function BookList({ books, onBookClick, onBookRemoveClick }) {
  return (
    <Grid item container xs={12} spacing={2} alignItems="stretch">
      {books &&
        books.length > 0 &&
        books.map(book => {
          const bookProps = book.hasOwnProperty('volumeInfo')
            ? book.volumeInfo
            : book

          return (
            <Grid
              item
              xs={3}
              key={book.id}
              style={{ display: 'flex' }}
              data-testid={`book-container-${book.id}`}
            >
              <BookCard
                bookInfo={{ id: book.id, ...bookProps }}
                onBookClick={onBookClick}
                onBookRemoveClick={onBookRemoveClick}
              />
            </Grid>
          )
        })}
    </Grid>
  )
}

BookList.propTypes = {
  onBookRemoveClick: PropTypes.func,
  books: PropTypes.array,
  onBookClick: PropTypes.func,
}

export default BookList
