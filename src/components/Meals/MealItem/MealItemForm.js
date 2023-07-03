import { Input } from '../../UI/input'
import styles from './MealItemForm.module.css'

const MealItemForm = ({id}) => {
  return <form className={styles.form}>
    <Input label='Quantity' input={{
      id: id,
      type: 'number',
      min: '1',
      step: '1',
      defaultValue: '1'
    }}/>
    <button>Add</button>
  </form>
}

export { MealItemForm }