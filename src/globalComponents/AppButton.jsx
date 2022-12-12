import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppButton({ icon, text, onClick, className, disabled, icons, }) {
  return (
    <button
      className={`flex bg-orange border-none px-4 justify-center items-center
                py-3 gap-3 rounded-xl hover:bg-opacity-75
                md:py-5 md:px-8 ${className} cursor-pointer`}
      onClick={onClick}
      disabled={disabled || false}
    >
      <FontAwesomeIcon icon={icons||""} size="xl"/>
      <div
        className="text-b12
                      md:text-b10 lg:text-b9 "
      >
        {" "}
        {text}
      </div>
    </button>
  );
}

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.any,
};

AppButton.defaultProps = {
  text: "default text",
};

export default AppButton;
