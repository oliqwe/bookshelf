import React from 'react'

export function renderComponent(name, children, props) {
  console.log('here')
  const child = children.find(
    child =>
      child.type &&
      (child.type.displayName === name || child.type.name === name),
  )
  console.log(child)
  return child ? React.cloneElement(child, { ...props, ...child.props }) : null
}

export function renderAllBut(components, children) {
  return (children || []).filter(
    child =>
      !child.type ||
      (child.type &&
        !components.includes(child.type.displayName || child.type.name)),
  )
}
