import styles from './Skills.module.css';

import { GiRun, GiJumpingRope, GiEyeTarget, GiRadarSweep  } from 'react-icons/gi';

export const Skills = (props: { agility: string, endurance: string, marksmanship: string, perception: string }) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h4><GiRun size={25} /> Agility</h4>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{ width: `${props.agility}%` }}>
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiJumpingRope size={25} /> Endurance</h4>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{ width: `${props.endurance}%` }}>
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiEyeTarget size={25} /> Marksmanship</h4>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{ width: `${props.marksmanship}%` }}>
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiRadarSweep size={25} /> Perception</h4>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{ width: `${props.perception}%` }}>
                    </div>
                </div>
            </div>
        </div>
    );
};