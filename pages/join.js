import Head from 'next/head';
import FadeIn from 'react-fade-in';

import { ContactCard } from '../components';
import styles from '../styles/Join.module.css';

export default function Join() {
    return (
        <div>
            <Head>
                <title>Join Now!</title>
                <meta name="description" content="Join Biệt Đội e-sốp quần què!" />
            </Head>

            <FadeIn className={styles.container}>
                <h1>Contact Our Admins!</h1>
                <p>Click/tap on one of the admins below to contact them on facebook. They will go through the steps of inviting you into our private facebook group if you are deemed worthy.</p>
                <div className={styles.card_container}>
                    <ContactCard img='/people/phi.jpg' name='Phi Vu' link="https://www.facebook.com/itzphi" />
                    <ContactCard img='/people/justin.jpg' name='Justin Dang' link="https://www.facebook.com/SupItsJustin" />
                    <ContactCard img='/people/steven.jpg' name='Steven Vu' link="https://www.facebook.com/stevenvu123/" />
                </div>
            </FadeIn>
        </div>
    )
}