import styles from './Lesson.module.css';
import Image from "next/image";

export const Lesson = (props: { img: string, alt: string, title: string, num: string, headers: Array<String>, details: Array<String> }) => {
    
    return (
        <section className={styles.container}>
            <div className={styles.picBox}>
                <Image 
                    className={styles.pic}
                    src={props.img} 
                    alt={props.alt} 
                    fill
                    loading="lazy"
                />
            </div>

            <div className={styles.info}>
                <h1>{props.title} <span>{props.num}</span></h1>
                
                <div className={styles.infoGrid}>
                    <div>
                        <h2>{props.headers[0]}</h2>
                        <p>{props.details[0]}</p>
                    </div>

                    <div>
                        <h2>{props.headers[1]}</h2>
                        <p>{props.details[1]}</p>
                    </div>

                    <div>
                        <h2>{props.headers[2]}</h2>
                        <p>{props.details[2]}</p>
                    </div>

                    <div>
                        <h2>{props.headers[3]}</h2>
                        <p>{props.details[3]}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}