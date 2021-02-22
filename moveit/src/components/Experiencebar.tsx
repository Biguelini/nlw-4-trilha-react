export function Experiencebar(){
    return(
        <header className="experience-bar">
            <span>0Xp</span>
                <div>
                    <div style={{ width: '50%' }}/>
                    <span className="currrent-experience" style={{ left: '50%' }}>
                        300Xp
                    </span>
                </div>
            <span>600Xp</span>
        </header>
    );
}