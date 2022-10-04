import React from "react";
import './QueryInput.scss';

export function QueryInput(){

/*     function onInputchange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      } */

    return (
        <div className="containerQuery">
            <label className="queryLabel">
                Your Query
                <input 
                        className="queryInput"
                        name="inputMusic"
                        type="text"
                />
            </label>
            <button >Search</button>
        </div>
    )
}