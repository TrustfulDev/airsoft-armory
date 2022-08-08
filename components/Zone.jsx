import React from 'react';
import styles from '../styles/Zones.module.css';
import { motion } from 'framer-motion';

const zoneVariants = {
    offscreen: {
      y: 0,
      rotate: 1
    },
    onscreen: {
      y: -50,
      rotate: 0,
      transition: {
        default: { ease: 'linear' },
        duration: 0.4
      }
    }
  };

const Zone = ({ name, address, thoughts, desc, website, img }) => {
    return (
        <motion.div
            className={styles.motion_container}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className={styles.zone} variants={zoneVariants}>
                <div className={styles.left}>
                    <h1>{name}</h1>
                    <h3>{address}</h3>
                    <p>{thoughts}</p>
                    <h4>Operation Details</h4>
                    <ul>
                        {desc.map((text, index) => {
                            return <li key={index}>{text}</li>
                        })}
                        <li><a href={website} target='_blank'>Website (If applicable)</a></li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <img src={img} alt={name} />
                </div>
            </motion.div>

        </motion.div>
    )
};

export default Zone;