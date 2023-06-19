"use client"
import styles from './zones.module.css';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { motion } from 'framer-motion';

const Zones = () => {
    const router = useRouter();

    const handleNav = (props: { path: string}) => {
        router.push(props.path)
    }

    return (
        <>
            <h1 className={styles.header}>Choose A Zone</h1>
            <motion.section className={styles.container}
                variants={ staggerContainer() }
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div className={`${styles.box1} ${styles.boxes}`} 
                    onClick={() => handleNav({ path: "/zones/gamepod?zone=201" })}
                    variants={ fadeIn('up', 'spring', 0.0, 0.75) }
                >
                    <Image 
                        className={`${styles.pic} loadingImg`}
                        src="/static/zones/gamepodZone.webp"
                        alt="Gamepod Combat Zone"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoadingComplete={(image) => image.classList.remove("loadingImg")}
                    />

                    <h2>Gamepod Combat Zone</h2>
                </motion.div>

                <motion.div className={`${styles.box2} ${styles.boxes}`} 
                    onClick={() => handleNav({ path: "/zones/cqbcity?zone=202" })}
                    variants={ fadeIn('up', 'spring', 0.1, 0.75) }
                >
                    <Image 
                        className={`${styles.pic} loadingImg`}
                        src="/static/zones/cqbCity.webp"
                        alt="CQB City"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoadingComplete={(image) => image.classList.remove("loadingImg")}
                    />

                    <h2>CQB City</h2>
                </motion.div>

                <motion.div className={`${styles.box3} ${styles.boxes}`} 
                    onClick={() => handleNav({ path: "/zones/dsockillhouse?zone=203" })}
                    variants={ fadeIn('up', 'spring', 0.2, 0.75) }
                >
                    <Image 
                        className={`${styles.pic} loadingImg`}
                        src="/static/zones/dsoc.webp"
                        alt="DSOC Killhouse"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoadingComplete={(image) => image.classList.remove("loadingImg")}
                    />
                    
                    <h2>DSOC Killhouse</h2>
                </motion.div>
            </motion.section>
        </>
    );
};

export default Zones;