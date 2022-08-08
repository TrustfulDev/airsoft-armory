import Head from 'next/head';
import Link from 'next/link';
import FadeIn from 'react-fade-in';

import { rosterData } from '../../rosterData';
import styles from '../../styles/Roster.module.css';

export const getStaticProps = async () => {
    return {
        props: { group: rosterData }
    }
}

const Roster = ({ group }) => {
    return (
        <div className={styles.bg}>
            <Head>
                <title>Airsoft Roster</title>
                <meta name="description" content="Biệt Đội e-sốp quần què Roster" />
            </Head>

            <FadeIn transitionDuration={500} delay={200} className={styles.container}>
                <h1>ROSTER</h1>
                <div className={styles.people}>
                    {group.map(person => (
                        <Link href={'/roster/' + person.key} key={person.key}>
                            <div className={styles.cardOutline}>
                                <div className={styles.card} style={{ backgroundImage: `url(${person.img})`}} ></div>
                                <h4>{person.name}</h4>
                                <p>{person.status}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </FadeIn>
            <p className={styles.update}>Last Updated: 7/27/2022</p>
        </div>
    )
}

export default Roster;

// https://medium.com/swlh/next-js-usestaticprops-usestaticpaths-static-json-data-9f7903b8a5aa