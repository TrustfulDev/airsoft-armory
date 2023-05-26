import styles from './Footer.module.css';
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaRegIdCard } from 'react-icons/fa';

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
                    <a href="https://github.com/TrustfulDev" target="_blank" rel="noopener noreferrer" className={styles.iconBox}><FaGithub className={styles.icon} /></a>
                    <a href="https://www.linkedin.com/in/vu-steven/" target="_blank" rel="noopener noreferrer" className={styles.iconBox}><FaLinkedinIn className={styles.icon} /></a>
                    <a href="https://www.facebook.com/stevenvu123" target="_blank" rel="noopener noreferrer" className={styles.iconBox}><FaFacebookF className={styles.icon} /></a>
                    <a href="https://trustfuldev.github.io/stevenvu/" target="_blank" rel="noopener noreferrer" className={styles.iconBox}><FaRegIdCard className={styles.icon} /></a>
                </div>
            </div>
        </footer>
    )
}