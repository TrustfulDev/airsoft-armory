"use client"
import styles from './Lesson.module.css';
import Image from "next/image";
import { BarReveal } from "@/utils/Reveal";

export const Lesson = (props: { img: string, alt: string, title: string, num: string, headers: Array<String>, details: Array<String> }) => {
    
    return (
        <section className={styles.container}>
            <div className={styles.picBox}>
                <Image 
                    className={`${styles.pic} loadingImg`}
                    src={props.img} 
                    alt={props.alt} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={(image) => image.classList.remove("loadingImg")}
                />
            </div>

            <div className={styles.info}>
                <BarReveal delay={0}><h1>{props.title} <span>{props.num}</span></h1></BarReveal>
                
                <div className={styles.infoGrid}>
                    <div>
                        <BarReveal delay={0}><h2>{props.headers[0]}</h2></BarReveal>
                        <BarReveal delay={0}><p>{props.details[0]}</p></BarReveal>
                    </div>

                    <div>
                        <BarReveal delay={0}><h2>{props.headers[1]}</h2></BarReveal>
                        <BarReveal delay={0}><p>{props.details[1]}</p></BarReveal>
                    </div>

                    <div>
                        <BarReveal delay={0}><h2>{props.headers[2]}</h2></BarReveal>
                        <BarReveal delay={0}><p>{props.details[2]}</p></BarReveal>
                    </div>

                    <div>
                        <BarReveal delay={0}><h2>{props.headers[3]}</h2></BarReveal>
                        <BarReveal delay={0}><p>{props.details[3]}</p></BarReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}