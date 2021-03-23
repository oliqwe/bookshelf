import React, { useEffect } from 'react'
import { string, bool, array } from 'prop-types'

import TextField from '@material-ui/core/TextField'

import { useField } from 'formik'
import MUIAutoComplete from '@material-ui/lab/Autocomplete'

function AutoComplete({ options, name, label, disabled }) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (event, value) => {
    helpers.setValue(value)
  }

  function getOptionLabel(option) {
    return option?.name || ''
  }

  useEffect(() => {
    if (field.value?.name && !meta.touched) {
      helpers.setTouched(true)
    }
  }, [field.value?.name, meta.touched, helpers])

  return (
    <MUIAutoComplete
      value={field.value}
      name={name}
      onChange={handleChange}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={options}
      getOptionLabel={getOptionLabel}
      renderOption={option => option.name}
      disabled={disabled}
      renderInput={params => (
        <TextField
          {...params}
          required
          fullWidth
          size="small"
          variant="outlined"
          label={label}
          error={meta.error && meta.touched}
          helperText={meta.error && meta.touched ? meta.error : ' '}
        />
      )}
    />
  )
}

AutoComplete.propTypes = {
  options: array,
  name: string,
  label: string,
  disabled: bool,
}

export default AutoComplete
