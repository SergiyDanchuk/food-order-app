import styles from './PromoText.module.css'

const PromoText = () => {
  return (
    <section className={styles['promo-text']}>
      <h2>Food App</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, pellentesque at aliquet non, lacinia sit amet neque. Nunc erat tellus, rhoncus et nibh non, accumsan dignissim eros. In risus arcu, consectetur eget lectus vitae, dapibus accumsan est. Sed et justo felis. Etiam orci dui, efficitur ut risus quis, rhoncus lacinia dui.</p>
      <p>Sed lectus urna, laoreet ut lacus id, rutrum mollis ligula. Maecenas orci lectus, porta eu risus quis, congue rhoncus diam. Suspendisse sit amet nisl tempus, scelerisque metus ut, fermentum sem. Fusce est nunc, ullamcorper tincidunt vulputate id, ultrices sit amet lacus</p>
    </section>
  )
}

export { PromoText }