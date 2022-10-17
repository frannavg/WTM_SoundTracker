import React from "react";
import './Header.scss'

import MusicImage from '../../assets/music_notes.png'

export function Header(){

    return (
        <div className="containerHeader">
            <div className="logowrapper" style={{display:"flex"}}>
                <img className="logoImage" 
                        src={MusicImage}
                        alt="Music Notes"/>
                <div className="logoName">
                    SoundTracker
                </div>
            </div>
        </div>
    )
}