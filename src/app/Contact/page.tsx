import styles from './contact.module.css';
import { InfoBox } from "@/components";

import { BsYinYang, BsPersonFillCheck } from 'react-icons/bs';
import { FaHandshake, FaBookDead } from 'react-icons/fa';

const contact = () => {
    return (
        <section className={styles.container}>
            <div className={styles.boxes}>
                <InfoBox title="Equality" desc="We are all airsofters regardless of our backgrounds." icon={BsYinYang} />
                <InfoBox title="Helpful" desc="Don't be shy! We'd be happy to help you with airsoft." icon={FaBookDead} />
                <InfoBox title="Respectful" desc="Sportsmanship is key. Treat one another like family." icon={FaHandshake} />
                <InfoBox title="Trustworthy" desc="Everyone on this team has years of airsoft experience." icon={BsPersonFillCheck} />
            </div>

            <div className={styles.info}>
                <h1>Enlist in the best Bay Area Airsoft Group</h1>
                <p>No matter what you may want to say or ask, don&#39;t be afraid to shoot us an email! You can find our socials below, but we&#39;ll primarily be using email as the form of contact.</p>
                <button className="button">Email Us</button>

                <div className={styles.follow}>
                    <h2>Follow Us</h2>

                    <div className={styles.icons}>
                        <div className={styles.temp}></div>
                        <div className={styles.temp}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;