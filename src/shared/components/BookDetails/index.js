import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { useAsync } from 'shared/hooks/useAsync'
import { GOOGLE_BOOKS_API_URL } from 'shared/constants/constants'
import BookInfo from './BookInfo'
import Loading from 'shared/components/Loading'
import BookDetailsHeader from './BookDetailsHear'
import Box from '@material-ui/core/Box'
import { renderAllBut, renderComponent } from './utils'

const useStyles = makeStyles(theme => ({
  bookDetailsContainer: {
    margin: theme.spacing(2),
    position: 'relative',
  },
}))

function Actions({ children, ...props }) {
  return <Box my={1}>{React.cloneElement(children, { ...props })}</Box>
}

function Footer({ children }) {
  return children
}

function BookDetails({ bookId, children }) {
  const { data, get, status } = useAsync()
  const bookInfo = data?.volumeInfo
  const classes = useStyles()
  const arrayChildren = React.Children.toArray(children)
  //
  // console.log(children)

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
          {renderComponent('Actions', arrayChildren, { bookId, bookInfo })}
          <BookInfo info={bookInfo} />
          {renderAllBut(['Actions'], arrayChildren)}
        </>
      ) : null}
    </div>
  )
}

BookDetails.Actions = Actions
BookDetails.Footer = Footer

BookDetails.propTypes = {
  bookId: PropTypes.string,
  children: PropTypes.any,
}

export default BookDetails
