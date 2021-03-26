global.fetch = require('node-fetch')

import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestProvider } from 'shared/utils/testing-library.helper'
import Book from './Book'
import nock from 'nock'
import { mockBook, mockBooks } from 'shared/mock'
import { waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

async function renderComponent() {
  render(
    <TestProvider currentLocation={'/'}>
      <Book />
    </TestProvider>,
  )
  await screen.findAllByTestId(/book-container/i)
}

const getBooks = () => {
  nock('https://www.googleapis.com')
    .get('/books/v1/volumes')
    .query({
      q: 'javascript',
      maxResults: 40,
      projection: 'lite',
      printType: 'books',
    })
    .reply(200, mockBooks)
}

describe('<BookList>', () => {
  beforeEach(() => {
    getBooks()
  })

  it('should render list page successfully', async () => {
    await renderComponent()

    expect(
      screen.getByRole('button', { name: /javascript patterns/i }),
    ).toBeVisible()

    expect(
      screen.getByRole('button', { name: /javascript: the good parts/i }),
    ).toBeVisible()
  })

  describe('Book Details', () => {
    beforeEach(async () => {
      await renderComponent()
      userEvent.click(screen.getByText(/javascript patterns/i))

      nock('https://www.googleapis.com')
        .get(`/books/v1/volumes/${mockBooks.items[0].id}`)
        .reply(200, mockBook)
    })

    it('on card click should fetch book details and display in a side panel', async () => {
      await waitFor(() => {
        expect(
          screen.getByRole('heading', { name: /javascript patterns/i }),
        ).toBeVisible()
        expect(screen.getByText(/language:/i)).toBeVisible()
        expect(screen.getByText(/stoyan stefanov/i)).toBeVisible()
        expect(
          screen.getByRole('textbox', { name: /select a shelf/i }),
        ).toBeVisible()
        expect(
          screen.getByRole('textbox', { name: /select a category/i }),
        ).toBeVisible()
      })
    })

    it('should disable category select if there is one provided in the response', async () => {
      const categorySelect = await screen.findByLabelText(/select a category/i)

      userEvent.click(screen.getByLabelText(/select a shelf/i))

      screen.debug(document, 100000000000)

      expect(categorySelect).toBeDisabled()
      expect(screen.getByText(/js books/i)).toBeVisible()
    })
  })
})
