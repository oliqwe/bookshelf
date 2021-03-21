import React, { useCallback, useRef, useReducer } from 'react'

function useSafeDispatch(dispatch) {
  const mounted = useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, error: null }
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data, error: null }
    }
    case 'rejected': {
      return { status: 'rejected', data: null, error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useAsync(initialState) {
  const [state, unsafeDispatch] = useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  const { data, error, status } = state

  const get = useCallback(
    (url, params) => {
      dispatch({ type: 'pending' })
      fetch(url + new URLSearchParams(params))
        .then(res => res.json())
        .then(
          data => {
            dispatch({ type: 'resolved', data })
          },
          error => {
            dispatch({ type: 'rejected', error })
          },
        )
    },

    [dispatch],
  )

  return {
    error,
    status,
    data,
    get,
  }
}

export { useAsync }
