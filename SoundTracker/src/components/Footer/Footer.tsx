import './Footer.scss'

export function Footer(){
    return (
        <div className="containerFooter">
            <div className="contLat">
                SoundTracker <br/>
                Francisco Navarrete <br/>
            </div>
            <div className="contLat">
                <a href="https://www.github.com/frannavg" className="fa fa-github"></a> <br/>
                <a href="https://www.instagram.com/navarrete.zip/" className="fa fa-instagram"></a>
            </div>
        </div>
    )
}