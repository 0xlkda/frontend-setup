import React, { useState } from 'react'
import RegularList from '@/components/regular-list.jsx'

export default function ExpandableList({
  items,
  resourceName,
  headingComponent: HeadingComponent,
  itemComponent: ItemComponent,
}) {
  if (!items.length) return null
  const [activated, setActivated] = useState(items[0])

  return (
    <RegularList
      items={items}
      resourceName={resourceName}
      itemComponent={(props) => {
        const item = props[resourceName]
        const isActive = item === activated

        return (
          <>
            <HeadingComponent
              {...props}
              isActive={isActive}
              setActive={() => setActivated(item)} />

            {isActive && <ItemComponent {...props} />}
          </>
        )
      }}
    />
  )
}
