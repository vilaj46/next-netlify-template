import React from "react";
import PropTypes from "prop-types";

function CustomTextPreview({ value }) {
  return <div>{value}</div>;
}

CustomTextPreview.propTypes = {
  value: PropTypes.node,
};

export default CustomTextPreview;
