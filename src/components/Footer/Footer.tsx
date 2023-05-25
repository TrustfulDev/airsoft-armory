import styles from './Footer.module.css';
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.container} id="footer">
            <div className={styles.top}>
                <div>
                    <h1>Toy Soliders</h1>
                    <h3>Best in the Bay Area</h3>
                </div>

                <div className={styles.categories}>
                    <div className={styles.category}>
                        <h4>RESOURCES</h4>
                        <Link href="/learn">Learn Airsoft</Link>
                        <a href="https://github.com/TrustfulDev/airsoft-armory/tree/Version_2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>

                    <div className={styles.category}>
                        <h4>SOCIALS</h4>
                        <Link href="/">Discord</Link>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Instagram</Link>
                        <Link href="/">Twitter</Link>
                    </div>

                    <div className={styles.category}>
                        <h4>TEAM</h4>
                        <Link href="/team">About Us</Link>
                        <Link href="/zones">Events</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>

            <hr />
            
            <div className={styles.bottom}>
                <p className={styles.rights}><span className={styles.copyright}>&#169;</span> 2023 Trustful Dev - All Rights Reserved</p>
                <div className={styles.icons}>
                    <div className={styles.temp}></div>
                    <div className={styles.temp}></div>
                    <div className={styles.temp}></div>
                    <div className={styles.temp}></div>
                </div>
            </div>
        </footer>
    )
}