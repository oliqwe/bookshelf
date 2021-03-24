import React, { useState } from 'react'
import ShelfList from './ShelfList'
import { Button, Grid } from '@material-ui/core'

import ShelfForm from './Form'
import SidePanel from 'shared/components/SidePanel'
import { useBookShelf } from 'shared/context/book-shelf-context'

function Shelves() {
  const [isOpen, setIsOpen] = useState(false)
  const { shelves, addShelf } = useBookShelf()

  function handleToggleSidePanel() {
    setIsOpen(state => !state)
  }

  function handleAddNewShelf({ category, name }) {
    addShelf(category.id, name)
    handleToggleSidePanel()
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid container item justify="flex-end">
          <Button
            onClick={handleToggleSidePanel}
            color="primary"
            variant="contained"
            disableElevation
          >
            Add New Shelf
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ShelfList shelves={shelves} />
        </Grid>
      </Grid>
      <SidePanel isOpen={isOpen} onClose={handleToggleSidePanel} width="40%">
        <ShelfForm onSave={handleAddNewShelf} shelves={shelves} />
      </SidePanel>
    </>
  )
}

export default Shelves
