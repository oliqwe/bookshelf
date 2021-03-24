import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Grid, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Rating } from '@material-ui/lab'

function Review({ id, rating, note, onChange }) {
  const [ratingInfo, setRatingInfo] = useState(0)
  const [comment, setComment] = useState('')

  function handleCommentChange(e) {
    setComment(e.target.value)
  }

  function handleCommentUpdate() {
    onChange({ note: comment })
  }

  function handleRatingUpdate(e, rating) {
    setRatingInfo(rating)
    onChange({ rating })
  }

  useEffect(() => {
    setComment(note)
  }, [note])

  useEffect(() => {
    setRatingInfo(rating)
  }, [rating])

  return (
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
        <Rating
          value={ratingInfo}
          name={`rating-${id}`}
          onChange={handleRatingUpdate}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Notes"
          multiline
          value={comment}
          rows={7}
          onChange={handleCommentChange}
          onBlur={handleCommentUpdate}
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

Review.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  note: PropTypes.string,
  onChange: PropTypes.func,
}

export default Review
