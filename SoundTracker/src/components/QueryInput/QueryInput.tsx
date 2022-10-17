import React, { useState, PropsWithChildren } from "react";
import './QueryInput.scss';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import { json } from "stream/consumers";
import { Card } from "../Card/Card";


export type Track = {
    id: number;
    name: string;
    album: string;
    artist: string;
}

export function QueryInput(){
    /*API linkeys*/
    const API_KEY: string = "53f18fdc77538571811fdbb46d965d72";
    var API_QUERY: string = "";

    
    /*States*/ 
    const [query, setQuery] = useState(""); 
    const [content, setContent] = useState<Track[]>([]);
    
    /*Handle Functions*/
    function handleClick(event: any): void {
        event.preventDefault();
        if (query.length === 0){
            toast.error("Please enter a track !");
            return;
        }
        else{
            API_QUERY = query;
            const API_LINK: string = `https://stproxynavarrete.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${API_QUERY}&s_track_rating=desc&apikey=${API_KEY}`;
            toast.success("Check your results below !");
            axios.get(`${API_LINK}`)
                .then((data) => respFill(data.data.message.body.track_list));
        }        
    }

    function handleChange(event: any): void {
        setQuery(event.target.value);
    }

    function handleKeyPress(event: any): void {
        if (event.which === 13)
            handleClick(event);
    }

    function respFill(q_response: []): void {
        let test = q_response.map(({track}: any) => {
            return {
                id: track.track_id,
                name: track.track_name,
                album: track.album_name,
                artist: track.artist_name,
            }
        })
        /* setContent(q_response); */
        setContent(test);
    }

    return (
        <div className="containerQuery">
            <ToastContainer/>
            <label className="queryLabel">
                Your Lyrics
                <div className="queryButtonWrapper" style={{display:"flex"}}>
                    <input 
                            className="queryInput"
                            name="inputMusic"
                            type="text"
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            value={query}
                            autoComplete="off"
                    />
                    <button 
                            className="buttonInput"
                            onClick={handleClick}>
                        Search
                    </button>
                </div>
            </label>
            <div className="track_test">
                {content?.length > 0 && content?.map(el => <Card track={el}/>)}
            </div>
        </div>
    )
}