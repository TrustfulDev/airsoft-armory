import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosMenu, IoMdCloseCircleOutline } from 'react-icons/io';

import styles from '../styles/Navbar.module.css';
import home from '../public/home.png';
import roster from '../public/roster.png';
import weapons from '../public/weapons.png';
import zone from '../public/zones.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.nav_menu}>
                    { toggleMenu 
                        ? <IoMdCloseCircleOutline className={styles.fade} color={`var(--color-yellow)`} size={40} onClick={() => setToggleMenu(false)} />
                        : <IoIosMenu className={styles.fade} color={`var(--color-yellow)`} size={40} onClick={() => setToggleMenu(true)} />
                    }

                    { toggleMenu && (
                        <div className={`${styles.nav_container} ${styles.fade}`}>
                            <div className={styles.nav_links}>
                                <Link href="/">
                                    <div className={styles.nav_item} onClick={() => setToggleMenu(false)}>
                                        <Image src={home} alt={'Home'} width={320} height={214} objectFit="cover" />
                                        <a>Home</a>
                                    </div>
                                </Link>
                                
                                <Link href="/roster">
                                    <div className={styles.nav_item} onClick={() => setToggleMenu(false)}>
                                        <Image src={roster} alt={'Roster'} width={320} height={214} objectFit="cover" />
                                        <a>Roster</a>
                                    </div>
                                </Link>

                                <Link href="/weapons">
                                    <div className={styles.nav_item} onClick={() => setToggleMenu(false)}>
                                        <Image src={weapons} alt={'Weapons'} width={320} height={214} objectFit="cover" />
                                        <a>Weapons</a>
                                    </div>
                                </Link>

                                <Link href="/zones">
                                    <div className={styles.nav_item} onClick={() => setToggleMenu(false)}>
                                        <Image src={zone} alt={'Zones'} width={320} height={214} objectFit="cover" />
                                        <a>Zones</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <h2 className={styles.header}>Airsoft Armory</h2>
            </div>

            <Link href="/join">
                <button type="button" onClick={() => setToggleMenu(false)}>Join Us!</button>
            </Link>
        </div>


    );
};

export default Navbar;