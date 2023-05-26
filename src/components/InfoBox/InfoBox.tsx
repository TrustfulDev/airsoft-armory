import styles from './InfoBox.module.css';

export const InfoBox = (props: { title: string, desc: string, icon: React.ElementType }) => {
    return (
        <div className={styles.container}>
            <props.icon className={styles.icon}/>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
};