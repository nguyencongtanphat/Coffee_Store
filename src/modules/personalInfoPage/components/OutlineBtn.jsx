import React from "react";

// Outline Button
function OutlineBtn(props) {
  return (
    <button
      onClick={props.onClick}
      className={`flex bg-[#FAFAFA] text-orange hover:bg-orange hover:text-white cursor-pointer px-4 justify-center
                            py-3 gap-3 rounded-xl
                            md:py-5 md:px-8 border-1 border-solid border-orange w-[60%] mb-10 mt-5`}
    >
      <div
        className="text-b12 
                                md:text-b10 lg:text-b9"
      >
        {props.title}
      </div>
    </button>
  );
}

export default OutlineBtn;
