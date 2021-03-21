import React, { Suspense } from 'react'

function LazyLoader({ loader, loading }) {
  const LazyComponent = React.lazy(loader)
  return function WrapperLazyLoader(props) {
    return (
      <Suspense fallback={loading}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }
}

export default LazyLoader
