import React from "react";
import {link} from "react-dom";


function homepage(){

    return(
        <div>
            <h1>
                Saved Trips
            </h1>

            {/* load saved trips from DB I have no idea how to do this rn */}
            {/* this sound maybe even be a seperate function too idk first time using react */}
            <ul>
                <li>tornot to tombstone</li>
                <li>Europe</li>
            </ul>

            <p>
            <link to="/prompting">
                <button>New trip +</button>
            </link>
            </p>


            
        </div>
    )

}