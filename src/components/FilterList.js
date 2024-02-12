import React from "react";
import { filtersList } from "../utils/constants";
import FilterButton from "./FilterButton";

const FilterList = () => {
  return (
    <div className=" flex overflow-x-scroll ">
      <div className="p-6 flex gap-2 overflow-x-auto">
        {filtersList.map((filter, index) => (
          <FilterButton filter={filter} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FilterList;

// not owkring
{
  /* <div className=" flex overflow-x-scroll ">
      <div className="p-6 flex gap-2 overflow-x-auto"></div> */
}
