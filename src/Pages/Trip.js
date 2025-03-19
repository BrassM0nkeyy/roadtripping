import React from "react";
import { Link } from "react-router-dom";

//will be made from maps (leaflet) and then stuff from chat gpt

import MapComponent from "./Map.js";
import ItineraryComponent  from "./Itinerary.js";

const Trip = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Rendering Multiple Components</h1>
      <MapComponent />
      <ItineraryComponent />
    </div>
  );
};

export default Trip;

