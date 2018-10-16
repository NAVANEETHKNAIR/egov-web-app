import { getLabel } from "mihy-ui-framework/ui-config/screens/specs/utils";
import get from "lodash/get";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import { httpRequest } from "ui-utils/api";
import { getQueryArg } from "mihy-ui-framework/ui-utils/commons";
import { setRoute } from "mihy-ui-framework/ui-redux/app/actions";
import { convertDateToEpoch } from "../../utils";
import { toggleSnackbarAndSetText } from "mihy-ui-framework/ui-redux/app/actions";

const moveToSuccess = (href, dispatch, receiptNumber) => {
  const applicationNo = getQueryArg(href, "applicationNumber");
  const tenantId = getQueryArg(href, "tenantId");
  const purpose = "pay";
  const status = "success";
  dispatch(
    setRoute(
      `/mihy-ui-framework/tradelicence/acknowledgement?purpose=${purpose}&status=${status}&applicationNumber=${applicationNo}&tenantId=${tenantId}&secondNumber=${receiptNumber}`
    )
  );
};

const convertDateFieldToEpoch = (finalObj, jsonPath) => {
  const dateConvertedToEpoch = convertDateToEpoch(get(finalObj, jsonPath));
  set(finalObj, jsonPath, dateConvertedToEpoch);
};

const callBackForPay = async (state, dispatch) => {
  const { href } = window.location;
  const ReceiptDataTemp = get(
    state.screenConfiguration.preparedFinalObject,
    "ReceiptTemp[0]"
  );
  let finalReceiptData = cloneDeep(ReceiptDataTemp);
  if (get(finalReceiptData, "instrument.transactionDateInput")) {
    convertDateFieldToEpoch(
      finalReceiptData,
      "instrument.transactionDateInput"
    );
    set(
      finalReceiptData,
      "instrument.instrumentDate",
      get(finalReceiptData, "instrument.transactionDateInput")
    );
  }

  if (get(finalReceiptData, "instrument.transactionNumber")) {
    set(
      finalReceiptData,
      "instrument.instrumentNumber",
      get(finalReceiptData, "instrument.transactionNumber")
    );
  }

  if (get(finalReceiptData, "Bill[0].billDetails[0].manualReceiptDate")) {
    convertDateFieldToEpoch(
      finalReceiptData,
      "Bill[0].billDetails[0].manualReceiptDate"
    );
  }

  if (get(finalReceiptData, "instrument.transactionDateInput")) {
    convertDateFieldToEpoch(
      finalReceiptData,
      "Bill[0].billDetails[0].manualReceiptDate"
    );
  }

  let ReceiptBody = {
    Receipt: []
  };

  ReceiptBody.Receipt.push(finalReceiptData);

  // console.log(ReceiptBody);
  try {
    let response = await httpRequest(
      "post",
      "collection-services/receipts/_create",
      "_create",
      [],
      ReceiptBody,
      [],
      {}
    );
    let receiptNumber = get(
      response,
      "Receipt[0].Bill[0].billDetails[0].receiptNumber",
      null
    );
    moveToSuccess(href, dispatch, receiptNumber);
  } catch (e) {
    dispatch(toggleSnackbarAndSetText(true, e.message, "error"));
    console.log(e);
  }
};

export const getCommonApplyFooter = children => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "apply-wizard-footer"
    },
    children
  };
};

export const footer = getCommonApplyFooter({
  submitButton: {
    componentPath: "Button",
    props: {
      variant: "contained",
      color: "primary",
      style: {
        width: "200px",
        height: "48px",
        marginRight: "45px"
      }
    },
    children: {
      submitButtonLabel: getLabel({
        labelName: "Submit",
        labelKey: "TL_COMMON_BUTTON_SUBMIT"
      }),
      submitButtonIcon: {
        uiFramework: "custom-atoms",
        componentPath: "Icon",
        props: {
          iconName: "keyboard_arrow_right"
        }
      }
    },
    onClickDefination: {
      action: "condition",
      callBack: callBackForPay
    },
    roleDefination: {
      rolePath: "user-info.roles",
      roles: ["EMPLOYEE"]
    }
  },
  downloadConfirmationform: {
    componentPath: "Button",
    props: {
      variant: "outlined",
      color: "primary",
      style: {
        width: "200px",
        height: "48px",
        marginRight: "45px"
      }
    },
    children: {
      submitButtonLabel: getLabel({
        labelName: "DOWNLOAD CONFIRMATION FORM",
        labelKey: "TL_COMMON_BUTTON_DOWNLOAD_CONFIRMATION_FORM"
      })
    },
    onClickDefination: {
      action: "condition",
      callBack: callBackForPay
    },
    roleDefination: {
      rolePath: "user-info.roles",
      roles: ["CITIZEN"]
    }
  },
  printConfirmationform: {
    componentPath: "Button",
    props: {
      variant: "outlined",
      color: "primary",
      style: {
        width: "200px",
        height: "48px",
        marginRight: "45px"
      }
    },
    children: {
      submitButtonLabel: getLabel({
        labelName: "PRINT CONFIRMATION FORM",
        labelKey: "TL_COMMON_BUTTON_PRINT_CONFIRMATION_FORM"
      })
    },
    onClickDefination: {
      action: "condition",
      callBack: callBackForPay
    },
    roleDefination: {
      rolePath: "user-info.roles",
      roles: ["CITIZEN"]
    }
  },
  makePayment: {
    componentPath: "Button",
    props: {
      variant: "contained",
      color: "primary",
      style: {
        width: "200px",
        height: "48px",
        marginRight: "45px"
      }
    },
    children: {
      submitButtonLabel: getLabel({
        labelName: "MAKE PAYMENT",
        labelKey: "TL_COMMON_BUTTON_CITIZEN_MAKE_PAYMENT"
      })
    },
    onClickDefination: {
      action: "condition",
      callBack: callBackForPay
    },
    roleDefination: {
      rolePath: "user-info.roles",
      roles: ["CITIZEN"]
    }
  }
});
