import styles from './Loader.module.css';
import { BiLoader } from 'react-icons/bi';

export const Loader = () => {
    return (
        <div className={styles.container}>
            <video
                className={styles.bg}
                loop
                muted
                autoPlay
                playsInline
                src="/globe.mp4"
            />

            <div className={styles.body}>
                <BiLoader size={75} />
            </div>

            <div className={styles.text}><h1 className={styles.text}>Redirecting</h1></div>
        </div>
    )
}