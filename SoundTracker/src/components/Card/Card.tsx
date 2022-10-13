import React from "react";
import {Track} from "../QueryInput/QueryInput"
import "./Card.scss"

type Props = {
    track: Track;
}

export function Card(props: Props){
    const {track} = {...props}
    
    console.log("LOG CARD", track.name, track.artist, track.album, track.id);
    
    return (
        <div className="containerCard">
            Name: {track?.name} <br/>
            Artista: {track?.artist} <br/>
            Album: {track?.album}
        </div>
    )
}