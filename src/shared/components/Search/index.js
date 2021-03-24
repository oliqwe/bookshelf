import React, { useState, useEffect, useMemo } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import Search from '@material-ui/icons/Search'
import debounce from 'lodash/debounce'
import Box from '@material-ui/core/Box'

const SearchBar = ({ onChange, delay = 200, defaultValue, ...rest }) => {
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
    <Box mr={2}>
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
        style={{ backgroundColor: 'white' }}
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
    </Box>
  )
}

SearchBar.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  delay: PropTypes.number,
}

export default SearchBar
