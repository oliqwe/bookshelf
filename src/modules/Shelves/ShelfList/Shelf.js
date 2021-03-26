import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Divider, Grid, IconButton, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DeleteIcon from '@material-ui/icons/Delete'
import { useBookShelf } from 'shared/context/book-shelf-context'
import SidePanel from 'shared/components/SidePanel'
import BookDetails from 'shared/components/BookDetails'
import Review from 'shared/components/Review'
import BookList from 'shared/components/BookList'
import { useConfirm } from 'material-ui-confirm'

function Shelf({ shelf }) {
  const [selectedBook, setSelectedBook] = useState(null)
  const { removeShelf, updateShelf } = useBookShelf()
  const confirm = useConfirm()

  const handleBookClick = bookInfo => () => {
    setSelectedBook(bookInfo)
  }

  function handleCloseDrawer() {
    setSelectedBook(null)
  }

  function handleBookReviewUpdate(review) {
    const books = shelf.books.map(book =>
      book.id === selectedBook.id ? { ...book, ...review } : book,
    )
    updateShelf({ ...shelf, books })
  }

  function handleReviewUpdate(reviewInfo) {
    console.log(reviewInfo)
    updateShelf({ ...shelf, ...reviewInfo })
  }

  function handleShelfRemove() {
    confirm({
      description: `Are you sure you want to delete ${shelf.name}`,
    }).then(() => removeShelf(shelf.id))
  }

  const handleBookRemoveClick = bookId => () => {
    confirm({
      description: `Are you sure you want to delete a book from the library`,
    }).then(() => {
      const books = shelf.books.filter(book => book.id !== bookId)
      updateShelf({ ...shelf, books })
    })
  }

  return (
    <Box my={2} data-testid={`shelf-${shelf.id}`}>
      <Paper variant="outlined">
        <Box m={2}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={11}>
              <Typography variant="caption">Shelf Name</Typography>
              <Typography variant="h6">{shelf.name}</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="delete-shelf" onClick={handleShelfRemove}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <BookList
              books={shelf.books}
              onBookClick={handleBookClick}
              onBookRemoveClick={handleBookRemoveClick}
            />
            {shelf.books.length > 0 && (
              <>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Review
                  id={shelf.id}
                  note={shelf.note}
                  rating={shelf.rating}
                  onChange={handleReviewUpdate}
                />
              </>
            )}
          </Grid>
        </Box>
      </Paper>
      <SidePanel
        isOpen={Boolean(selectedBook)}
        onClose={handleCloseDrawer}
        width="45%"
      >
        {selectedBook?.id && (
          <BookDetails bookId={selectedBook?.id}>
            <Review
              id={selectedBook.id}
              note={selectedBook.note}
              rating={selectedBook.rating}
              onChange={handleBookReviewUpdate}
            />
          </BookDetails>
        )}
      </SidePanel>
    </Box>
  )
}

Shelf.propTypes = {
  shelf: PropTypes.object,
}

export default Shelf
