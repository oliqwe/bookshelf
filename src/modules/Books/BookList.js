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
  const [searchString, setSearchString] = useState('javascript')
  const [selectedBook, setSelectedBook] = useState(null)
  const { updateShelf } = useBookShelf()
  const { status, data, get } = useAsync()

  function handleSearch(value) {
    setSearchString(value)
  }

  function onSubmit(data) {
    setSelectedBook(null)
    updateShelf(data)
  }

  const handleBookClick = bookInfo => () => {
    setSelectedBook(bookInfo)
  }

  function handleCloseDrawer() {
    setSelectedBook(null)
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
        <Grid item container xs={12} spacing={2} alignItems="stretch">
          {status === 'pending' && <Loading />}
          {data?.items?.length > 0 &&
            data.items.map(book => {
              return (
                <Grid
                  item
                  xs={3}
                  key={book.id}
                  style={{ display: 'flex' }}
                  data-testid={`book-container-${book.id}`}
                >
                  <BookCard
                    bookInfo={{ id: book.id, ...book.volumeInfo }}
                    onBookClick={handleBookClick}
                  />
                </Grid>
              )
            })}
        </Grid>
      </Grid>
      <SidePanel
        isOpen={Boolean(selectedBook)}
        onClose={handleCloseDrawer}
        width="45%"
      >
        <BookDetails bookId={selectedBook?.id}>
          <BookDetails.Actions>
            <BookDetailsForm onSubmit={onSubmit} />
          </BookDetails.Actions>
        </BookDetails>
      </SidePanel>
    </>
  )
}

export default BookList
