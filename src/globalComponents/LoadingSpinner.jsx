import React from 'react'
import { ColorRing } from "react-loader-spinner";

function LoadingSpinner({className}) {
  return (
    <div
      className={` z-50 w-screen h-screen fixed top-0 bg-black bg-opacity-75 flex justify-center items-center ${className}`}
    >
      <ColorRing />
    </div>
  );
}

export default LoadingSpinner