import styles from '../styles/components/ExperienceBar.module.css';

export function Experiencebar(){
    return(
        <header className={styles.experienceBar}>
            <span>0Xp</span>
                <div>
                    <div style={{ width: '50%' }}/>
                    <span className={styles.currentExperience} style={{ left: '50%' }}>
                        300Xp
                    </span>
                </div>
            <span>600Xp</span>
        </header>
    );
}