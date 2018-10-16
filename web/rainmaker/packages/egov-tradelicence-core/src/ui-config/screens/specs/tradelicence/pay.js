import {
  getCommonContainer,
  getCommonHeader,
  getCommonCard,
  getCommonTitle,
  getCommonParagraph,
  getLabel
} from "mihy-ui-framework/ui-config/screens/specs/utils";

import { footer } from "./payResource/footer";
import estimateDetails from "./payResource/estimate-details";
import g8Details from "./payResource/g8-details";
import capturePaymentDetails from "./payResource/capture-payment-details";
import { adhocPopup } from "./applyResource/adhocPopup";
import { showHideAdhocPopup, getBill } from "../utils";
import {
  prepareFinalObject,
  handleScreenConfigurationFieldChange as handleField
} from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import { getQueryArg } from "mihy-ui-framework/ui-utils/commons";
import set from "lodash/set";
import { getSearchResults } from "ui-utils/commons";
import { createEstimateData } from "../utils";

const header = getCommonContainer({
  header: getCommonHeader({
    labelName: "Payment for New Trade License (2018-2019)",
    labelKey: "TL_COMMON_PAYMENT_NEW_LIC"
  }),
  applicationNumber: {
    uiFramework: "custom-atoms-local",
    componentPath: "ApplicationNoContainer",
    props: {
      number: getQueryArg(window.location.href, "applicationNumber")
    }
  }
});

export const fetchBill = async (action, state, dispatch) => {
  //get bill and populate estimate card
  const payload = await createEstimateData(
    [],
    "LicensesTemp[0].estimateCardData",
    dispatch,
    window.location.href
  );

  //For Adhoc
  // Search License
  let queryObject = [
    { key: "tenantId", value: getQueryArg(window.location.href, "tenantId") },
    {
      key: "applicationNumber",
      value: getQueryArg(window.location.href, "applicationNumber")
    }
  ];
  const LicensesPayload = await getSearchResults(queryObject);
  console.log(LicensesPayload);
  //set in redux to be used for adhoc
  dispatch(prepareFinalObject("Licenses[0]", LicensesPayload.Licenses[0]));

  //initiate receipt object
  payload &&
    dispatch(prepareFinalObject("ReceiptTemp[0].Bill[0]", payload.Bill[0]));

  //set amount paid as total amount from bill
  payload &&
    dispatch(
      prepareFinalObject(
        "ReceiptTemp[0].Bill[0].billDetails[0].amountPaid",
        payload.Bill[0].billDetails[0].totalAmount
      )
    );

  //set total amount in instrument
  payload &&
    dispatch(
      prepareFinalObject(
        "ReceiptTemp[0].instrument.amount",
        payload.Bill[0].billDetails[0].totalAmount
      )
    );

  //Initially select instrument type as Cash
  dispatch(
    prepareFinalObject("ReceiptTemp[0].instrument.instrumentType.name", "Cash")
  );

  //set tenantId
  dispatch(
    prepareFinalObject(
      "ReceiptTemp[0].tenantId",
      getQueryArg(window.location.href, "tenantId")
    )
  );

  //set tenantId in instrument
  dispatch(
    prepareFinalObject(
      "ReceiptTemp[0].instrument.tenantId",
      getQueryArg(window.location.href, "tenantId")
    )
  );
};

const screenConfig = {
  uiFramework: "material-ui",
  name: "pay",
  beforeInitScreen: (action, state, dispatch) => {
    fetchBill(action, state, dispatch);
    return action;
  },
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      },
      children: {
        headerDiv: {
          uiFramework: "custom-atoms",
          componentPath: "Container",
          children: {
            header: {
              gridDefination: {
                xs: 12,
                sm: 10
              },
              ...header
            }
          }
        },
        formwizardFirstStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            paymentDetails: getCommonCard({
              header: getCommonTitle({
                labelName: "Payment Collection Details",
                labelKey: "TL_PAYMENT_HEAD"
              }),
              // paragraph: getCommonParagraph({
              //   labelName: ""
              // }),
              estimateDetails,
              addPenaltyRebateButton: {
                componentPath: "Button",
                props: {
                  color: "primary",
                  style: {}
                },
                children: {
                  previousButtonLabel: getLabel({
                    labelName: "ADD REBATE/PENALTY",
                    labelKey: "TL_PAYMENT_ADD_RBT_PEN"
                  })
                },
                onClickDefination: {
                  action: "condition",
                  callBack: showHideAdhocPopup
                }
              },
              capturePaymentDetails,
              g8Details
            })
          }
        },
        footer
      }
    },
    adhocDialog: {
      componentPath: "Dialog",
      props: {
        open: false
      },
      children: {
        dialogContent: {
          componentPath: "DialogContent",
          children: {
            popup: adhocPopup
          }
        }
      }
    }
  }
};

export default screenConfig;
