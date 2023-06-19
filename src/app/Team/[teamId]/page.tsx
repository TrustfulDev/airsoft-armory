/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styles from './member.module.css';
import Image from "next/image";
import { Skills, Loader } from "@/components";
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, blink } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";
import { useState, useEffect } from 'react';

import { GiRank1, GiRank2, GiRank3, GiAk47, GiCowled, GiKingJuMask, GiNinjaHeroicStance, GiRunningNinja } from 'react-icons/gi';

export default function Page(props: any) {
    const [memberData, setMemberData] = useState([{
        pic: '',
        name: '',
        rank: 1,
        guntype: '',
        cautious: false,
        stealth: false,
        tag: '',
        descr: '',
        agility: 0,
        endurance: 0,
        marksmanship: 0,
        perception: 0,
        primarygun: '',
        secondarygun: '',
        eye: '',
        rig: ''
    }]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://airsoft-armory.vercel.app//api/member?member=${props.searchParams.member}`)
            .then((res) => res.json())
            .then((data) => {
                setMemberData(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) return (
        <Loader />
    )

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <motion.div className={styles.light}
                    variants={ blink() }
                    initial="hidden"
                    animate="show"
                />
                
                <Image 
                    className={styles.pic}
                    src={memberData[0].pic}
                    alt={memberData[0].name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className={styles.right}>
                <motion.div className={styles.banner}
                    variants={ staggerContainer() }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    { (memberData[0].rank === 3 && <motion.div variants={ fadeIn('up', 'spring', 0.0, 0.75) }><GiRank3 className={styles.rank}/></motion.div>)
                        || (memberData[0].rank === 2 && <motion.div variants={ fadeIn('up', 'spring', 0.0, 0.75) }><GiRank2 className={styles.rank}/></motion.div>)
                        || (memberData[0].rank === 1 && <motion.div variants={ fadeIn('up', 'spring', 0.0, 0.75) }><GiRank1 className={styles.rank}/></motion.div>)
                    }
                    
                    <motion.div className={styles.attributes}
                        variants={ fadeIn('up', 'spring', 0.1, 0.75) }
                    >
                        <GiAk47 />
                        {memberData[0].guntype}
                    </motion.div>
                    
                    <motion.div className={styles.attributes}
                        variants={ fadeIn('up', 'spring', 0.2, 0.75) }
                    >
                        { memberData[0].cautious ? <GiCowled /> : <GiKingJuMask /> }
                        { memberData[0].cautious ? 'Cautious' : 'Fearless' }
                    </motion.div>

                    <motion.div className={styles.attributes}
                        variants={ fadeIn('up', 'spring', 0.3, 0.75) }
                    >
                        { memberData[0].stealth ? <GiNinjaHeroicStance /> : <GiRunningNinja /> }
                        { memberData[0].stealth ? 'Stealth' : 'Rusher' }
                    </motion.div>
                </motion.div>

                <div className={styles.details}>
                    <div>
                        <Reveal delay={0}><h1>{memberData[0].name}</h1></Reveal>
                        <Reveal delay={0.05}><h3>{memberData[0].tag}</h3></Reveal>
                    </div>

                    <hr />

                    <Reveal delay={0.1}><p>{memberData[0].descr}</p></Reveal>
                    
                    <Skills 
                        agility={String(memberData[0].agility/10 * 100)} 
                        endurance={String(memberData[0].endurance/10 * 100)} 
                        marksmanship={String(memberData[0].marksmanship/10 * 100)} 
                        perception={String(memberData[0].perception/10 * 100)} 
                    />

                    <motion.ul className={styles.gear}
                        variants={ staggerContainer() }
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <motion.li
                            variants={ fadeIn('up', 'spring', 0.0, 0.75) }
                        >
                            <span>Primary:</span> {memberData[0].primarygun}
                        </motion.li>

                        <motion.li
                            variants={ fadeIn('up', 'spring', 0.05, 0.75) }
                        >
                            <span>Secondary:</span> {memberData[0].secondarygun}
                        </motion.li>

                        <motion.li
                            variants={ fadeIn('up', 'spring', 0.15, 0.75) }
                        >
                            <span>Eye Protection:</span> {memberData[0].eye}
                        </motion.li>

                        <motion.li
                            variants={ fadeIn('up', 'spring', 0.2, 0.75) }
                        >
                            <span>Rig/Vest:</span> {memberData[0].rig}
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}