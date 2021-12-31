import PropTypes from "prop-types";
import React from "react";

// https://www.netlifycms.org/docs/custom-widgets/#advanced-field-validation

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  };

  static defaultProps = {
    value: {
      one: "",
      two: "",
    },
  };

  state = {
    ...this.props.value,
  };

  inputChange = (e) => {
    const newValue = e.target.value;
    const { name } = e.target;

    const { value, onChange } = this.props;

    const temp = { ...value };
    temp[name] = newValue;

    this.setState({
      ...this.state,
      [name]: newValue,
    });

    onChange(JSON.stringify(temp));
  };

  render() {
    const { forID, value, onChange, classNameWrapper } = this.props;

    const { one } = this.state;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={one || ""}
        name="one"
        onChange={(e) => this.inputChange(e)}
        // onChange={(e) => onChange(e.target.value)}
      />
    );
  }
}
