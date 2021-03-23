import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import { number, string } from 'prop-types'

function BookDetailsHeader({ title, subtitle, averageRating }) {
  return (
    <Grid container spacing={2}>
      <Grid item container justify="space-between">
        <Grid item xs={10}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {subtitle}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">Google Rating</Typography>
          <Rating name="google-rating" value={averageRating || 0} readOnly />
        </Grid>
      </Grid>
    </Grid>
  )
}

BookDetailsHeader.propTypes = {
  title: string,
  subtitle: string,
  averageRating: number,
}

export default BookDetailsHeader
