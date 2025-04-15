import React from "react";

function Filter({ onCategoryChange }) {
  // Handler to call when the user changes the dropdown selection
  function handleCategoryChange(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        {/* Add more categories as necessary */}
      </select>
    </div>
  );
}

export default Filter;
