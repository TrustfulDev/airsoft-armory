import styles from './zones.module.css';
import Image from "next/image";
import Link from "next/link";

const zones = () => {
    return (
        <>
            <h1 className={styles.header}>Choose A Zone</h1>
            <section className={styles.container}>
                <Link className={`${styles.box1} ${styles.boxes}`} 
                    href={{ pathname: "/zones/gamepod", query: { zone: '201' }}}
                >
                    <Image 
                        className={styles.pic}
                        src="/static/zones/gamepodZone.webp"
                        alt="Gamepod Combat Zone"
                        fill
                        loading="lazy"
                    />
                    <h2>Gamepod Combat Zone</h2>
                    
                </Link>

                <Link className={`${styles.box2} ${styles.boxes}`} 
                    href={{ pathname: "/zones/cqbcity", query: { zone: '202' }}}
                >
                    <Image 
                        className={styles.pic}
                        src="/static/zones/cqbCity.webp"
                        alt="CQB City"
                        fill
                        loading="lazy"
                    />
                    <h2>CQB City</h2>
                </Link>

                <Link className={`${styles.box3} ${styles.boxes}`} 
                    href={{ pathname: "/zones/dsockillhouse", query: { zone: '203' }}}
                >
                    <Image 
                        className={styles.pic}
                        src="/static/zones/dsoc.webp"
                        alt="DSOC Killhouse"
                        fill
                        loading="lazy"
                    />
                    <h2>DSOC Killhouse</h2>
                </Link>
            </section>
        </>
    );
};

export default zones;