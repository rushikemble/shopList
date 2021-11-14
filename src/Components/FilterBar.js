import React, { useState } from "react";

function FilterBar({
  filterByArea,
  filterbycategory,
  areaData,
  categoryData,
  resetAllData,
  filterByStatus,
}) {
  const [filters, setFilters] = useState({
    area: "",
    category: "",
    status: "",
  });

  const handleInput = (name) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [name]: value,
    });

    switch (name) {
      case "area":
        filterByArea(value);
        break;
      case "category":
        filterbycategory(value);
        break;
      case "status":
        filterByStatus(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="filters-w">
      <div className="filter-w-first">
        <div className="area-filter">
          <div className="filter-label">Area</div>
          <select
            name="area"
            id="area"
            onChange={handleInput("area")}
            className="filter-selector"
          >
            <option value="Select">Select</option>
            {areaData.map((area) => {
              return (
                <option value={area} key={area}>
                  {area}
                </option>
              );
            })}
          </select>
        </div>
        <div className="category-filter">
          <div className="filter-label">Category</div>
          <select
            name="category"
            onChange={handleInput("category")}
            className="filter-selector"
          >
            <option value="Select">Select</option>
            {categoryData.map((categoryName) => {
              return (
                <option
                  value={categoryName}
                  key={categoryName}
                  name={categoryName}
                >
                  {categoryName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="filter-w-second">
        <select
          name="status"
          className="filter-selector"
          onChange={handleInput("status")}
        >
          <option value="Select">Select</option>
          <option value="Open">Open</option>
          <option value="Close">Close</option>
        </select>
        <button onClick={resetAllData} className="btn reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
