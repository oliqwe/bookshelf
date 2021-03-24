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
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
  },
  cardAction: {
    height: '100%',
  },
  imageContainer: {
    marginBottom: theme.spacing(1),
  },
  image: {
    display: 'block',
    margin: '0 auto',
  },
}))

function BookCard({ bookInfo, onBookClick }) {
  const classes = useStyles()

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
    </Card>
  )
}

BookCard.propTypes = {
  bookInfo: PropTypes.object,
  onBookClick: PropTypes.func,
}

export default BookCard
