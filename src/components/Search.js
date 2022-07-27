import React from "react";

function Search({setSearch}) {

  function handleInput(event){
    setSearch(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        // onChange & handler for the search bar
        onChange={handleInput}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
