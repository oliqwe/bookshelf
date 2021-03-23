import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    border: 'none',
    minHeight: '280px',
  },
  imageContainer: {
    marginBottom: theme.spacing(1),
  },
  image: {
    display: 'block',
    margin: '0 auto',
  },
}))

function BookCard({ bookInfo, bookId, onBookClick }) {
  const classes = useStyles()

  return (
    <Card variant="outlined">
      <CardActionArea className={classes.root} onClick={onBookClick(bookId)}>
        <Image
          src={bookInfo.imageLinks?.thumbnail}
          disableSpinner
          color="rgba(255, 255, 255, 0)"
          imageStyle={{ width: 'inherit', height: 'inherit' }}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" align="center">
            {bookInfo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

BookCard.propTypes = {
  bookId: PropTypes.string,
  bookInfo: PropTypes.object,
  onBookClick: PropTypes.func,
}

export default BookCard
