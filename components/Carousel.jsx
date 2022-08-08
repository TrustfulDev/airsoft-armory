import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/Weapons.module.css';

const Carousel = ({ title, data, type }) => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div>
            <h2>{title}</h2>
            <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: 'grabbing' }}>
                <motion.div 
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    className={styles.inner_carousel}
                >
                    {data.map(person => (
                            <motion.div className={styles.card} key={person.key}>
                                <img src={person[type]} alt={person.name} key={person.key} />
                            </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Carousel;