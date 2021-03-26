import React from 'react'

import { computerMock, mockBook, shelvesMock } from '../../shared/mock'
import { render, screen } from '@testing-library/react'
import { TestProvider } from 'shared/utils/testing-library.helper'
import Shelves from './'
import nock from 'nock'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'
import { ConfirmProvider } from 'material-ui-confirm'
import { setLocalStorageValue } from '../../shared/utils'
import { LOCAL_STORAGE_SHELVES_KEY } from 'shared/constants/constants'

global.fetch = require('node-fetch')

async function renderComponent() {
  render(
    <TestProvider currentLocation="/shelves">
      <ConfirmProvider>
        <Shelves />
      </ConfirmProvider>
    </TestProvider>,
  )

  await screen.findByText(shelvesMock[0].name)
}

describe('<Shelves>', () => {
  beforeEach(() => {
    setLocalStorageValue(LOCAL_STORAGE_SHELVES_KEY, shelvesMock)
  })

  it('should render list page successfully', async () => {
    await renderComponent()

    expect(screen.getByText(/shelf name/i)).toBeVisible()
    expect(screen.getByRole('button', { name: /add new shelf/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /computers/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /js books/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /review/i })).toBeVisible()
    expect(screen.getByRole('button', { name: /delete-shelf/i })).toBeVisible()
    expect(screen.getAllByTestId(/book-card/)).toHaveLength(4)
    expect(screen.getAllByTestId(/shelf/)).toHaveLength(1)
  })

  it('should call api on book click', async () => {
    await renderComponent()
    const call = nock('https://www.googleapis.com')
      .get(`/books/v1/volumes/${computerMock[0].id}`)
      .reply(200, mockBook)

    userEvent.click(screen.getByText(/pro javascript techniques/i))

    await waitFor(() => expect(call.isDone()).toBe(true))
  })

  it('should remove a book form a shelf', async () => {
    await renderComponent()

    userEvent.hover(screen.getAllByTestId(/book-card/)[0])
    userEvent.click(screen.getAllByTestId(/delete-book/)[0])
    userEvent.click(screen.getByText('Ok'))

    await waitFor(() => {
      expect(screen.getAllByTestId(/book-card/)).toHaveLength(3)
    })
  })

  it('should remove a shelf', async () => {
    await renderComponent()
    userEvent.click(screen.getAllByRole('button', { name: /delete-shelf/i })[0])
    userEvent.click(screen.getByText('Ok'))

    await waitFor(() => {
      expect(screen.queryByTestId(/shelf/)).not.toBeInTheDocument()
    })
  })

  it('should create new shelf', async () => {
    await renderComponent()

    userEvent.click(screen.getByRole('button', { name: /add new shelf/i }))

    userEvent.type(screen.getByLabelText(/name/i), 'sci-fi collection')
    userEvent.click(screen.getByLabelText(/Select or create/i))
    userEvent.click(screen.getByText('FICTION'))
    userEvent.click(screen.getByRole('button', { name: /save/i }))

    await waitFor(() => {
      expect(screen.getAllByTestId(/shelf/)).toHaveLength(2)
      expect(screen.getByText(/sci-fi collection/i)).toBeInTheDocument()
    })
  })
})
