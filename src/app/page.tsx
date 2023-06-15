import Image from 'next/image';
import Link from "next/link";
import styles from './page.module.css';

import { GiTeamDowngrade, GiGraduateCap, GiTreasureMap } from 'react-icons/gi';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.herobg}
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="/globe.mp4" type="video/mp4" />
        </video>
        <div className={styles.info}>
          <h1>Toy Soldiers</h1>
          <h2>The Best Bay Area Airsoft Team</h2>
          <p>Toy Soldiers: The Bay Area&#39;s Finest Airsoft Heroes. Uniting skill, strategy, and camaraderie, this elite team dominates the field. With unrivaled precision and unwavering teamwork, they embody the true spirit of airsoft warfare. Prepare to witness the legends in action.</p>

          <div className={styles.btns}>
            <hr />
            <a href="#middle" className="button">Learn More</a>
            <button className="button">Talk to us</button>
            <hr />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.tallCard}>
            <Image
              className={styles.pic}
              src='/static/home/1_flare.webp'
              alt="A picture of the arena"
              fill
            />
          </div>

          <div className={styles.smallCard}>
            <Image
              className={styles.pic}
              src='/static/home/2_duo.webp'
              alt="A picture of the arena"
              fill
            />
          </div>

          <div className={styles.smallCard}>
            <Image
              className={styles.pic}
              src='/static/home/3_pdw.webp'
              alt="A picture of the arena"
              fill
            />
          </div>

          <div className={styles.tallCard}>
            <Image
              className={styles.pic}
              src='/static/home/4_log.webp'
              alt="A picture of the arena"
              fill
            />
          </div>
        </div>
      </section>

      <div className={styles.middle} id="middle">
        <div className={styles.tint}></div>
          <video
            className={styles.vid}
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/AirsoftLoop.mp4" type="video/mp4" />
          </video>
      </div>

      <section className={styles.next}>
        <Link href="/team" className={styles.box}>
          <div className={styles.boxhead}><GiTeamDowngrade /><hr/></div>

          <div className={styles.content}>
            <h2>Meet The Team</h2>
            <h3>Stronger as a unit</h3>

            <p>Click to meet the team!</p>
          </div>
        </Link>

        <Link href="/learn" className={styles.box}>
          <div className={styles.boxhead}><GiGraduateCap /><hr/></div>

          <div className={styles.content}>
            <h2>Learn Airsoft</h2>
            <h3>Play Smart & Safe</h3>

            <p>Click to start learning!</p>
          </div>
        </Link>

        <Link href="/zones" className={styles.box}>
          <div className={styles.boxhead}><GiTreasureMap /><hr/></div>

          <div className={styles.content}>
            <h2>Find Zones</h2>
            <h3>Plan your next game</h3>

            <p>Click to view zones!</p>
          </div>
        </Link>
      </section>
    </>
  )
}
