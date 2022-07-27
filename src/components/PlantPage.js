import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({allPlants, addNewPlant, setSearch}) {
  return (
    <main>
      <NewPlantForm
        addNewPlant={addNewPlant}
      />
      <Search
        setSearch={setSearch}
      />
      <PlantList
        allPlants={allPlants}
      />
    </main>
  );
}

export default PlantPage;
