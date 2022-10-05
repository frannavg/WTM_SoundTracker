import React, { useState } from "react";
import './QueryInput.scss';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";

export function QueryInput(){
    /*API linkeys*/
    const API_KEY: string = "53f18fdc77538571811fdbb46d965d72";
    
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
            toast.success("Check your results below !");
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