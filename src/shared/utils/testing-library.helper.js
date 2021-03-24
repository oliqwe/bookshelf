import React from 'react'
import { BookShelfProvider } from '../context/book-shelf-context'
import { MemoryRouter, Route } from 'react-router'
import '@testing-library/jest-dom'

/**
 * Wrapper for tests.
 * @param {{ currentRoute: string, currentLocation?: string = currentRoute, children: JSX.Element }} props
 */
export const TestProvider = ({
  children,
  currentRoute,
  currentLocation = currentRoute,
}) => {
  return (
    <BookShelfProvider>
      <MemoryRouter initialEntries={[currentLocation]} initialIndex={0}>
        <Route exact path={currentRoute}>
          {children}
        </Route>
        <Route>{({ location }) => location.pathname}</Route>
      </MemoryRouter>
    </BookShelfProvider>
  )
}
