import React from 'react'
import { array, func } from 'prop-types'

import { Formik, Form } from 'formik'
import { Button, Divider, Grid, Typography } from '@material-ui/core'

import { shiftValidationSchema } from './shelf-form.utils'
import ShelfNameFiled from 'shared/components/FormikFields/ShelfName'

import AutoComplete from 'shared/components/FormikFields/AutoComplete'
import { CATEGORIES } from 'shared/constants/constants'

function ShelfForm({ onSave, shelves }) {
  return (
    <Formik
      initialValues={{ name: '', category: null }}
      validationSchema={shiftValidationSchema(shelves)}
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
            <AutoComplete
              name="category"
              label="Select or create a new category"
              options={CATEGORIES}
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

ShelfForm.propTypes = {
  onSave: func,
  shelves: array,
}

export default ShelfForm
