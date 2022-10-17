import React from "react";
import {Track} from "../QueryInput/QueryInput"
import "./Card.scss"

type Props = {
    track: Track;
}

export function Card(props: Props){
    const {track} = {...props}
        
    return (
        <div className="containerCard">
            {track?.name.slice(0,50)} <br/>
            {track?.artist.slice(0,50)} <br/>
            {track?.album.slice(0, 50)}
        </div>
    )
}