import Image from 'next/image';
import Head from 'next/head';
import { rosterData } from '../../rosterData';
import styles from '../../styles/Person.module.css';
import FadeIn from 'react-fade-in';

export const getStaticPaths = async () => {
    const paths = rosterData.map((curr) => ({
      params: { person: curr.key.toString() },
    }));
  
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const rosterList = rosterData.filter((p) => p.key.toString() === params.person);
    
    return {
      props: {
        roster: rosterList[0],
      },
    };
  };



const Person = ({ roster }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{roster.name}</title>
                <meta name="description" content={"Biệt Đội e-sốp quần què " + roster.name} />
            </Head>
            <FadeIn transitionDuration={500} delay={200} className={styles.left}>
                <div className={styles.image_container}>
                    <Image src={roster.img} alt={roster.name} layout='fill' objectFit='cover'/>
                </div>
                <h1>{ roster.name }</h1>
                <h2>{ roster.status }</h2>
            </FadeIn>
            <div className={styles.right}>
                <FadeIn transitionDuration={1000} delay={400} className={styles.weapons}>
                    <div className={styles.primary} style={{ backgroundImage: `url(${roster.primary})`}}>
                        <h4>Primary</h4>
                    </div>
                    <div className={styles.sidearm} style={{ backgroundImage: `url(${roster.sidearm})`}}>
                        <h4>Sidearm</h4>
                    </div>
                </FadeIn>
                <FadeIn transitionDuration={1200} delay={200} className={styles.mags}>
                    <p>0.25g BBs</p>
                    <p>0.25g BBs</p>
                    <p>0.25g BBs</p>
                    <p>0.25g BBs</p>
                </FadeIn>
                <FadeIn transitionDuration={1000} delay={400} className={styles.gear}>
                    <div className={styles.headwear} style={{ backgroundImage: `url(${roster.head})`}}>
                        <h4>Headwear</h4>
                    </div>
                    <div className={styles.chest} style={{ backgroundImage: `url(${roster.chest})`}}>
                        <h4>Chest Piece</h4>
                    </div>
                    <div className={styles.accessories}>
                        <div className={styles.equipment1} style={{ backgroundImage: `url(${roster.accessory1})`}}>
                            <h4>Equipment 1</h4>
                        </div>
                        <div className={styles.equipment2} style={{ backgroundImage: `url(${roster.accessory2})`}}>
                            <h4>Equipment 2</h4>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Person;