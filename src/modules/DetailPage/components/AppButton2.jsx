import React from "react";
import PropTypes from "prop-types";
function AppButton2({ icon, text, onClick, className, isActive }) {
  return (
    <button
      className={`  flex ${
        isActive ? "bg-beige border-brown text-brown" : "text-gray-400"
      } border-gray-400 border-solid px-4 justify-center
                py-3 gap-3 rounded-xl
                md:py-4 md:px-6 ${className} hover:bg-beige cursor-pointer hover:border-brown hover:text-brown`}
      onClick={onClick}
    >
      <div
        className=" text-12
                      md:text-b10 lg:text-b9 "
      >
        {" "}
        {text}
      </div>
    </button>
  );
}

AppButton2.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.any,
};

AppButton2.defaultProps = {
  text: "default text",
};

export default AppButton2;
