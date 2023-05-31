import styles from './team.module.css';
import { PlayerCard } from "@/components";

const team = () => {
    return (
        <div className={styles.container}>
            <PlayerCard 
                img="/static/members/andy.webp"
                alt="Andy - Puresins"
                name="Andy Ngo"
                tag="@puresins101"
            />
        </div>
    );
};

export default team;