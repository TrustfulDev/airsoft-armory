import styles from './member.module.css';
import Image from "next/image";
import { Skills } from "@/components";

import { GiRank1, GiRank2, GiRank3, GiAk47, GiCowled, GiKingJuMask, GiNinjaHeroicStance, GiRunningNinja } from 'react-icons/gi';

async function getMember(id: string) {
    let res = await fetch(`http://localhost:3000/api/member?member=${id}`);
    return res.json();
}

const member = async (props: any) => {
    let memberData = await getMember(props.searchParams.member);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.light}></div>
                <Image 
                    className={styles.pic}
                    src={memberData[0].pic}
                    alt={memberData[0].name}
                    fill
                />
            </div>

            <div className={styles.right}>
                <div className={styles.banner}>
                    { (memberData[0].rank === 3 && <GiRank3 className={styles.rank}/>)
                        || (memberData[0].rank === 2 && <GiRank2 className={styles.rank}/>)
                        || (memberData[0].rank === 1 && <GiRank1 className={styles.rank}/>)
                    }
                    
                    <div className={styles.attributes}>
                        <GiAk47 />
                        {memberData[0].guntype}
                    </div>
                    
                    <div className={styles.attributes}>
                        { memberData[0].cautious ? <GiCowled /> : <GiKingJuMask /> }
                        { memberData[0].cautious ? 'Cautious' : 'Fearless' }
                    </div>

                    <div className={styles.attributes}>
                        { memberData[0].stealth ? <GiNinjaHeroicStance /> : <GiRunningNinja /> }
                        { memberData[0].stealth ? 'Stealth' : 'Rusher' }
                    </div>
                </div>

                <div className={styles.details}>
                    <div>
                        <h1>{memberData[0].name}</h1>
                        <h3>{memberData[0].tag}</h3>
                    </div>

                    <hr />

                    <p>{memberData[0].descr}</p>
                    
                    <Skills 
                        agility={String(memberData[0].agility/10 * 100)} 
                        endurance={String(memberData[0].endurance/10 * 100)} 
                        marksmanship={String(memberData[0].marksmanship/10 * 100)} 
                        perception={String(memberData[0].perception/10 * 100)} 
                    />

                    <ul className={styles.gear}>
                        <li><span>Primary:</span> {memberData[0].primarygun}</li>
                        <li><span>Secondary:</span> {memberData[0].secondarygun}</li>
                        <li><span>Eye Protection:</span> {memberData[0].eye}</li>
                        <li><span>Rig/Vest:</span> {memberData[0].rig}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default member;