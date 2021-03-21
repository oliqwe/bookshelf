import React, { useMemo } from 'react'
import { useFormikContext } from 'formik'
import FormikAutocomplete from '../../../../shared/components/FormikFields/FormikAutocomplete'
import { useBookShelf } from '../../../../shared/context/book-shelf-context'

function Shelves() {
  const { values } = useFormikContext()
  const { shelvesInfo } = useBookShelf()

  const shelves = useMemo(() => {
    if (values?.category?.id) {
      return shelvesInfo.find(
        ({ categoryId }) => categoryId === values.category.id,
      )?.shelves
    }
  }, [shelvesInfo, values?.category?.id])

  return (
    <FormikAutocomplete
      name="shelves"
      label="Select a shelf"
      options={shelves || []}
    />
  )
}

export default Shelves
