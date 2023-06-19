import styles from './404.module.css';

export default function NotFound() {
    return(
        <div className={styles.container}>
            <h1>Oops!</h1>
            <p>It seems like this page does not exist!</p>
        </div>
    )
}