import React from "react";
import { Link } from "react-router-dom";
// import rangeSlider from 'range-slider-input';
// import 'range-slider-input/dist/style.css';

export default function Prompt(){
    return (
        <div>
            <h1>Where do you want to go</h1>
            <input type="text" id="location"></input>

            <h2>Budget</h2>
            <input type="text" id="budget"></input>

            <h2>Length in days</h2>
            <input type="text" id="length"></input>

            <h2>Quirkyness</h2>
            <input type="text" id="quirk"></input>

            <h2>Nature</h2>

            <h2>History</h2>

            <h2>Culture</h2>

            <h2>Relaxation</h2>
        </div>
    );
}