import React from "react";
import { Icon, TextArea, Image } from "components";
import Label from "utils/translationNode";
import emptyFace from "assets/images/download.png";
import "./index.css";

const iconStyle = {
  marginLeft: "20px",
  height: "20px",
  width: "20px",
  transform: "rotate(-15deg)",
  marginBottom: "5px",
  position: "absolute",
  right: 16,
  top: 12,
};

const textFieldStyle = {
  backgroundColor: "#f2f2f2",
  display: "flex",
  alignItems: "center",
  border: "solid 1px #e6e6e6",
  fontSize: "14px",
};

const imageStyles = {
  width: "33px",
  height: "33px",
  marginRight: "8px",
};

const WriteComment = ({ form, formKey, onChange, submitForm, userImage, currentstatus }) => {
  const fields = form.fields || {};
  // if (currentstatus && currentstatus === "closed") {
  //   iconStyle.pointerEvents = "none";
  // } else {
  //   if (iconStyle.pointerEvents) delete iconStyle["pointerEvents"];
  // }
  return (
    <div disabled={true} style={{ display: "flex", justifyContent: "center", paddingBottom: 16, position: "relative", alignItems: "center" }}>
      <Image style={imageStyles} className="img-circle" size="medium" source={userImage ? userImage : emptyFace} />

      <TextArea
        {...fields.comment}
        hintText={<Label label="CS_COMMON_COMMENTS_PLACEHOLDER2" />}
        style={textFieldStyle}
        onChange={(e, value) => onChange(formKey, "comment", value)}
        className="write-complaint-chat-field"
        fullWidth={true}
        multiLine={true}
        underlineShow={false}
        hintStyle={{ left: 5, bottom: "initial", fontSize: 14, top: 12 }}
        inputStyle={{ fontSize: 14, paddingLeft: 5, paddingRight: 40 }}
        rowsMax={3}
        // disabled={currentstatus === "closed" ? true : false}
      />
      <Icon className="comment-send" action="content" name="send" style={iconStyle} color={"#00bcd1"} onClick={() => submitForm(formKey)} />
    </div>
  );
};

export default WriteComment;

//props types check yet to add