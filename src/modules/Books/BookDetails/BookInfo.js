import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import parse from 'html-react-parser'
import Image from 'material-ui-image'

function BookInfo({ bookInfo }) {
  return (
    <Grid container>
      <Grid container item>
        <Grid item xs={5}>
          <Image
            src={bookInfo?.imageLinks?.small}
            disableSpinner={true}
            imageStyle={{ width: 'inherit', maxWidth: '300px' }}
          />
        </Grid>
        <Grid
          container
          item
          xs={6}
          spacing={1}
          alignContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <Typography variant="caption">Language:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">
              {bookInfo?.language.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Number of pages</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">{bookInfo?.pageCount}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Published</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">{bookInfo?.publisher}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Author</Typography>
          </Grid>
          <Grid item xs={8}>
            {bookInfo?.authors && (
              <Chip size="small" label={bookInfo.authors[0]} />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ position: 'relative' }}>
        <Typography variant="subtitle2" gutterBottom>
          Description
        </Typography>
        <div style={{ width: '600px' }}>{parse(bookInfo.description)}</div>
      </Grid>
    </Grid>
  )
}
// TODO: fix width

export default BookInfo
