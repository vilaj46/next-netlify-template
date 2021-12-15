import React from "react";
import PropTypes from "prop-types";

/**
 * This is a default control setup by the CMS creator.
 * Make sure all of my components keep a similar structure.
 */

export default class MainImageControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: "",
  };

  // The selection to maintain for the input element
  _sel = 0;

  // The input element ref
  _el = null;

  // NOTE: This prevents the cursor from jumping to the end of the text for
  // nested inputs. In other words, this is not an issue on top-level text
  // fields such as the `title` of a collection post. However, it becomes an
  // issue on fields nested within other components, namely widgets nested
  // within a `markdown` widget. For example, the alt text on a block image
  // within markdown.
  // SEE: https://github.com/netlify/netlify-cms/issues/4539
  // SEE: https://github.com/netlify/netlify-cms/issues/3578
  componentDidUpdate() {
    if (this._el && this._el.selectionStart !== this._sel) {
      this._el.setSelectionRange(this._sel, this._sel);
    }
  }

  handleChange = (e) => {
    this._sel = e.target.selectionStart;
    this.props.onChange(e.target.value);
  };

  render() {
    const { forID, value, classNameWrapper, setActiveStyle, setInactiveStyle } =
      this.props;

    return (
      <input
        ref={(el) => {
          this._el = el;
        }}
        type="file"
        id={forID}
        value={value || ""}
        onChange={this.handleChange}
      />
    );
  }
}
