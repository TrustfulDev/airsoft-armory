import styles from './Skills.module.css';

import { GiRun, GiSamuraiHelmet } from 'react-icons/gi';

export const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h4><GiRun /> Speed</h4>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{ width: "90%" }}>
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiSamuraiHelmet /> Armor</h4>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{ width: "40%" }}>
                    </div>
                </div>
            </div>
        </div>
    );
};