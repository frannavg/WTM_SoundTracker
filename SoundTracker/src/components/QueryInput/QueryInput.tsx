import React, { useState, PropsWithChildren } from "react";
import './QueryInput.scss';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import { json } from "stream/consumers";
import { Card } from "../Card/Card";

export function QueryInput(){
    /*API linkeys*/
    const API_KEY: string = "53f18fdc77538571811fdbb46d965d72";
    var API_QUERY: string = "";
    var q_response: {[key: string]: any} = {};
    var q_track: string[] = [];
    var q_album: string[] = [];
    var q_artist: string[] = [];

    
    /*States*/ 
    const [query, setQuery] = useState(""); 
    const [track, isTrack] = useState(false);
    
    /*Handle Functions*/
    function handleClick(event: any): void {
        event.preventDefault();
        console.log("handleClick called", event, query)
        if (query.length === 0){
            console.log("No query selected");
            toast.error("Please enter a track !");
            return;
        }
        else{
            API_QUERY = query;
            console.log(API_QUERY);
            const API_LINK: string = `https://stproxynavarrete.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${API_QUERY}&s_track_rating=desc&apikey=${API_KEY}`;
            toast.success("Check your results below !");
            axios.get(`${API_LINK}`)
                .then(data => q_response = data.data.message.body.track_list)
                .catch(err => console.log("catch 35", err))
                .finally(() => isTrack(true));
            respFill();
        }
            
    }

    function handleChange(event: any): void {
        event.preventDefault();
        setQuery(event.target.value);
        console.log(query);
    }

    function respFill(): void {
        console.log("q_res:", q_response);
        q_track = []; q_album = [], q_artist = [];

        for (const prop in q_response) {
            console.log(q_response[prop].track);
            /* if (prop == "0") */
            q_track.push(q_response[prop].track.track_name);
            q_album.push(q_response[prop].track.album_name);
            q_artist.push(q_response[prop].track.artist_name);
        }
        console.log(q_track, q_album, q_artist);
    }


    return (
        <div className="containerQuery">
            <ToastContainer/>
            <label className="queryLabel">
                Your Query
                <div className="queryButtonWrapper" style={{display:"flex"}}>
                    <input 
                            className="queryInput"
                            name="inputMusic"
                            type="text"
                            onChange={handleChange}
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
                {track && <Card 
                        key="0"
                        name={q_track[0]}
                        album={q_album[0]}
                        artist={q_artist[0]}
                        >
                </Card>}
            </div>
        </div>
    )
}