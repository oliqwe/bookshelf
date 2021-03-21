import { object, string } from 'yup'

export const shiftValidationSchema = shelves => {
  return object().shape({
    name: string()
      .test(
        'uniqueNameAndCategory',
        'Shelf with this name category already exists',
        function(value) {
          const category = this.parent.category

          // if category is not selected or there is a new category added
          if (!category || category.inputValue) return true

          const shelvesCategory = shelves.find(
            shelf => shelf.categoryId === category.id,
          )

          if (!shelvesCategory) return true

          return (
            !shelvesCategory ||
            !shelvesCategory.shelves.some(
              ({ name }) => name.toLowerCase() === value.toLowerCase(),
            )
          )
        },
      )
      .required('Shelf Name is Required!'),
    category: object()
      .nullable()
      .required('Category is Required!'),
  })
}
