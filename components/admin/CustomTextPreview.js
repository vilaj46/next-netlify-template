import PropTypes from "prop-types";
import React from "react";

export default function Preview({ mainText, secondaryText }) {
  return (
    <div>
      <p>{mainText}</p>
      <p>{secondaryText}</p>
    </div>
  );
}

Preview.propTypes = {
  mainText: PropTypes.node,
  secondaryText: PropTypes.node,
};
