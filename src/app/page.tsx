import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <p>Test</p>
      </section>

      <section className={styles.info}>
        <p>Hello</p>
      </section>
    </>
  )
}
