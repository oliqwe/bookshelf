import userEvent from '@testing-library/user-event'

global.fetch = require('node-fetch')

import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestProvider } from 'shared/utils/testing-library.helper'
import BookList from './BookList'
import nock from 'nock'
import { mockBook, mockBooks } from 'shared/mock'
import { waitFor } from '@testing-library/dom'

async function renderComponent() {
  render(
    <TestProvider currentLocation={'/'}>
      <BookList />
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

  it('on card click should fetch book details in a side panel', async () => {
    const getBookDetailsCall = nock('https://www.googleapis.com')
      .get(`/books/v1/volumes/${mockBooks.items[0].id}`)
      .reply(200, mockBook)

    await renderComponent()

    userEvent.click(
      screen.getByRole('button', { name: /javascript patterns/i }),
    )

    await waitFor(() => {
      expect(getBookDetailsCall.isDone()).toBe(true)
      expect(
        screen.getByRole('heading', { name: /javascript patterns/i }),
      ).toBeVisible()
      expect(
        screen.getByRole('button', { name: /add to shelf/i }),
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
})
