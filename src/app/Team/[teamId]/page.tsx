import styles from './member.module.css';
import Image from "next/image";
import { Skills } from "@/components";

import { GiRank1, GiRank2, GiRank3, GiAk47, GiKingJuMask, GiNinjaHeroicStance } from 'react-icons/gi';

const member = ({ params } : { params: { teamId: string }}) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.light}></div>
                <Image 
                    className={styles.pic}
                    src="/static/members/andy.webp"
                    alt="Andy"
                    fill
                    loading="lazy"
                />
            </div>

            <div className={styles.right}>
                <div className={styles.banner}>
                    <GiRank3 className={styles.rank}/>
                    
                    <div className={styles.attributes}>
                        <GiAk47 />
                        AEG
                    </div>
                    
                    <div className={styles.attributes}>
                        <GiKingJuMask />
                        Fearless
                    </div>

                    <div className={styles.attributes}>
                        <GiNinjaHeroicStance />
                        Stealth
                    </div>
                </div>

                <div className={styles.details}>
                    <div>
                        <h1>{params.teamId}</h1>
                        <h3>@puresins101</h3>
                    </div>

                    <hr />

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis similique et itaque, laudantium rem libero provident nisi accusamus adipisci explicabo quaerat nemo corporis amet, voluptatem atque tempora ratione vitae.</p>
                    
                    <Skills />

                    <div className={styles.gears}>
                        <div className={styles.gear}>
                            <h2>Primary: AK47</h2>
                            <hr />
                        </div>

                        <div className={styles.gear}>
                            <h2>Seconday: USP-S</h2>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default member;