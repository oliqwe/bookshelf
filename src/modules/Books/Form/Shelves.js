import React, { useMemo } from 'react'
import { useFormikContext } from 'formik'
import AutoComplete from 'shared/components/FormikFields/AutoComplete'
import { useBookShelf } from 'shared/context/book-shelf-context'
import { compareStrings } from 'shared/utils'

function Shelves() {
  const { values } = useFormikContext()
  const { shelves } = useBookShelf()

  console.log(shelves)

  const shelvesByCategory = useMemo(() => {
    return values?.category?.id
      ? shelves.filter(shelf =>
          compareStrings(shelf.categoryId, values?.category?.id),
        )
      : []
  }, [shelves, values?.category?.id])

  return (
    <AutoComplete
      name="shelf"
      label="Select a shelf"
      options={shelvesByCategory || []}
    />
  )
}

export default Shelves
