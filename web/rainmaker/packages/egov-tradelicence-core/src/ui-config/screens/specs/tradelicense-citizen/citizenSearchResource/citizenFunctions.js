import get from "lodash/get";
import { getSearchResults } from "../../../../../ui-utils/commons";
import { convertEpochToDate } from "../../utils/index";
import { handleScreenConfigurationFieldChange as handleField } from "mihy-ui-framework/ui-redux/screen-configuration/actions";

const getLocalTextFromCode = localCode => {
  return JSON.parse(localStorage.getItem("localization_en_IN")).find(
    item => item.code == localCode
  );
};

export const fetchData = async (action, state, dispatch) => {
  const response = await getSearchResults();
  try {
    let data = response.Licenses.map(item => ({
      [get(textToLocalMapping, "Application No")]:
        item.applicationNumber || "-",
      [get(textToLocalMapping, "License No")]: item.licenseNumber || "-",
      [get(textToLocalMapping, "Trade Name")]: item.tradeName || "-",
      [get(textToLocalMapping, "Owner Name")]:
        item.tradeLicenseDetail.owners[0].name || "-",
      [get(textToLocalMapping, "Application Date")]:
        convertEpochToDate(item.applicationDate) || "-",
      tenantId: item.tenantId,
      [get(textToLocalMapping, "Status")]:
        get(textToLocalMapping, item.status) || "-"
    }));
    console.log(data);
    dispatch(
      handleField(
        "home",
        "components.div.children.applyCard.children.searchResults",
        "props.data",
        data
      )
    );
  } catch (error) {
    console.log(error);
  }
};

export const textToLocalMapping = {
  "Application No": get(
    getLocalTextFromCode("TL_COMMON_TABLE_COL_APP_NO"),
    "message",
    "Application No"
  ),
  "License No": get(
    getLocalTextFromCode("TL_COMMON_TABLE_COL_LIC_NO"),
    "message",
    "License No"
  ),
  "Trade Name": get(
    getLocalTextFromCode("TL_COMMON_TABLE_COL_TRD_NAME"),
    "message",
    "Trade Name"
  ),
  "Owner Name": get(
    getLocalTextFromCode("TL_COMMON_TABLE_COL_OWN_NAME"),
    "message",
    "Owner Name"
  ),
  "Application Date": get(
    getLocalTextFromCode("TL_COMMON_TABLE_COL_APP_DATE"),
    "message",
    "Application Date"
  ),
  Status: get(
    getLocalTextFromCode("TL_COMMON_TABLE_COL_STATUS"),
    "message",
    "Status"
  ),
  INITIATED: get(getLocalTextFromCode("TL_INITIATED"), "message", "INITIATED"),
  APPLIED: get(getLocalTextFromCode("TL_APPLIED"), "message", "APPLIED"),
  PAID: get(getLocalTextFromCode("TL_PAID"), "message", "PAID"),
  APPROVED: get(getLocalTextFromCode("TL_APPROVED"), "message", "APPROVED"),
  REJECTED: get(getLocalTextFromCode("TL_REJECTED"), "message", "REJECTED"),
  CANCELLED: get(getLocalTextFromCode("TL_CANCELLED"), "message", "CANCELLED"),
  MY_APPLICATIONS: get(
    getLocalTextFromCode("TL_MY_APPLICATIONS"),
    "message",
    "My Applications"
  )
};
