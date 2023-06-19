import styles from './team.module.css';
import { PlayerCard } from "@/components";

async function getMembers() {
    let res = await fetch(`https://airsoft-armory.vercel.app//api/members`);
    return res.json();

    // let res = await import("../api/members/route");

    // return await (await res.GET()).json();
}

export default async function Page() {
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