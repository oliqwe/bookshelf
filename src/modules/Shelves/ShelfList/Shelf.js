import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Divider, Grid, IconButton, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DeleteIcon from '@material-ui/icons/Delete'
import BookCard from 'shared/components/BookCard'
import { useBookShelf } from 'shared/context/book-shelf-context'
import ConfirmationDialog from 'shared/components/ConfirmationDialog'
import SidePanel from 'shared/components/SidePanel'
import BookDetails from 'shared/components/BookDetails'
import Review from 'shared/components/Review'

function Shelf({ shelf }) {
  const [selectedBookId, setSelectedBookId] = useState('')
  const [confirmationDialog, setConfirmationDialog] = useState(false)
  const { removeShelf, updateShelf } = useBookShelf()

  function handleShelfRemove() {
    setConfirmationDialog(true)
  }

  function onShelfRemoveConfirm() {
    toggleConfirmationDialog()
    removeShelf(shelf.id)
  }

  function toggleConfirmationDialog() {
    setConfirmationDialog(state => !state)
  }

  const handleBookClick = bookInfo => () => {
    setSelectedBookId(bookInfo)
  }

  function handleCloseDrawer() {
    setSelectedBookId('')
  }

  function handleReviewUpdate(reviewInfo) {
    updateShelf({ ...shelf, ...reviewInfo })
  }

  return (
    <Box m={2} pb={2}>
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
            <Grid item>
              <IconButton aria-label="delete-shelf" onClick={handleShelfRemove}>
                <DeleteIcon />
              </IconButton>
            </Grid>

            <Grid container spacing={2}>
              {shelf.books.map(book => (
                <Grid item xs={3} key={book.id + shelf.id}>
                  <BookCard
                    bookInfo={book}
                    bookId={book.id}
                    onBookClick={handleBookClick}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Review
              id={shelf.id}
              note={shelf.comment}
              rating={shelf.rating}
              onChange={handleReviewUpdate}
            />
          </Grid>
        </Box>
      </Paper>
      <ConfirmationDialog
        title="Delete a shelf?"
        open={confirmationDialog}
        setOpen={toggleConfirmationDialog}
        onConfirm={onShelfRemoveConfirm}
      >
        Are you sure you want to delete a shelf?
      </ConfirmationDialog>
      <SidePanel
        isOpen={Boolean(selectedBookId)}
        onClose={handleCloseDrawer}
        width="45%"
      >
        <BookDetails bookId={selectedBookId} />
      </SidePanel>
    </Box>
  )
}

Shelf.propTypes = {
  shelf: PropTypes.object,
}

export default Shelf
