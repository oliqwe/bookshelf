import React from 'react'
import { Formik, Form } from 'formik'
import { Button, Divider, Grid, Typography } from '@material-ui/core'

import { shiftValidationSchema } from './shelf-form.utils'
import ShelfNameFiled from '../../../shared/components/FormikFields/ShelfName'
import FormikAutocomplete from '../../../shared/components/FormikFields/FormikAutocomplete'
import { useBookShelf } from '../../../shared/context/book-shelf-context'

function ShelfForm({ onSave, shelves }) {
  const { categories } = useBookShelf()
  return (
    <Formik
      initialValues={{ name: '', category: null }}
      validationSchema={values => shiftValidationSchema(shelves, values)}
      onSubmit={onSave}
    >
      <Form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Add New Shelf
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={4}>
            <ShelfNameFiled />
          </Grid>
          <Grid item xs={6}>
            <FormikAutocomplete
              name="category"
              label="Select or create a new category"
              options={categories}
            />
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="outlined" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}

export default ShelfForm
