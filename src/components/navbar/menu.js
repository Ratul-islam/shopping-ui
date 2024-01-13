import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-col justify-between h-4 w-4   place-items-center cursor-pointer group">
      <div className="flex justify-between w-full">
        <div className="transition-all group-hover:w-12 w-1 h-1 bg-white rounded-full group-hover:rounded-e-none"></div>
        
        <div className="transition-all group-hover:w-12 w-1 h-1 bg-white rounded-full group-hover:rounded-s-none"></div>
      </div>

      <div className="flex justify-between w-full">
        <div className="transition-all group-hover:w-12 w-1 h-1 bg-white rounded-full group-hover:rounded-e-none"></div>
        
        <div className="transition-all group-hover:w-12 w-1 h-1 bg-white rounded-full group-hover:rounded-s-none"></div>
      </div>
    </div>

    
  );
};

export default Menu;
