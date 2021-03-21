import React, { useState } from 'react'
import ShelvesList from './ShelvesList'
import { Button, Grid } from '@material-ui/core'

import ShelfForm from './Form'
import { useBookShelf } from '../../shared/context/book-shelf-context'
import SidePanel from '../../shared/components/SidePanel'

function ShelvesDetails() {
  const [isOpen, setIsOpen] = useState(false)
  const { shelvesInfo } = useBookShelf()

  function handleToggleSidePanel() {
    setIsOpen(state => !state)
  }

  function handleAddNewShelf({ category, name }) {
    // const categoryName = category.inputValue
    //   ? category.name.trim().toUpperCase()
    //   : category.name
    //
    // const categoryId = category.inputValue ? categories.length + 1 : category.id
    // // check if new category was created and new shelf with new category
    // if (category.inputValue) {
    //   setShelves(shelves => [
    //     ...shelves,
    //     { categoryId: CATEGORIES.length + 1, shelves: newShelf }
    //   ]);
    //   return;
    // }
    //
    // const updatedShelves = shelves.reduce((acc, shelf) => {
    //
    // }, []);
    //
    // const updatedShelves = shelves.map(shelf =>
    //   shelf.categoryId === category.id
    //     ? { ...shelf, shelves: [...shelf.shelves, shelf] }
    //     : shelf
    // );
    //
    // setShelves(updatedShelves);
    // setShelves(selves => [...shelves ])
    // {
    //   categoryId: 9,
    //       shelves: [
    //   { name: "JS goodies", books: computerMock },
    //   { name: "More JS goodies ", books: computerMock }
    // ]
    // }
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
        <Grid item>
          <ShelvesList shelves={shelvesInfo} />;
        </Grid>
      </Grid>
      <SidePanel isOpen={isOpen} onClose={handleToggleSidePanel} width="40%">
        <ShelfForm onSave={handleAddNewShelf} shelves={shelvesInfo} />
      </SidePanel>
    </>
  )
}

export default ShelvesDetails
