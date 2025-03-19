import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
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
            <Link to="/prompt">
                <button>New trip +</button>
            </Link>
            </p>
        </div>
    )
}

