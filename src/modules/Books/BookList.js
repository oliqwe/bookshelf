import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import BookDetails from 'shared/components/BookDetails'
import { useAsync } from 'shared/hooks/useAsync'
import { GOOGLE_BOOKS_API_URL } from 'shared/constants/constants'
import SearchBar from 'shared/components/Search'
import Loading from 'shared/components/Loading'
import BookCard from 'shared/components/BookCard'
import SidePanel from 'shared/components/SidePanel'
import BookDetailsForm from './Form'
import { useBookShelf } from 'shared/context/book-shelf-context'

function BookList() {
  const { updateShelf } = useBookShelf()
  const { status, data, get } = useAsync()
  const [searchString, setSearchString] = useState('javascript')
  const [selectedBookId, setSelectedBookId] = useState('')

  function handleSearch(value) {
    setSearchString(value)
  }

  function onSubmit(data) {
    setSelectedBookId('')
    console.log(data)
    updateShelf(data)
  }

  const handleBookClick = bookInfo => () => {
    setSelectedBookId(bookInfo)
  }

  function handleCloseDrawer() {
    setSelectedBookId('')
  }

  useEffect(() => {
    get(GOOGLE_BOOKS_API_URL + 'volumes?', {
      q: searchString,
      maxResults: 40,
      projection: 'lite',
      printType: 'books',
    })
  }, [get, searchString])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar onChange={handleSearch} defaultValue={searchString} />
        </Grid>
        <Grid item container xs={12} spacing={2}>
          {status === 'pending' && <Loading />}
          {data?.items?.length > 0 &&
            data.items.map(book => {
              return (
                <Grid item xs={3} key={book.id}>
                  <BookCard
                    bookId={book.id}
                    bookInfo={book.volumeInfo}
                    onBookClick={handleBookClick}
                  />
                </Grid>
              )
            })}
        </Grid>
      </Grid>
      <SidePanel
        isOpen={Boolean(selectedBookId)}
        onClose={handleCloseDrawer}
        width="45%"
      >
        <BookDetails bookId={selectedBookId}>
          <BookDetails.Actions>
            <BookDetailsForm onSubmit={onSubmit} />
          </BookDetails.Actions>
        </BookDetails>
      </SidePanel>
    </>
  )
}

export default BookList
