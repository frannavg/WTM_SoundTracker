import './Footer.scss'

export function Footer(){
    return (
        <div className="containerFooter">
            <div className="contLat">
                SoundTracker <br/>
                Francisco Navarrete <br/>
            </div>
            <div className="contLat">
                <a href="#" className="fa fa-github"></a> <br/>
                <a href="#" className="fa fa-instagram"></a>
            </div>
        </div>
    )
}