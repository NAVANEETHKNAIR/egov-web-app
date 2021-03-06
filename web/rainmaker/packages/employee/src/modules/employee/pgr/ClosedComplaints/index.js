import React, { Component } from "react";
import { connect } from "react-redux";
import { Screen } from "modules/common";
import { Complaints } from "modules/common";
import { fetchComplaints } from "egov-ui-kit/redux/complaints/actions";
import { transformComplaintForComponent } from "egov-ui-kit/utils/commons";
import orderby from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import "./index.css";

class ClosedComplaints extends Component {
  componentDidMount() {
    let { fetchComplaints, numClosedComplaints, renderCustomTitle } = this.props;
    fetchComplaints([{ key: "status", value: "rejected,resolved,closed" }]);
    const numberOfComplaints = numClosedComplaints ? numClosedComplaints : 0;
    renderCustomTitle(numberOfComplaints);
  }

  onComplaintClick = (complaintNo) => {
    this.props.history.push(`/complaint-details/${complaintNo}`);
  };

  componentWillReceiveProps = (nextProps) => {
    const { numClosedComplaints, closedComplaints, renderCustomTitle } = this.props;
    if (!isEqual(closedComplaints, nextProps.closedComplaints)) {
      const numberOfComplaints = nextProps.numClosedComplaints ? nextProps.numClosedComplaints : 0;
      renderCustomTitle(numberOfComplaints);
    }
  };

  render() {
    const { onComplaintClick } = this;
    const { closedComplaints, role, loading } = this.props;

    return (
      <Screen loading={loading}>
        <div className="form-without-button-cont-generic">
          <Complaints
            noComplaintMessage={"No complaints here !!!"}
            onComplaintClick={onComplaintClick}
            complaints={closedComplaints}
            role={role}
            complaintLocation={true}
          />
        </div>
      </Screen>
    );
  }
}

const isAssigningOfficer = (roles) => {
  const roleCodes = roles.map((role, index) => {
    return role.code;
  });
  return roleCodes.indexOf("GRO" || "RO") > -1 ? true : false;
};

const displayStatus = (status = "", assignee) => {
  let statusObj = {};
  if (status.toLowerCase() == "rejected" || status.toLowerCase() == "resolved") {
    statusObj.status = `CS_COMMON_${status.toUpperCase()}_UCASE`;
  } else {
    statusObj.status = status;
  }
  if (status.toLowerCase() == "open") {
    statusObj.statusMessage = `CS_COMMON_SUBMITTED`;
  } else {
    statusObj.statusMessage = `CS_COMMON_${status.toUpperCase()}`;
  }

  return statusObj;
};

const mapStateToProps = (state) => {
  const { complaints, common } = state;
  const { categoriesById } = complaints;
  const { userInfo } = state.auth;
  const { citizenById, employeeById } = common || {};
  const { fetchSuccess } = complaints;
  const loading = fetchSuccess ? false : true;
  const role = isAssigningOfficer(userInfo.roles) ? "ao" : "employee";
  const transformedComplaints = transformComplaintForComponent(complaints, role, employeeById, citizenById, categoriesById, displayStatus);
  const closedComplaints = orderby(
    transformedComplaints.filter((complaint) => {
      if (complaint) {
        return complaint.complaintStatus === "CLOSED";
      }
    }),
    "latestActionTime",
    "desc"
  );
  const numClosedComplaints = closedComplaints.length;
  return { userInfo, closedComplaints, role, loading, numClosedComplaints };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComplaints: (criteria) => dispatch(fetchComplaints(criteria)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClosedComplaints);
