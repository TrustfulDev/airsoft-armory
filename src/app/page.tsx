"use client"
import Image from 'next/image';
import Link from "next/link";
import styles from './page.module.css';

import { motion } from 'framer-motion';
import { GiTeamDowngrade, GiGraduateCap, GiTreasureMap } from 'react-icons/gi';
import { Reveal, BarReveal } from "@/utils/Reveal";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const learnMore = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }

  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.herobg}
          loop
          muted
          autoPlay
          playsInline
          src="/globe.mp4"
        />

        <div className={styles.info}>
          <Reveal delay={0}><h1>Toy Soldiers</h1></Reveal>
          <Reveal delay={0}><h2>The Best Bay Area Airsoft Team</h2></Reveal>
          <Reveal delay={0}><p>Toy Soldiers: The Bay Area&#39;s Finest Airsoft Heroes. Uniting skill, strategy, and camaraderie, this elite team dominates the field. With unrivaled precision and unwavering teamwork, they embody the true spirit of airsoft warfare. Prepare to witness the legends in action.</p></Reveal>
          
          <Reveal delay={0}>
            <div className={styles.btns}>
              <hr />
              <button className="button" onClick={learnMore}>Learn More</button>
              <Link href="/contact" className="button">Talk to us</Link>
              <hr />
            </div>
          </Reveal>
        </div>

        <motion.div className={styles.cards}
          variants={ staggerContainer() }
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className={styles.tallCard}
            variants={ fadeIn('up', 'spring', 0.25, 0.75) }
          >
            <Image
              className={`${styles.pic} loadingImg`}
              src='/static/home/1_flare.webp'
              alt="A picture of the arena"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoadingComplete={(image) => image.classList.remove("loadingImg")}
            />
          </motion.div>

          <motion.div className={styles.smallCard}
            variants={ fadeIn('up', 'spring', 0.3, 0.75) }
          >
            <Image
              className={`${styles.pic} loadingImg`}
              src='/static/home/2_duo.webp'
              alt="A picture of the arena"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoadingComplete={(image) => image.classList.remove("loadingImg")}
            />
          </motion.div>

          <motion.div className={styles.smallCard}
            variants={ fadeIn('up', 'spring', 0.35, 0.75) }
          >
            <Image
              className={`${styles.pic} loadingImg`}
              src='/static/home/3_pdw.webp'
              alt="A picture of the arena"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoadingComplete={(image) => image.classList.remove("loadingImg")}
            />
          </motion.div>

          <motion.div className={styles.tallCard}
            variants={ fadeIn('up', 'spring', 0.4, 0.75) }
          >
            <Image
              className={`${styles.pic} loadingImg`}
              src='/static/home/4_log.webp'
              alt="A picture of the arena"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoadingComplete={(image) => image.classList.remove("loadingImg")}
            />
          </motion.div>
        </motion.div>
      </section>

      <div className={styles.middle} >
        <div className={styles.tint}></div>
          <video
            className={styles.vid}
            loop
            muted
            autoPlay
            playsInline
            src="/AirsoftLoop.mp4"
          />
      </div>

      <section className={styles.next} ref={ref}>
        <BarReveal delay={0}>
          <Link href="/team" className={styles.box}>
            <div className={styles.boxhead}><GiTeamDowngrade /><hr/></div>

            <div className={styles.content}>
              <h2>Meet The Team</h2>
              <h3>Stronger as a unit</h3>

              <p>Click to meet the team!</p>
            </div>
          </Link>
        </BarReveal>

        <BarReveal delay={0}>
          <Link href="/learn" className={styles.box}>
            <div className={styles.boxhead}><GiGraduateCap /><hr/></div>

            <div className={styles.content}>
              <h2>Learn Airsoft</h2>
              <h3>Play Smart & Safe</h3>

              <p>Click to start learning!</p>
            </div>
          </Link>
        </BarReveal>

        <BarReveal delay={0}>
          <Link href="/zones" className={styles.box}>
            <div className={styles.boxhead}><GiTreasureMap /><hr/></div>

            <div className={styles.content}>
              <h2>Find Zones</h2>
              <h3>Plan your next game</h3>

              <p>Click to view zones!</p>
            </div>
          </Link>
        </BarReveal>
      </section>
    </>
  )
}
