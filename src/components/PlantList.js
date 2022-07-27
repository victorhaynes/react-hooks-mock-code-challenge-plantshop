import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants}) {
  return (
    <ul className="cards">{allPlants.map( (plant) => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/> )}</ul>
  );
}

export default PlantList;
