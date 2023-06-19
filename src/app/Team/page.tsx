import styles from './team.module.css';
import { PlayerCard } from "@/components";

async function getMembers() {
    let res = await fetch(`/api/members`);
    return res.json();
}

const team = async () => {
    let members = await getMembers();

    return (
        <div className={styles.container}>
            {
                members.map((e:any, index: number) => {
                    return (
                        <PlayerCard 
                            id={e.memberid}
                            img={e.pic}
                            alt="A playercard"
                            name={e.name}
                            tag={e.tag}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
};

export default team;