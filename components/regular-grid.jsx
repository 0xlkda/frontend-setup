function RegularGrid({
  items,
  resourceName,
  itemComponent: ItemComponent,
  columnsCount = 2
}) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))` }}>
      {
        items.map((item, index) => (
          <ItemComponent
            key={index}
            {...{ [resourceName]: item }} />
        ))
      }
    </ div>
  )
}

export default RegularGrid
