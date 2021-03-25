import React from 'react'
import PropTypes from 'prop-types'
import { Form, Formik } from 'formik'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Shelves from './Shelves'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import AutoComplete from 'shared/components/FormikFields/AutoComplete'
import { CATEGORIES } from 'shared/constants/constants'
import { bookDetailsValidationSchema, getActiveCategory } from './form.utils'

function BookDetailsForm({ bookInfo, bookId, onSubmit }) {
  function handleSubmit({ shelf }) {
    const book = {
      id: bookId,
      title: bookInfo.title,
      thumbnail: bookInfo.imageLinks?.thumbnail,
    }
    onSubmit({ ...shelf, books: [...shelf.books, book] })
  }
  const activeCategory = getActiveCategory(bookInfo?.categories, CATEGORIES)

  return (
    <Grid item xs={12}>
      <Divider />
      <Box my={2}>
        <Formik
          initialValues={{ shelf: [], category: activeCategory || [] }}
          validationSchema={bookDetailsValidationSchema(bookId)}
          onSubmit={handleSubmit}
        >
          <Form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <AutoComplete
                  name="category"
                  label="Select a category"
                  options={CATEGORIES}
                  disabled={Boolean(activeCategory)}
                />
              </Grid>
              <Grid item xs={4}>
                <Shelves />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  type="submit"
                >
                  Add To Shelf
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Grid>
  )
}

BookDetailsForm.propTypes = {
  bookInfo: PropTypes.object,
  bookId: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default BookDetailsForm
