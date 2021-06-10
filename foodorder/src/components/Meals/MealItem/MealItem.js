const MealItem = ({ name, description, price }) => {
  const fixedPrice = `$${price.toFixed(2)}`

  return <li>
    <div>
      <h3>{name}</h3>
      <div>{description}</div>
      <div>{fixedPrice}</div>
    </div>
    <div>

    </div>
  </li>
}

export default MealItem;