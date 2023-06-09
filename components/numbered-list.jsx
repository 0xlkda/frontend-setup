import RegularList from './regular-list.jsx'

export default function NumberedList({ itemComponent: ItemComponent, ...props }) {
  return (
    <ol>
      <RegularList
        {...props}
        itemComponent={(props) => (
          <li>
            <ItemComponent {...props} />
          </li>
        )}
      />
    </ol>
  )
}

export const createClickableNumberedList = (action) => (props) => (
  <NumberedList
    {...props}
    onClick={action} />
)
