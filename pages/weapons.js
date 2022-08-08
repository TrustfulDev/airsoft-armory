import Head from 'next/head';
import FadeIn from 'react-fade-in';
import styles from '../styles/Weapons.module.css';

import { rosterData } from '../rosterData';
import { Carousel } from '../components';

export const getStaticProps = async () => {
    return {
        props: { group: rosterData }
    }
}

export default function Weapons({ group }) {

    return(
        <div className={styles.container}>
            <Head>
                <title>Airsoft Weapons</title>
                <meta name="description" content="Biệt Đội e-sốp quần què Weapons" />
            </Head>

            <FadeIn transitionDuration={500} delay={100} className={styles.fade}>
                <Carousel title='Primary' data={group} type='primary' />
                
                <Carousel title='Secondary' data={group} type='sidearm' />
            </FadeIn>
        </div>
    )
}