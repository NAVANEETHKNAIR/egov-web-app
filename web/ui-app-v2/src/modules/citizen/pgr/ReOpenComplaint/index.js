import React, { Component } from "react";
import { connect } from "react-redux";
import Screen from "modules/common/common/Screen";
import Label from "utils/translationNode";
import ReopenComplaintForm from "./components/ReopenComplaintForm";
import { fetchComplaints } from "redux/complaints/actions";
import { fileUpload, handleFieldChange } from "redux/form/actions";
import formHoc from "hocs/form";
import "./index.css";

const ReopenComplaintFormHOC = formHoc(ReopenComplaintForm, "reopenComplaint");

class ReOpenComplaint extends Component {
  state = {
    valueSelected: "",
    commentValue: "",
  };

  componentDidMount() {
    let { fetchComplaints, match } = this.props;
    fetchComplaints([{ key: "serviceRequestId", value: match.params.serviceRequestId }]);
  }

  options = [
    { value: "No work was done", label: <Label label="CS_REOPEN_OPTION_ONE" /> },
    { value: "Only partial work was done ", label: <Label label="CS_REOPEN_OPTION_TWO" /> },
    { value: "Employee did not turn up", label: <Label label="CS_REOPEN_OPTION_THREE" /> },
    { value: "No permanent solution", label: <Label label="CS_REOPEN_OPTION_FOUR" /> },
  ];
  commentsValue = {};

  handleCommentChange = (e, value) => {
    this.commentsValue.textVal = e.target.value;
    this.setState({
      commentValue: e.target.value,
    });
    this.concatComments(this.commentsValue);
  };
  handleOptionsChange = (event, value) => {
    this.setState({ valueSelected: value });
    this.commentsValue.radioValue = value;
    this.concatComments(this.commentsValue);
  };
  concatComments = (val) => {
    let com1 = "";
    let com2 = "";
    if (val.radioValue) {
      com1 = val.radioValue + ";";
    }
    if (val.textVal) {
      com2 = val.textVal;
    }
    let concatvalue = com1 + com2;
    this.props.handleFieldChange("comments", concatvalue);
  };

  render() {
    const { handleCommentChange, handleOptionsChange } = this;
    const { valueSelected, commentValue } = this.state;
    return (
      <Screen className="reopencomplaint-field">
        <ReopenComplaintFormHOC
          options={this.options}
          ontextAreaChange={handleCommentChange}
          handleOptionChange={handleOptionsChange}
          optionSelected={valueSelected}
          commentValue={commentValue}
        />
      </Screen>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fileUpload: (formKey, fieldKey, file) => dispatch(fileUpload(formKey, fieldKey, file)),
    fetchComplaints: (criteria) => dispatch(fetchComplaints(criteria)),
    handleFieldChange: (formKey, fieldKey, value) => dispatch(handleFieldChange(formKey, fieldKey, value)),
  };
};

export default connect(null, mapDispatchToProps)(ReOpenComplaint);
