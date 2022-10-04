import React from "react";
import './Header.scss'

export function Header(){

    return (
        <div className="containerHeader">
            <div className="logowrapper" style={{display:"flex"}}>
                <img className="logoImage" 
                        src="src/assets/music_notes.png"
                        alt="Music Notes"/>
                <div className="logoName">
                    SoundTracker
                </div>
            </div>
        </div>
    )
}