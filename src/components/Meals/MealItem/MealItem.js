import styles from './MealItem.module.css'

const MealItem = ({ name, description, price }) => {
  const formattedPrice = `$${price}`

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>

      </div>
    </li>
  )
}

export { MealItem }