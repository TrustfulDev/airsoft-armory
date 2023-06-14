import styles from './PlayerCard.module.css';
import Image from "next/image";
import Link from "next/link";

export const PlayerCard = (props: { id: number, img: string, alt: string, name: string, tag: string }) => {
    return (
        <Link className={styles.container}
            href={{ pathname: `/team/${props.name.replace(/\s+/g, '')}`, query: { member: props.id }} }
        >
            <Image 
            className={styles.pic}
                src={props.img}
                alt={props.alt}
                fill
            />

            <div className={styles.content}>
                <hr />
                <h1>{props.name}</h1>
                <p>{props.tag}</p>
            </div>
        </Link>
    );
};