import React from "react";
import { Button } from "components";
import RatingsComponent from "../Ratings";
import TextAreaComponent from "../TextArea";
import CheckBoxGroup from "../CheckBoxGroup";

const FeedbackForm = ({ form, handleFieldChange, onCheck, checkBoxValue }) => {
  const fields = form.fields || {};
  const submit = form.submit;
  return (
    <div>
      {
        <div className="feedback-main-container">
          <div className="feedback-form">
            <RatingsComponent onChange={(value) => handleFieldChange("rating", value)} />
            <CheckBoxGroup selected={checkBoxValue} onCheck={onCheck} />
            <TextAreaComponent onChange={(e, value) => handleFieldChange("comments", value)} {...fields.comments} />
          </div>
        </div>
      }
      <div className="feedback-popup-button-cont">
        <Button {...submit} primary={true} fullWidth={true} />
      </div>
    </div>
  );
};

export default FeedbackForm;