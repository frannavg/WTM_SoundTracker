import React from "react";

export function Card(props: {key: string; name: string; 
        artist: string; album: string; children: React.ReactNode}){
    
    console.log("LOG CARD", props.key, props.name, props.artist, props.album);
    
    return (
        <div className="containerCard">
            Card: {props.key} +
                  {props.name} + 
                  {props.artist} + 
                  {props.album}
        </div>
    )
}