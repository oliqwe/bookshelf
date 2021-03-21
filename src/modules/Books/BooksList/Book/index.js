import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'

const useStyles = makeStyles({
  root: {
    border: 'none',
    marginBottom: '20px',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  },
  image: {
    width: '128px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  media: {
    height: '300px',
    paddingTop: '56.25%', // 16:9,
  },
})

function BookCard({ bookInfo, bookId, onBookClick }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={onBookClick(bookId)}>
        <div className={classes.imageContainer}>
          <Image
            src={bookInfo.imageLinks?.thumbnail}
            disableSpinner={true}
            cover={true}
            imageStyle={{
              // height: 'auto',
              // width: '128px',
              left: '50%',
              marginLeft: '-82px',
              height: '90%',
              width: 'auto',
            }}
          />
          {/*<img*/}
          {/*  className={classes.image}*/}
          {/*  src={bookInfo.imageLinks?.thumbnail}*/}
          {/*  alt=""*/}
          {/*/>*/}
        </div>
        <CardContent>
          <Typography gutterBottom variant="subtitle2">
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
