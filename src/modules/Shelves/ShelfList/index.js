import React, { useMemo } from 'react'
import { array } from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Shelf from './Shelf'
import { CATEGORIES } from 'shared/constants/constants'
import { groupByKey } from 'shared/utils'

function ShelfList({ shelves }) {
  const shelvesGroupedByCategory = useMemo(
    () => groupByKey('categoryId', shelves),
    [shelves],
  )

  function getCategoryName(categoryId) {
    return CATEGORIES.find(category => category.id === categoryId)
  }

  return Object.keys(shelvesGroupedByCategory).map(categoryId => {
    const category = getCategoryName(parseInt(categoryId))
    return (
      <div key={categoryId}>
        <Typography variant="h5">{category?.name}</Typography>
        {shelvesGroupedByCategory[categoryId].map(shelf => (
          <Shelf key={shelf.id} shelf={shelf} />
        ))}
      </div>
    )
  })
}

ShelfList.propTypes = {
  shelves: array,
}

export default ShelfList
