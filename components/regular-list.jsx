import React from 'react'

export default function RegularList({
  items,
  resourceName,
  itemComponent: ItemComponent,
  children
}) {
  if (items?.length) {
    return items.map((item, index) => (
      <ItemComponent
        key={index}
        {...{ [resourceName]: item }} />
    ))
  }

  return React.Children.map(children, (child, index) =>
    React.isValidElement(child) && React.cloneElement(child, { key: index })
  )
}
