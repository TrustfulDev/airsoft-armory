import styles from './PlayerCard.module.css';
import Image from "next/image";
import Link from "next/link";

export const PlayerCard = (props: { img: string, alt: string, name: string, tag: string }) => {
    return (
        <Link href={`/team/${props.name.replace(/\s+/g, '')}`} className={styles.container}>
            <Image 
            className={styles.pic}
                src={props.img}
                alt={props.alt}
                fill
                loading="lazy"
            />

            <div className={styles.content}>
                <hr />
                <h1>{props.name}</h1>
                <p>{props.tag}</p>
            </div>
        </Link>
    );
};