"use client"
import styles from './PlayerCard.module.css';
import Image from "next/image";
import Link from "next/link";
import { BarReveal } from "@/utils/Reveal";

export const PlayerCard = (props: { id: number, img: string, alt: string, name: string, tag: string }) => {
    return (
        <BarReveal delay={(props.id-100) * 0.1}>
            <div className={styles.container}>
                <Link
                    href={{ pathname: `/team/${props.name.replace(/\s+/g, '')}`, query: { member: props.id }} }
                >

                        <Image 
                            className={`${styles.pic} loadingImg`}
                            src={props.img}
                            alt={props.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onLoadingComplete={(image) => image.classList.remove("loadingImg")}
                        />

                        <div className={styles.content}>
                            <hr />
                            <h1>{props.name}</h1>
                            <p>{props.tag}</p>
                        </div>

                </Link>
            </div>
        </BarReveal>
    );
};