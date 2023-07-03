import sushiImage from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import { HeaderCartButton } from './HeaderCartButton'

const Header = ({onShowCart}) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food App</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt='Sushi' />
      </div>
    </>
  )
}

export { Header }