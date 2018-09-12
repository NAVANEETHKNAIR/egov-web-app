"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("egov-ui-kit/components");

var _translationNode = require("egov-ui-kit/utils/translationNode");

var _translationNode2 = _interopRequireDefault(_translationNode);

require("./index.css");

var _AssessmentInfoTable = require("../AssessmentInfoTable");

var _AssessmentInfoTable2 = _interopRequireDefault(_AssessmentInfoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editIconStyle = (0, _defineProperty3.default)({
  fill: "#767676",
  width: 19,
  height: 20,
  marginRight: 8
}, "fill", "#fe7a51");

var ReceiptItems = function ReceiptItems(_ref) {
  var items = _ref.items,
      propertyTaxAssessmentID = _ref.propertyTaxAssessmentID,
      history = _ref.history,
      tenantId = _ref.tenantId,
      onButtonClick = _ref.onButtonClick;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "rainmaker-displayInline", style: { justifyContent: "space-between", alignItems: "center" } },
      _react2.default.createElement(
        "div",
        { className: "receipt-displayInline" },
        _react2.default.createElement(_components.Icon, { action: "action", name: "assignment", color: "#767676" }),
        _react2.default.createElement(_translationNode2.default, {
          bold: true,
          label: "Property Tax Unique ID.: " + propertyTaxAssessmentID,
          containerStyle: { marginLeft: "13px" },
          labelStyle: { letterSpacing: 0 },
          color: "#767676"
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "receipt-displayInline text-right", style: { cursor: "pointer", marginRight: 5 } },
        _react2.default.createElement(_components.Button, {
          onClick: onButtonClick,
          label: _react2.default.createElement(_translationNode2.default, { buttonLabel: true, label: "PT_PAYMENT_ASSESS_AND_PAY", fontSize: "12px" }),
          primary: true,
          style: { height: 30, lineHeight: "auto", minWidth: "inherit" }
        })
      )
    ),
    _react2.default.createElement(_components.Divider, { className: "reciept-divider", inset: true, lineStyle: { marginLeft: 0, marginRight: 0 } }),
    _react2.default.createElement(
      "div",
      null,
      items.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "rainmaker-displayInline", style: { justifyContent: "space-between", alignItems: "center" } },
              _react2.default.createElement(
                "div",
                { className: "receipt-displayInline" },
                _react2.default.createElement(_components.Icon, { action: item.iconAction, name: item.iconName, color: "#767676" }),
                _react2.default.createElement(_translationNode2.default, { label: item.heading, containerStyle: { marginLeft: "13px" }, bold: true, dark: true, labelStyle: { letterSpacing: 0.6 } })
              ),
              process.env.REACT_APP_NAME === "Employee" && item.heading === "Property Address" && _react2.default.createElement(
                "div",
                {
                  className: "receipt-displayInline text-right",
                  onClick: function onClick(e) {
                    history.push(tenantId + "/edit-property");
                  },
                  style: { cursor: "pointer", marginRight: 5 }
                },
                _react2.default.createElement(_components.Icon, { style: editIconStyle, action: "image", name: "edit" }),
                _react2.default.createElement(_translationNode2.default, { label: "EDIT", color: "#fe7a51", fontSize: "16px" })
              )
            ),
            item.showTable ? _react2.default.createElement(_AssessmentInfoTable2.default, { items: item.items, tableHeaderItems: item.tableHeaderItems }) : item.nestedItems ? item.items.map(function (nestedItem, nestedIndex) {
              return _react2.default.createElement(_components.Receipt, { receiptItems: nestedItem.items, header: item.items.length > 1 && "Owner " + (nestedIndex + 1) });
            }) : _react2.default.createElement(_components.Receipt, { receiptItems: item.items })
          ),
          index < items.length - 1 && _react2.default.createElement(_components.Divider, { className: "reciept-divider", inset: true, lineStyle: { marginLeft: 0, marginRight: 0, marginTop: 0 } })
        );
      })
    )
  );
};

exports.default = ReceiptItems;