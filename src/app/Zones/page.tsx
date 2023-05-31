import styles from './zones.module.css';
import Image from "next/image";

const zones = () => {
    return (
        <>
            <h1 className={styles.header}>Choose A Zone</h1>
            <section className={styles.container}>
                <div className={styles.box1}>
                    <Image 
                        className={styles.pic}
                        src="/static/zones/gamepodZone.webp"
                        alt="Gamepod Combat Zone"
                        fill
                        loading="lazy"
                    />
                    <h2>Gamepod Combat Zone</h2>
                    
                </div>

                <div className={styles.box2}>
                    <Image 
                        className={styles.pic}
                        src="/static/zones/cqbCity.webp"
                        alt="CQB City"
                        fill
                        loading="lazy"
                    />
                    <h2>CQB City</h2>
                </div>

                <div className={styles.box3}>
                    <Image 
                        className={styles.pic}
                        src="/static/zones/dsoc.webp"
                        alt="DSOC Killhouse"
                        fill
                        loading="lazy"
                    />
                    <h2>DSOC Killhouse</h2>
                </div>
            </section>
        </>
    );
};

export default zones;