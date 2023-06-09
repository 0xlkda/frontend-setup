import React from 'react'

export function printProps(Component) {
  return props => {
    console.log(`${Component.name} Props:`, props)
    return <Component {...props} />
  }
}
