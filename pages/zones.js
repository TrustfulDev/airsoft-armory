import Head from 'next/head';
import { Zone } from '../components';
import FadeIn from 'react-fade-in';
import styles from '../styles/Zones.module.css';

export default function Zones() {
    return (
        <div>
            <Head>
                <title>Airsoft Zones</title>
                <meta name="description" content="Biệt Đội e-sốp quần què Zones" />
            </Head>

            <FadeIn className={styles.container}>
                <Zone 
                    name='Gamepod Combat Zone'
                    address='1400 W 4th St #2, Antioch, CA 94509'
                    thoughts='Gamepod combat zone is by far our favorite indoor airsoft arena. This place is gigantic, which allows us to move freely. There aren&apos;t many limitations to where and how you can approach your enemies; thus, it allows for unique engagements every time. Do note that this arena is very dark.'
                    desc={['Game Amount: ~4 Games', 'Game Lengths: ~30min', 'Fully detailed map provided']}
                    website='https://combatzonecqc.com/'
                    img='/gamepod.jpg'
                />
                <Zone
                    name='CQB City'
                    address='3200 E 8 Mile Rd, Stockton, CA 95212'
                    thoughts='CQB city lives up to its name as almost every engagement is within spitting distance. The place seems very limited in pathing as there are only three choices you can take: Within the kill house, the middle, or the far lane near the 2nd story building. Games start to get stale due to the lack of uniqueness in pathing. Overall, this place seems like a perfect place for speedsofters or private parties to spice things up.'
                    desc={['Game Amount: ~3 Games', 'Game Lengths: ~35min', 'No updated map as of 2022']}
                    website='http://www.cqbcity.com/'
                    img='/cqbCity.jpg'
                />
                <Zone
                    name='Backyard Firing Range'
                    address='Anyone&apos;s Backyard'
                    thoughts='Parties equal shooting range for us. Bring your guns, bring some targets, and go ham in the backyard! We are airsoft enthusiasts who take the sport seriously but still mess around when the time comes.'
                    desc={['Drinks', 'Food', 'People', 'A whole lotta guns']}
                    img='/backyard.jpg'
                />
            </FadeIn>
        </div>
    )
}