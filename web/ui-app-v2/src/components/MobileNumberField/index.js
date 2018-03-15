import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "../TextField";

const containerStyle = {
  position: "relative",
  display: "inline-block",
  width: "100%",
  boxSizing: "border-box",
};

const textFieldBaseStyle = {
  textIndent: 35,
};

const prefixBaseStyle = {
  position: "absolute",
  color: "#969696",
  zIndex: 2,
  bottom: 15,
  paddingRight: 5,
  borderRight: "1px solid #eee",
};

const floatingLabelStyle = {
  left: -35,
};

const MobileNumberField = ({ textFieldStyle = {}, prefix = "+91", prefixStyle = {}, ...textFieldProps }) => {
  return (
    <div style={containerStyle}>
      <div style={{ ...prefixBaseStyle, prefixStyle }}>{prefix}</div>
      <TextField
        name="mobile-number-field"
        style={{ ...textFieldBaseStyle, ...textFieldStyle }}
        fullWidth={true}
        {...textFieldProps}
        floatingLabelStyle={floatingLabelStyle}
      />
    </div>
  );
};

MobileNumberField.propTypes = {
  textFieldStyle: PropTypes.object,
  prefixStyle: PropTypes.object,
  prefix: PropTypes.string,
};

export default MobileNumberField;