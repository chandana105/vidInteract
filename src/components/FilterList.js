import React from "react";
import { filtersList } from "../utils/constants";

const FilterList = () => {
  return (
    <div className=" flex overflow-x-scroll ">
      <div className="p-6 flex gap-2 overflow-x-auto">
        {filtersList.map((filter, index) => (
          <button
            className="rounded-xl border-2  py-1  px-5 bg-slate-200"
            key={index}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterList;

// not owkring
{/* <div className=" flex overflow-x-scroll ">
      <div className="p-6 flex gap-2 overflow-x-auto"></div> */}
