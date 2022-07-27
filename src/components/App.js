import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [allPlants, setAllPlants] = useState([])


  // Deliverable 1
  useEffect( () => 
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then( (arrayOfPlants) => setAllPlants(arrayOfPlants) )
  , [])

  // Deliverable 2: upon submission, "allPlants" needs to change
  function addNewPlant(plantObj){
    setAllPlants([...allPlants, plantObj])
  }

  // Deliverable 4: search capability
  const [search, setSearch] = useState("")

  // a new Array that checks to see if the search term matches/includes any existing descriptions
  // if there is no search term, it's just a copy of allPlants array
  const searchedPlants = (allPlants.filter( (plant) => plant.name.toLowerCase().includes(search.toLowerCase())))
  

  return (
    <div className="app">
      <Header />
      <PlantPage 
        allPlants={searchedPlants}
        addNewPlant={addNewPlant}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
