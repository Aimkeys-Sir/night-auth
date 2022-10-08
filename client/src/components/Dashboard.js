export default function Dashboard(player){
    return(
        <div className='bar'>
                <div style={{ position: "relative" }}>
                    <img className="profile-small" src="/pictures/profile.png" alt="prof pic" />
                    <img id="profile-hud-small" src="/pictures/hud.png" alt=''/>
                    <h3 style={{margin:"0px"}}>{player.callsign} </h3>
                </div>
        </div>
    )
}