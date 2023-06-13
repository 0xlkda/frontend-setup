import React from 'react'

export default function TwoColumnLayout({ children }) {
  const [left, right] = React.Children.toArray(children)

  return (
    <div className="flex">
      {left}
      {right}
    </div>
  )
}
