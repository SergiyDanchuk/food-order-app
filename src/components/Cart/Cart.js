import { Modal } from '../UI/Modal';
import styles from './Cart.module.css'

const Cart = ({ onHideCart }) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10 }].map(
        item => <li>{item.name}</li>
      )}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export { Cart }