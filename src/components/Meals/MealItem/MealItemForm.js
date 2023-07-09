import { useRef, useState } from 'react'

import { Input } from '../../UI/input'
import styles from './MealItemForm.module.css'

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const impuntAmount = amountInputRef.current.value;

    if (impuntAmount.trim().length === 0 || +impuntAmount < 1 || +impuntAmount > 10) {
      setAmountValid(false);
      return;
    }

    onAddToCart(+impuntAmount);
  }


  return <form className={styles.form} onSubmit={submitHandler}>
    <Input
      ref={amountInputRef}
      label='Quantity'
      input={{
        id: id,
        type: 'number',
        min: '1',
        step: '1',
        defaultValue: '1'
      }}
    />
    <button>Add</button>
    {!isAmountValid && <p>Please enter quantity from 1 to 10</p>}
  </form>
}

export { MealItemForm }