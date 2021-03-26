import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Image from 'material-ui-image'

function BookInfo({ info }) {
  return (
    <Grid container>
      <Grid container item>
        <Grid item xs={5}>
          <Image
            src={info?.imageLinks?.small}
            disableSpinner={true}
            color="rgba(255, 255, 255, 0)"
            imageStyle={{
              width: 'inherit',
              minHeight: 'inherit',
              maxWidth: '320px',
            }}
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
              {info?.language.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Number of pages</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">{info?.pageCount}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Published</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">{info?.publisher}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="caption">Print Type</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">{info?.printType}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="caption">Publish Date</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption">{info?.publishedDate}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="caption">Author</Typography>
          </Grid>
          <Grid item xs={8}>
            {info?.authors && <Chip size="small" label={info.authors[0]} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

BookInfo.propTypes = {
  info: PropTypes.shape({
    language: PropTypes.string,
    pageCount: PropTypes.number,
    publisher: PropTypes.string,
    author: PropTypes.string,
    imageLinks: PropTypes.object,
    authors: PropTypes.array,
  }),
}

export default BookInfo
