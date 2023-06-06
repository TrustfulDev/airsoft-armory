import styles from './zone.module.css';
import Image from "next/image";

import { GiAk47, GiSave, GiStopwatch, GiTreasureMap } from 'react-icons/gi';

async function getZone(id: string) {
    let res = await fetch(`http://localhost:3000/api/zone?zone=${id}`);
    return res.json();
}

const zone = async (props: any) => {
    let zoneData = await getZone(props.searchParams.zone);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image 
                    className={styles.pic}
                    src={zoneData[0].pic}
                    alt="A picture of the arena"
                    fill
                />

                <div className={styles.amenities}>
                    <div>
                        <GiAk47 />
                        Rentals
                    </div>

                    <div>
                        <GiSave />
                        Reservations
                    </div>

                    <div>
                        <GiStopwatch />
                        {zoneData[0].breaktime}hr Break
                    </div>

                    <div>
                        <GiTreasureMap />
                        {zoneData[0].distance}
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <h2>{zoneData[0].location}</h2>
                <h1>{zoneData[0].name}</h1>

                <hr />
                
                <p>{zoneData[0].descr}</p>

                <ul>
                    <li>Price: ${zoneData[0].price}</li>
                    <li>Playtime: {zoneData[0].playtime} hours</li>
                    <li>Rounds: {zoneData[0].rounds} total</li>
                    <li>Size: {zoneData[0].size} square feet</li>
                    <li>Website: <a href={zoneData[0].website} target="_blank" rel="noopener noreferrer">{zoneData[0].website}</a></li>
                </ul>

                <div className={styles.thoughts}>
                    <h3>Our Thoughts</h3>
                    <p>{zoneData[0].thoughts}</p>
                </div>
            </div>
        </div>
    )
}

export default zone;