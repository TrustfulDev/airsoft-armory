"use client"
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

import { GiRun, GiJumpingRope, GiEyeTarget, GiRadarSweep  } from 'react-icons/gi';

export const Skills = (props: { agility: string, endurance: string, marksmanship: string, perception: string }) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h4><GiRun size={25} /> Agility</h4>

                <div className={styles.bar}>
                    <motion.div className={styles.progress}
                        initial={{ width: "0%" }}
                        animate={{ width: `${props.agility}%` }}
                        transition={{ duration: 0.75, ease: "easeOut"}}
                    />
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiJumpingRope size={25} /> Endurance</h4>

                <div className={styles.bar}>
                    <motion.div className={styles.progress}
                        initial={{ width: "0%" }}
                        animate={{ width: `${props.endurance}%` }}
                        transition={{ duration: 0.75, ease: "easeOut"}}
                    />
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiEyeTarget size={25} /> Marksmanship</h4>

                <div className={styles.bar}>
                    <motion.div className={styles.progress}
                        initial={{ width: "0%" }}
                        animate={{ width: `${props.marksmanship}%` }}
                        transition={{ duration: 0.75, ease: "easeOut"}}
                    />
                </div>
            </div>

            <div className={styles.box}>
                <h4><GiRadarSweep size={25} /> Perception</h4>

                <div className={styles.bar}>
                    <motion.div className={styles.progress}
                        initial={{ width: "0%" }}
                        animate={{ width: `${props.perception}%` }}
                        transition={{ duration: 0.75, ease: "easeOut"}}  
                    />
                </div>
            </div>
        </div>
    );
};