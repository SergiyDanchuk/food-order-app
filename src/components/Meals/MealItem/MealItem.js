import styles from './MealItem.module.css'
import { MealItemForm } from './MealItemForm'
import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';

const MealItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  )
}

export { MealItem }