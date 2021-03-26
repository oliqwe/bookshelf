import { object, string } from 'yup'
import { compareStrings } from 'shared/utils'

export const shiftValidationSchema = shelves => {
  return object().shape({
    name: string()
      .test(
        'uniqueNameAndCategory',
        'Shelf with this name category already exists',
        function(value) {
          const category = this.parent?.category
          if (!this.parent?.category) return true

          return !shelves.some(
            shelf =>
              compareStrings(shelf.categoryId, category?.id) &&
              compareStrings(shelf.name, value),
          )
        },
      )
      .required('Shelf Name is Required!'),
    category: object()
      .nullable()
      .required('Category is Required!'),
  })
}
