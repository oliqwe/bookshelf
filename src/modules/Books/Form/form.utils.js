import { object } from 'yup'
import { compareStrings } from 'shared/utils'

/** Get active category from  Google response ["Computers / Programming Languages / JavaScript", "Computers / Web / Web Programming"]
 * @param  {[String]} googleCategories
 * @param {[Object]} categories - list of existing default categories
 */
export function getActiveCategory(googleCategories, categories) {
  if (!googleCategories) return

  const bookCategories = googleCategories.reduce((acc, categories) => {
    return [...acc, ...categories.split('/')]
  }, [])

  return categories.find(category => {
    return bookCategories
      .map(v => v.toLowerCase().trim())
      .includes(category.name.toLowerCase())
  })
}

export const bookDetailsValidationSchema = bookId => {
  return object().shape({
    shelf: object()
      .test(
        'uniqueBook',
        'Selected book is already in the shelf, please select another one',
        value => {
          if (!value || value.books.length === 0) {
            return true
          }
          return !value.books.some(({ id }) => compareStrings(id, bookId))
        },
      )
      .nullable()
      .required('Shelf is Required!'),
    category: object()
      .nullable()
      .required('Category is Required!'),
  })
}
