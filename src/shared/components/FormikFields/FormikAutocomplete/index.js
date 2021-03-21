import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'

import { useField } from 'formik'
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete'

const filter = createFilterOptions()

function FormikAutocomplete({
  options,
  name,
  label,
  freeSolo = false,
  disabled,
}) {
  const [field, meta, helpers] = useField(name)

  function setFiledValue(value) {
    helpers.setValue(value)
    helpers.setTouched(true)
  }

  function handleChange(event, newValue) {
    if (newValue && newValue.inputValue) {
      setFiledValue({ name: newValue.inputValue })
    }
    helpers.setValue(newValue)
  }

  function handleFilterChange(options, params) {
    const filtered = filter(options, params)

    // Suggest the creation of a new value
    if (params.inputValue !== '') {
      filtered.push({
        inputValue: params.inputValue,
        name: `Create new ${name} "${params.inputValue}"`,
      })
    }

    return filtered
  }

  function getOptionLabel(option) {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option
    }
    // Option created dynamically
    if (option.inputValue) {
      return option.inputValue
    }
    // Regular option
    return option.name
  }

  useEffect(() => {
    if (field.value?.name && !meta.touched) {
      helpers.setTouched(true)
    }
  }, [field.value?.name, meta.touched, helpers])

  console.log(field.value)

  return (
    <Autocomplete
      value={field.value}
      name={name}
      onChange={handleChange}
      freeSolo={freeSolo}
      filterOptions={handleFilterChange}
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

export default FormikAutocomplete
