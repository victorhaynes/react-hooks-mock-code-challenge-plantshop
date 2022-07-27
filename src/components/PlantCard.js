import React, {useState} from "react";

function PlantCard({name, image, price, id}) {

  // Deliverable 3
  // Watch button clicks
  const [inStock, setInStock] = useState(true)

  // onClick handler - set stock / set inStock
  function handleClick(){
    setInStock( (inStock) => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
