"use client";
import styles from './Navbar.module.css';
import Link from "next/link";

import { useState, useEffect } from 'react';
import { GrInstagram, GrTwitter } from 'react-icons/gr';

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let mainElement = document.getElementById("main");
        let footerElement = document.getElementById("footer");
        if (open) {
            mainElement?.classList.add("blur");
            footerElement?.classList.add("blur");
         } else {
            mainElement?.classList.remove("blur");
            footerElement?.classList.remove("blur");
         }
    }, [open]);

    return (
        <header className={styles.container}>
            <Link 
                href="/" 
                className={styles.logo}
            >
                Toy Soldiers
            </Link>

            <nav className={ open ? styles.open : styles.close }>
                <Link 
                    href="/" 
                >
                    Home
                </Link>

                <Link 
                    href="/team" 
                >
                    Team
                </Link>

                <Link 
                    href="/learn" 
                >
                    Learn
                </Link>

                <Link 
                    href="/zones" 
                >
                    Zones
                </Link>

                <Link 
                    href="/contact" 
                >
                    Contact
                </Link>
            </nav>

            <div className={styles.icons}>
                <GrTwitter size={35} className={styles.circles} />
                <GrInstagram size={35} className={styles.circles} />
            </div>

            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={ open ? `${styles.hamLines} ${styles.firstLine}` : styles.hamLines }></div>
                <div className={ open ? `${styles.hamLines} ${styles.secLine}` : styles.hamLines }></div>
                <div className={ open ? `${styles.hamLines} ${styles.thirdLine}` : styles.hamLines }></div>
            </div>
        </header>
    )
}