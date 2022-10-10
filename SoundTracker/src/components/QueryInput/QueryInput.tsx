import React, { useState } from "react";
import './QueryInput.scss';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";

/*var corsAnywhere = require("cors-anywhere")

import { createServer } from "cors-anywhere";

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 5173;

createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie", "cookie2"]
}).listen(port, host, function () {
  console.log("Running CORS Anywhere on " + host + ":" + port);
}); */

export function QueryInput(){
    /*API linkeys*/
    const API_KEY: string = "53f18fdc77538571811fdbb46d965d72";
    const API_QUERY: string = "fighting%20for%20%peace";
    
    /*States*/ 
    const [query, setQuery] = useState("");
    
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
            const API_LINK: string = `https://soundtrackerproxy.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${API_QUERY}&s_track_rating=desc&apikey=${API_KEY}`;
            toast.success("Check your results below !");
            axios.get(`${API_LINK}`)
                .then(data => {console.log(data)})
        }
            
    }

    function handleChange(event: any): void {
        event.preventDefault();
        setQuery(event.target.value);
        console.log(query);
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
        </div>
    )
}