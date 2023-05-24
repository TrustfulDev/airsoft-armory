"use client";
import styles from './Navbar.module.css';
import Link from "next/link";

import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let mainElement = document.getElementById("main");
        open ? mainElement?.classList.add("blur") : mainElement?.classList.remove("blur");
    }, [open]);

    return (
        <header className={styles.header}>
            <h1>Toy Soldiers</h1>

            <nav className={ open ? styles.open : styles.close }>
                <Link 
                    href="/" 
                    className={ active === 0 ? styles.active : "" }
                    onClick={() => {
                        setActive(0);
                        if (open) setOpen(false);
                    }}
                >
                    Home
                </Link>

                <Link 
                    href="/" 
                    className={ active === 1 ? styles.active : "" }
                    onClick={() => {
                        setActive(1);
                        if (open) setOpen(false);
                    }}
                >
                    Team
                </Link>

                <Link 
                    href="/" 
                    className={ active === 2 ? styles.active : "" }
                    onClick={() => {
                        setActive(2);
                        if (open) setOpen(false);
                    }}
                >
                    Learn
                </Link>

                <Link 
                    href="/" 
                    className={ active === 3 ? styles.active : "" }
                    onClick={() => {
                        setActive(3);
                        if (open) setOpen(false);
                    }}
                >
                    Zones
                </Link>

                <Link 
                    href="/" 
                    className={ active === 4 ? styles.active : "" }
                    onClick={() => {
                        setActive(4);
                        if (open) setOpen(false);
                    }}
                >
                    Contact
                </Link>
            </nav>

            <div className={styles.icons}>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
            </div>

            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={ open ? `${styles.hamLines} ${styles.firstLine}` : styles.hamLines }></div>
                <div className={ open ? `${styles.hamLines} ${styles.secLine}` : styles.hamLines }></div>
                <div className={ open ? `${styles.hamLines} ${styles.thirdLine}` : styles.hamLines }></div>
            </div>
        </header>
    )
}