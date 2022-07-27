import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function NewPlantForm({addNewPlant}) {

  // Initialize state for form
  // setup state as an object
  const [userInput, setUserInput] = useState({
    name: "",
    image: "",
    price: null,
    id: uuid()
  })

  // onChange handler
  function handleChange(event){
    setUserInput(
      {...userInput,
      [event.target.name]: event.target.value})
  }

  // onSubmit handler
  function handleSubmit(event){
    event.preventDefault()
    addNewPlant(userInput)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* onSubmit handler for the form itself */}
      <form onSubmit={handleSubmit}>
        {/* onChange handler for the inputs*/}
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
