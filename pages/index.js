import Head from 'next/head';
import Link from 'next/link';
import FadeIn from 'react-fade-in';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airsoft Armory</title>
        <meta name="description" content="Biệt Đội e-sốp quần què Armory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <FadeIn transitionDuration={900}>
        <main className={styles.main}>
          <div className={styles.group}>
            <h3>Private Group</h3>
            <h2><em>Biet Đoi e-sop quan que</em></h2>
            <p>Greetings to everyone! This DRAMA-FREE group is for anyone who likes to play airsoft. We live locally within San Jose and typically play at Gamepod Combat Zone or CQB City. Don't let the Vietnamese scare you as we accept ANYONE regardless of their background. All we ask in return is your utmost respect when playing with us. So what are you waiting for? Join us now!</p>

            <div className={styles.btns}>
              <Link href="/roster"><button type="button">VIEW ROSTER</button></Link>
              <Link href="/weapons"><button type="button">VIEW WEAPONS</button></Link>
              <Link href="/zones"><button type="button">VIEW ZONES</button></Link>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={`${styles.picture} ${styles.picture1}`}></div>
            <div className={`${styles.picture} ${styles.picture2}`}></div>
            <div className={`${styles.picture} ${styles.picture3}`}></div>
          </div>
        </main>
      </FadeIn>
    </div>
  )
}
