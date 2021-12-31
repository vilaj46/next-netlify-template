import PropTypes from "prop-types";
import React from "react";

// https://www.netlifycms.org/docs/custom-widgets/

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    mainText: PropTypes.node,
    secondaryText: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  };

  static defaultProps = {
    mainText: "",
    secondaryText: "",
  };

  render() {
    const { forID, mainText, secondaryText, onChange, classNameWrapper } =
      this.props;

    return (
      <div>
        <input
          type="text"
          id={forID}
          className={classNameWrapper}
          placeholder="Main Text"
          mainText={mainText || ""}
          onChange={(e) => onChange(e.target.value)}
        />
        <input
          type="text"
          id={forID}
          className={classNameWrapper}
          placeholder="Secondary Text"
          mainText={secondaryText || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
}
