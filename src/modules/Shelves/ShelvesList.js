import React from 'react'

import Typography from '@material-ui/core/Typography'
import Shelf from './Shelf'
import { useBookShelf } from '../../shared/context/book-shelf-context'

function ShelvesList({ shelves }) {
  const { categories } = useBookShelf()
  function getCategoryName(categoryId) {
    return categories.find(category => category.id === categoryId)?.name
  }

  return shelves.map(details => {
    const categoryName = getCategoryName(details.categoryId)
    return (
      <div key={details.categoryId}>
        <Typography variant="h5">{categoryName}</Typography>
        {details.shelves.map(shelf => (
          <Shelf key={shelf.name} shelf={shelf} />
        ))}
      </div>
    )
  })
}

export default ShelvesList
