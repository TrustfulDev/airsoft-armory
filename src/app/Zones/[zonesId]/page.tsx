/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styles from './zone.module.css';
import Image from "next/image";

import { GiAk47, GiSave, GiStopwatch, GiTreasureMap } from 'react-icons/gi';
import { BarReveal } from "@/utils/Reveal";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { useState, useEffect } from 'react';
import { Loader } from "@/components";

const Zone = (props: any) => {
    const [zoneData, setZoneData] = useState([{
        pic: '',
        breaktime: 0,
        distance: '',
        location: '',
        name: '',
        descr: '',
        price: 0,
        playtime: 0,
        rounds: 0,
        size: 0,
        website: '',
        thoughts: ''
    }]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/zone?zone=${props.searchParams.zone}`)
            .then((res) => res.json())
            .then((data) => {
                setZoneData(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) return (
        <Loader />
    )

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image 
                    className={`${styles.pic} loadingImg`}
                    src={zoneData[0].pic}
                    alt="A picture of the arena"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={(image) => image.classList.remove("loadingImg")}
                />

                <motion.div className={styles.amenities}
                    variants={ staggerContainer() }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <motion.div
                        variants={ fadeIn('up', 'spring', 0.0, 0.75) }
                    >
                        <GiAk47 />
                        Rentals
                    </motion.div>

                    <motion.div
                        variants={ fadeIn('up', 'spring', 0.1, 0.75) }
                    >
                        <GiSave />
                        Reservations
                    </motion.div>

                    <motion.div
                        variants={ fadeIn('up', 'spring', 0.2, 0.75) }
                    >
                        <GiStopwatch />
                        {zoneData[0].breaktime}hr Break
                    </motion.div>

                    <motion.div
                        variants={ fadeIn('up', 'spring', 0.3, 0.75) }
                    >
                        <GiTreasureMap />
                        {zoneData[0].distance}
                    </motion.div>
                </motion.div>
            </div>

            <div className={styles.right}>
                <BarReveal delay={0}><h2>{zoneData[0].location}</h2></BarReveal>
                <BarReveal delay={0.0}><h1>{zoneData[0].name}</h1></BarReveal>

                <hr />
                
                <BarReveal delay={0.05}><p>{zoneData[0].descr}</p></BarReveal>

                <ul>
                    <BarReveal delay={0.1}><li>Price: ${zoneData[0].price}</li></BarReveal>
                    <BarReveal delay={0.15}><li>Playtime: {zoneData[0].playtime} hours</li></BarReveal>
                    <BarReveal delay={0.2}><li>Rounds: {zoneData[0].rounds} total</li></BarReveal>
                    <BarReveal delay={0.25}><li>Size: {zoneData[0].size} square feet</li></BarReveal>
                    <BarReveal delay={0.3}><li>Website: <a href={zoneData[0].website} target="_blank" rel="noopener noreferrer">{zoneData[0].website}</a></li></BarReveal>
                </ul>

                <div className={styles.thoughts}>
                    <BarReveal delay={0.35}><h3>Our Thoughts</h3></BarReveal>
                    <BarReveal delay={0.35}><p>{zoneData[0].thoughts}</p></BarReveal>
                </div>
            </div>
        </div>
    )
}

export default Zone;