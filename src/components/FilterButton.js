import React from "react";

const FilterButton = ({ filter, index }) => {
  return (
    <button
      className="rounded-xl border-2  py-1  px-5 bg-slate-200"
      key={index}
    >
      {filter}
    </button>
  );
};

export default FilterButton;
