import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core'
import useBookCardStyles from './BookCard.styles'

function BookCard({ bookInfo, onBookClick, onBookRemoveClick }) {
  const classes = useBookCardStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea
        onClick={onBookClick(bookInfo)}
        className={classes.cardAction}
      >
        <Image
          src={bookInfo.thumbnail || bookInfo.imageLinks?.thumbnail}
          color="rgba(255, 255, 255, 0)"
          imageStyle={{
            width: '128px',
            left: '50%',
            top: '10px',
            marginLeft: '-64px',
            borderRadius: '4px',
            height: 'inherit',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" align="center">
            {bookInfo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {onBookRemoveClick && (
        <div
          className={`${classes.removeIcon} hidden-button`}
          onClick={onBookRemoveClick(bookInfo.id)}
        >
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      )}
    </Card>
  )
}

BookCard.propTypes = {
  bookInfo: PropTypes.object,
  onBookClick: PropTypes.func,
}

export default BookCard
