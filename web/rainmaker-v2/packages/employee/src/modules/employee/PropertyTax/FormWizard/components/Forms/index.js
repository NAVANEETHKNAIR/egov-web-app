import React from "react";
import formHoc from "egov-ui-kit/hocs/form";
import GenericForm from "../GenericForm";
import Field from "egov-ui-kit/utils/field";
import { RadioButton, Card, Icon } from "components";
import Label from "egov-ui-kit/utils/translationNode";
import get from "lodash/get";

const options = [
  { value: "Male", label: <Label label="Male" /> },
  { value: "Female", label: <Label label="Female" /> },
  { value: "Transgender", label: <Label label="Transgender" /> },
];

// const guardianOptions = [{ value: "Husband", label: <Label label="Husband" /> }, { value: "Father ", label: <Label label="Father" /> }];

const styles = {
  labelStyle: {
    color: "rgb(0, 188, 209)",
    font: "12px",
    letterSpacing: 0.6,
    marginBottom: 5,
    marginTop: 14,
  },

  radioButtonItemStyle: {
    marginBottom: "18px",
    paddingLeft: "2px",
    height: "16px",
  },
  selectedLabelStyle: {
    color: "#00bbd3",
  },
  radioButtonLabelStyle: {
    lineHeight: 1,
    marginBottom: 8,
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
};

const OwnerInformation = ({
  form,
  formKey,
  handleFieldChange,
  cardTitle,
  deleteBtn,
  handleChange,
  handleGuardianChange,
  handleRemoveOwner,
  formId,
  disabled,
}) => {
  const fields = form.fields || {};
  const genderSelected = get(fields, "ownerGender.value", "");
  return (
    <Card
      textChildren={
        <div className="pt-owner-info">
          <div>
            <div>{cardTitle}</div>
            {deleteBtn && (
              <div
                className="pt-ownerinfo-deletebtn"
                onClick={() => {
                  handleRemoveOwner(formId, formKey);
                }}
              >
                <Icon action="content" name="clear" />
              </div>
            )}
          </div>
          <div className="owner-details-form">
            <div className="name-address">
              <Field fieldKey="ownerName" field={fields["ownerName"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="ownerMobile" field={fields["ownerMobile"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field
                fieldKey="ownerCategory"
                field={fields["ownerCategory"]}
                handleFieldChange={handleFieldChange}
                disabled={disabled}
                className="ownerCategory"
              />
              <Field fieldKey="ownerCategoryId" field={fields["ownerCategoryId"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="ownerAddress" field={fields["ownerAddress"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="isSameAsPropertyAddress" field={fields.isSameAsPropertyAddress} handleFieldChange={handleFieldChange} disabled={disabled} containerClassName="property-corr"/>
            </div>
            <div>
              <Label label={"Gender"} fontSize={12} labelStyle={styles.labelStyle} bold={true} />
              <RadioButton
                id="gender-selection"
                name="gender-selection"
                options={options}
                handleChange={(e) => {
                  handleFieldChange("ownerGender", e.target.value);
                }}
                radioButtonItemStyle={styles.radioButtonItemStyle}
                labelStyle={styles.radioButtonLabelStyle}
                selectedLabelStyle={styles.selectedLabelStyle}
                className={"owner-gender-selection"}
                iconStyle={styles.iconStyle}
                valueSelected={genderSelected}
                disabled={disabled}
              />
              <div className="relationship-details">
                <Field fieldKey="ownerGuardian" field={fields["ownerGuardian"]} handleFieldChange={handleFieldChange} disabled={disabled} />
                <Field fieldKey="ownerRelationship" field={fields["ownerRelationship"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              </div>
              <Field
                fieldKey="ownerCategoryIdType"
                field={fields["ownerCategoryIdType"]}
                handleFieldChange={handleFieldChange}
                disabled={disabled}
                className="ownerCategoryIdType"
              />
              <Field fieldKey="ownerEmail" field={fields["ownerEmail"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="ownerAadhar" field={fields["ownerAadhar"]} handleFieldChange={handleFieldChange} disabled={disabled} />
            </div>
          </div>
        </div>
      }
    />
  );
};

const InstitutionAuthority = ({ form, formKey, handleFieldChange, cardTitle, formId, disabled }) => {
  const fields = form.fields || {};
  return (
    <Card
      textChildren={
        <div className="pt-institute-authority-info">
          <div className="pt-authority-title">
            <span>
              <Icon action="social" name="person" />
            </span>
            <span>{cardTitle}</span>
          </div>
          <div className="authority-details-form">
            <div className="name-address">
              <Field fieldKey="name" field={fields["name"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="mobile" field={fields["mobile"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="email" field={fields["email"]} handleFieldChange={handleFieldChange} disabled={disabled} />
            </div>
            <div className="address">
              <Field fieldKey="designation" field={fields["designation"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="telephone" field={fields["telephone"]} handleFieldChange={handleFieldChange} disabled={disabled} />
              <Field fieldKey="address" field={fields["address"]} handleFieldChange={handleFieldChange} disabled={disabled} />
            </div>
          </div>
        </div>
      }
    />
  );
};

const UsageInformationHOC = formHoc({ formKey: "basicInformation", path: "PropertyTaxPay" })(GenericForm);
const PropertyAddressHOC = formHoc({ formKey: "propertyAddress", path: "PropertyTaxPay" })(GenericForm);
const PlotInformationHOC = formHoc({ formKey: "plotInformation", path: "PropertyTaxPay" })(GenericForm);
const OwnershipTypeHOC = formHoc({ formKey: "ownershipType", path: "PropertyTaxPay" })(GenericForm);
const OwnerInfoHOC = formHoc({ formKey: "ownerInfo", path: "PropertyTaxPay" })(OwnerInformation);
const ExemptionCategoryHOC = formHoc({ formKey: "exemptionCategory", path: "PropertyTaxPay" })(GenericForm);
const InstitutionHOC = formHoc({ formKey: "institutionDetails", path: "PropertyTaxPay/OwnerInformation/Institution" })(GenericForm);
const DynamicFormHoc = (formKey, Form) => {
  return formHoc({ formKey })(Form);
};
const InstitutionAuthorityHOC = formHoc({ formKey: "institutionAuthority", path: "PropertyTaxPay/OwnerInformation/Institution" })(
  InstitutionAuthority
);

export {
  UsageInformationHOC,
  PropertyAddressHOC,
  PlotInformationHOC,
  OwnershipTypeHOC,
  OwnerInfoHOC,
  ExemptionCategoryHOC,
  DynamicFormHoc,
  OwnerInformation,
  InstitutionHOC,
  InstitutionAuthorityHOC,
};
