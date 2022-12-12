import React from "react";

function PageTitle({ title, className }) {
  const titlePage = (title ?? "Default Page Title").toUpperCase();
  return (
    <div className={`flex justify-center items-center m-2 ${className}`}>
      <img
        src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
        alt=""
        className="w-[20px] md:w-[40px]"
      />
      <h1
        className="text-b10 text-orange
                    md:text-h3
                    lg:text-h2"
      >
        {titlePage}
      </h1>
      <img
        src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
        alt=""
        className="w-[20px] md:w-[40px]"
      />
    </div>
  );
}

export default PageTitle;
