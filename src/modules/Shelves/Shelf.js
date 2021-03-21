import React from 'react'
import { Divider, Grid, IconButton, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ShelfBook from './ShelfBook'
import DeleteIcon from '@material-ui/icons/Delete'
import { Rating } from '@material-ui/lab'

function Shelf({ shelf }) {
  return (
    <Box m={2} pb={2}>
      <Paper variant="outlined">
        <Box m={2}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={11}>
              <Typography variant="h6">{shelf.name}</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid container spacing={2}>
              {shelf.books.map(book => (
                <Grid item xs={2} key={book.id + shelf.categoryId}>
                  <ShelfBook book={book} />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="subtitle1">Review</Typography>
              </Grid>
              <Grid item>
                <Rating value={0} disabled name="rating" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  "Every so often I’ll sift through and wonder, what bowl or
                  plate was this part of,” said Penner, who has worked in
                  finance for 14 years and was inspired to enroll in a creative
                  writing class after attending a lecture by Elizabeth Gilbert
                  during her “Big Magic” book tour. "I’ll think, who ate from
                  this pottery? How long ago, where did they live, who were they
                  married to, did they have children? There are these histories
                  buried in the sand, waiting for the tide to come up or go back
                  down and then for someone like you or me to find them.”
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}

export default Shelf
