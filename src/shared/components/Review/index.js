import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Grid, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Rating } from '@material-ui/lab'

function Review({ id, rating, note, onChange }) {
  const [comment, setComment] = useState('')

  function handleCommentChange(e) {
    setComment(e.target.value)
  }

  function handleCommentUpdate() {
    onChange({ comment })
  }

  function handleRatingUpdate(e, rating) {
    onChange({ rating })
  }

  useEffect(() => {
    setComment(note)
  }, [note])

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
          value={rating || 0}
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
