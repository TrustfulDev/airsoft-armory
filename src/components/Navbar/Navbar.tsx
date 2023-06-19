"use client";
import styles from './Navbar.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from 'react';
import { GrInstagram, GrTwitter } from 'react-icons/gr';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

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
                    className={pathname === "/" ? `${styles.active}` : ''}
                >
                    Home
                </Link>

                <Link 
                    href="/Team" 
                    className={pathname === "/Team" ? `${styles.active}` : ''}
                >
                    Team
                </Link>

                <Link 
                    href="/Learn" 
                    className={pathname === "/Learn" ? `${styles.active}` : ''}
                >
                    Learn
                </Link>

                <Link 
                    href="/Zones" 
                    className={pathname === "/Zones" ? `${styles.active}` : ''}
                >
                    Zones
                </Link>

                <Link 
                    href="/Contact" 
                    className={pathname === "/Contact" ? `${styles.active}` : ''}
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