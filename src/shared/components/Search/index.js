import React, { useState, useEffect, useMemo } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import Search from '@material-ui/icons/Search'
import debounce from 'lodash/debounce'

const SearchBar = ({ onChange, delay, defaultValue, ...rest }) => {
  const [value, setValue] = useState(() => defaultValue)
  const { InputProps, ...restProps } = rest

  const debouncedOnChange = useMemo(
    () => onChange && debounce(onChange, delay),
    [onChange, delay],
  )

  const handleChange = event => {
    setValue(event.target.value)
  }

  useEffect(() => {
    onChange && debouncedOnChange(value)
  }, [onChange, debouncedOnChange, value])

  return (
    <TextField
      type="search"
      id="search-field"
      data-testid="search-field"
      placeholder="Search"
      onChange={handleChange}
      value={value || ''}
      tabIndex="0"
      variant="outlined"
      fullWidth
      InputProps={{
        ...rest.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      margin="dense"
      {...restProps}
    />
  )
}

SearchBar.defaultProps = {
  delay: 200,
}

SearchBar.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  delay: PropTypes.number,
}

export default SearchBar
