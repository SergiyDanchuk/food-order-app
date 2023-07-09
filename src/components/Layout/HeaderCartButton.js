import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);
  const cartItemsNumbers = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0)

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartItemsNumbers}</span>
    </button>
  )
}

export { HeaderCartButton }