import React from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

function ShelfNameFiled() {
  const [field, meta] = useField('name')

  return (
    <TextField
      required
      type="text"
      name="name"
      label="Name"
      size="small"
      variant="outlined"
      fullWidth
      {...field}
      error={meta.error && meta.touched}
      helperText={meta.error && meta.touched ? meta.error : ' '}
    />
  )
}

export default ShelfNameFiled
