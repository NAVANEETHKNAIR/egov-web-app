import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

const Button = ({ label, icon = {}, onClick, backgroundColor, labelColor, fullWidth, disabled, hide, primary = false, style = {}, id }) => {
  return (
    <RaisedButton
      style={style}
      disabled={disabled}
      fullWidth={fullWidth}
      primary={primary}
      label={label}
      onClick={onClick}
      backgroundColor={backgroundColor}
      labelColor={labelColor}
      icon={
        <i style={icon.style} className="material-icons">
          {icon.name}
        </i>
      }
      id={id}
    />
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
