import React from 'react'
import PropTypes, { object, number, string, array } from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
// import parse from 'html-react-parser'
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
            imageStyle={{ width: 'inherit', height: 'inherit' }}
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
            <Typography variant="caption">Author</Typography>
          </Grid>
          <Grid item xs={8}>
            {info?.authors && <Chip size="small" label={info.authors[0]} />}
          </Grid>
        </Grid>
      </Grid>
      {/*<Grid item xs={12} style={{ position: 'relative' }}>*/}
      {/*  <Typography variant="subtitle2" gutterBottom>*/}
      {/*    Description*/}
      {/*  </Typography>*/}
      {/*  /!*<div style={{ width: '600px' }}>{parse(bookInfo.description)}</div>*!/*/}
      {/*</Grid>*/}
    </Grid>
  )
}
// TODO: fix width

BookInfo.propTypes = {
  info: PropTypes.shape({
    language: string,
    pageCount: number,
    publisher: string,
    author: string,
    imageLinks: object,
    authors: array,
  }),
}

export default BookInfo
