import React from 'react'

export function renderComponent(children, name, props) {
  return (children || []).map(child =>
    child.type && (child.type.displayName === name || child.type.name === name)
      ? React.cloneElement(child, { ...props, ...child.props })
      : null,
  )
}

export function renderAllBut(children, name) {
  return (children || []).filter(
    child =>
      !child.type ||
      ((child.type && child.type.displayName !== name) ||
        child.type.name !== name),
  )
}
