import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { useAsync } from '../../../shared/hooks/useAsync'
import { GOOGLE_BOOKS_API_URL } from '../../../shared/constants/constants'
import BookInfo from './BookInfo'
import Loading from '../../../shared/components/Loading'
import BookDetailsForm from './Form'
import BookDetailsHeader from './BookDetailsHear'

const useStyles = makeStyles(theme => ({
  bookDetailsContainer: {
    margin: theme.spacing(2),
    position: 'relative',
  },
}))

function BookDetails({ bookId }) {
  const { data, get, status } = useAsync()
  const bookInfo = data?.volumeInfo
  const classes = useStyles()

  useEffect(() => {
    if (bookId) {
      get(`${GOOGLE_BOOKS_API_URL}volumes/${bookId}`)
    }
  }, [get, bookId])

  return (
    <div className={classes.bookDetailsContainer}>
      {status === 'pending' && <Loading />}
      {bookInfo ? (
        <>
          <BookDetailsHeader
            title={bookInfo.title}
            subtitle={bookInfo.subtitle}
            averageRating={bookInfo.averageRating}
          />
          <BookDetailsForm bookInfo={bookInfo} />
          <BookInfo bookInfo={bookInfo} />
        </>
      ) : null}
    </div>
  )
}

BookDetails.propTypes = {
  bookId: PropTypes.string,
}

export default BookDetails
