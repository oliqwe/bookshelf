import React from 'react'
import { Form, Formik } from 'formik'
import FormikAutocomplete from '../../../../shared/components/FormikFields/FormikAutocomplete'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useBookShelf } from '../../../../shared/context/book-shelf-context'
import Shelves from './Shelves'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'

/** Get active category from  Google response ["Computers / Programming Languages / JavaScript", "Computers / Web / Web Programming"]
 * @param  {[String]} googleCategories
 * @param {[Object]} categories - list of existing default categories
 */
function getActiveCategory(googleCategories, categories) {
  if (!googleCategories) return

  const bookCategories = googleCategories.reduce((acc, categories) => {
    return [...acc, ...categories.split('/')]
  }, [])

  return categories.find(category => {
    return bookCategories
      .map(v => v.toLowerCase().trim())
      .includes(category.name.toLowerCase())
  })
}

function BookDetailsForm({ bookInfo }) {
  const { categories } = useBookShelf()
  const activeCategory = getActiveCategory(bookInfo?.categories, categories)

  function handleSubmit() {}

  return (
    <Grid item xs={12}>
      <Divider />
      <Box my={2}>
        <Formik
          initialValues={{ shelves: null, category: activeCategory || null }}
          // validationSchema={values => shiftValidationSchema(shelves, values)}
          onSubmit={handleSubmit}
        >
          <Form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <FormikAutocomplete
                  name="category"
                  label="Select a category"
                  options={categories}
                  disabled={Boolean(activeCategory)}
                />
              </Grid>
              <Grid item xs={4}>
                <Shelves />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" disableElevation>
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

export default BookDetailsForm
