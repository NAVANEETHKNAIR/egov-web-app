var dat = {
  'inventory.search': {
    numCols: 4,
    useTimestamp: true,
    objectName: '',
    url: '/inventory-services/indents/_search',
    groups: [
      {
        name: 'search',
        label: 'inventory.search.title',
        fields: [
          {
            name: 'issueStore',
            jsonPath: 'issueStore.code',
            label:  'inventory.indenting.store',
            type: 'number',
            isDisabled: false,
            patternErrorMsg: 'inventory.create.field.message.issueStore',
            url: 'inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name',

          },
          {
            name: 'indentDate',
            jsonPath: 'indentDate',
            label: 'inventory.indent.date',
            type: 'datePicker',
            isDisabled: false,
            patternErrorMsg: 'inventory.create.field.message.indentDate',
            maxDate: 'today',
            minDate: 'today-365',
          },
          {
            name: 'indentNumber',
            jsonPath: 'indentNumber',
            label: 'inventory.indent.number',
            type: 'text',
            isDisabled: false,
            patternErrorMsg: 'inventory.create.field.message.indentNumber',
          },
          {
            name: 'indentPurpose',
            jsonPath: 'indentPurpose',
            label: 'inventory.indent.purpose',
            type: 'singleValueList',
            isDisabled: false,
            patternErrorMsg: 'inventory.create.field.message.indentPurpose',
             patternErrorMsg: 'inventory.create.field.message.indentPurpose',
            defaultValue: [
              { key: null, value: '-- Please Select --' },
              {
                key: 'Consumption',
                value: 'Consumption',
              },
              {
                key: 'Repairs and Maintenance',
                value: 'Repairs and Maintenance',
              },
              {
                key: 'Capital',
                value: 'Capital',
              },
            ],
          },
          {
            name: 'indentStatus',
            jsonPath: 'indentStatus',
            label: 'inventory.indent.status',
            type: 'singleValueList',
            isDisabled: false,
            patternErrorMsg: 'inventory.create.field.message.indentStatus',
             defaultValue: [
              { key: null, value: '-- Please Select --' },
              {
                key: 'CREATED',
                value: 'CREATED',
              },
              {
                key: 'APPROVED',
                value: 'APPROVED',
              },
              {
                key: 'REJECTED',
                value: 'REJECTED',
              },
              {
                key: 'CANCELED',
                value: 'CANCELED',
              },
            ],
          },
          {
            name: 'searchPurpose',
            jsonPath: 'searchPurpose',
            label: 'inventory.indent.status',
            type: 'text',
            isDisabled: false,
            isHidden: true,
            defaultValue: 'PurchaseOrder',
          },
        ],
      },
    ],
    result: {
      isAction: true,
      actionItems: [
        {
          label: 'Create Indent PO',
          url: '/update/inventory/indentpo/',
          multiSelect : true
        },
      ],
      header: [
         {
          label: 'legal.search.result.actionLabels',
          isChecked: true,
          checkedItem: {
            jsonPath: 'checkedRow',
            label: '',
          },
        },
        {
          label: 'inventory.indent.number',
        },
        {
          label: 'inventory.indent.date',
        },
        {
          label: 'inventory.indent.purpose',
        },
        {
          label: 'inventory.inventory.type',
        },

        {
          label:  'inventory.indenting.store',
        },
      ],
      values: ['indentNumber','indentNumber', 'indentDate', 'indentPurpose', 'inventoryType', 'issueStore.name'],
      isMultipleSelection: true,
      resultIdKey: 'indentNumber',
      resultPath: 'indents',
      rowClickUrlUpdate: '/update/inventory/indent/{indentNumber}',
      rowClickUrlView: '/view/inventory/indent/{indentNumber}',
      rowClickUrlAdd: '/create/inventory/indent',
    }
  },
  'inventory.update': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'purchaseOrders',
    groups: [
      {
        name: 'Group1',
        label: 'inventory.purchaseorder.create.group.title',
        fields: [
          {
            name: 'code',
            jsonPath: 'purchaseOrders[0].store.code',
            label: 'inventory.store.name',
            pattern: '^[a-zA-Z0-9]+$',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 50,
            minLength: 5,
            patternErrorMsg: 'purchaseorder.create.field.message.code',
            url: 'inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name',
          },
          {
            name: 'purchaseOrderNumber',
            jsonPath: 'purchaseOrders[0].purchaseOrderNumber',
            label: 'inventory.purchaseorder.number',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: true,
            defaultValue: '',
            patternErrorMsg: '',
            isHidden: true,
          },
          {
            name: 'purchaseOrderDate',
            jsonPath: 'purchaseOrders[0].purchaseOrderDate',
            label: 'inventory.purchaseorder.date',
            pattern: '',
            type: 'datePicker',
            maxDate: 'today',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            patternErrorMsg: '',
             depedants: [{
            jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractNumber',
            type: 'griddropDown',
            gridjsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].material.code',
            }, 
          ],
          },
          {
            name: 'rateType',
            jsonPath: 'purchaseOrders[0].rateType',
            label: 'inventory.rateType',
            pattern: '',
            type: 'singleValueList',
            defaultValue: [
              { key: null, value: '-- Please Select --' },
              {
                key: 'DGSC Rate Contract',
                value: 'DGSC Rate Contract',
              },
              {
                key: 'ULB Rate Contract',
                value: 'ULB Rate Contract',
              },
              {
                key: 'One Time Tender',
                value: 'One Time Tender',
              },
              {
                key: 'Quotation',
                value: 'Quotation',
              },
            ],
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            depedants: [{
            jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractNumber',
            type: 'griddropDown',
            gridjsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].material.code',
             }, 
            ],
          },
          {
            name: 'code',
            jsonPath: 'purchaseOrders[0].supplier.code',
            label: 'inventory.supplier.name',
            pattern: '^[a-zA-Z0-9]+$',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            defaultValue: '',
            maxLength: 50,
            minLength: 5,
            patternErrorMsg: 'purchaseorder.create.field.message.code',
            url: '/inventory-services/suppliers/_search?status="ACTIVE"|$..code|$..name',
            depedants: [{
            jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractNumber',
            type: 'griddropDown',
            gridjsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].material.code',
            }, 
          ],
          },
          {
            name: 'advanceAmount',
            jsonPath: 'purchaseOrders[0].advanceAmount',
            label: 'inventory.advanceAmount',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 10,
            patternErrorMsg: '',
            depedants: [{
            jsonPath: 'purchaseOrders[0].advancePercentage',
            type: 'textField',
            pattern: "`${getVal('purchaseOrders[0].advanceAmount')!=''?getVal('purchaseOrders[0].advanceAmount'):0} / ${getVal('purchaseOrders[0].totalAdvancePaidAmount')!=''?getVal('purchaseOrders[0].totalAdvancePaidAmount'):1} *  ${getVal('purchaseOrders[0].totalAdvancePaidAmount')!=''?100:0} `", /// getVal('purchaseOrders.totalAdvancePaidAmount') 
            rg: '',
            isRequired: false,
            requiredErrMsg: '',
            patternErrMsg: '',
            }],
          },
          {
            name: 'advancePercentage',
            jsonPath: 'purchaseOrders[0].advancePercentage',
            label: 'inventory.advancePercentage',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 3,
            patternErrorMsg: '',
            depedants: [{
            jsonPath: 'purchaseOrders[0].advanceAmount',
            type: 'textField',
            pattern: "`${getVal('purchaseOrders[0].advancePercentage')!=''?getVal('purchaseOrders[0].advancePercentage'):0} * ${getVal('purchaseOrders[0].totalAdvancePaidAmount')!=''?getVal('purchaseOrders[0].totalAdvancePaidAmount'):0} / 100 `", /// getVal('purchaseOrders.totalAdvancePaidAmount') 
            rg: '',
            isRequired: false,
            requiredErrMsg: '',
            patternErrMsg: '',
            }],
          },
          {
            name: 'expectedDeliveryDate',
            jsonPath: 'purchaseOrders[0].expectedDeliveryDate',
            label: 'inventory.expectedDeliveryDate',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            patternErrorMsg: '',
            expression: '$purchaseOrders[0].expectedDeliveryDate >= $purchaseOrders[0].purchaseOrderDate',
            expressionMsg: 'Expected Delivery Date should be greater than or equal to Purchase Order Date',
           },
          {
            name: 'deliveryTerms',
            jsonPath: 'purchaseOrders[0].deliveryTerms',
            label: 'inventory.deliveryTerms',
            pattern: '',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 512,
            patternErrorMsg: '',
          },
          {
            name: 'paymentTerms',
            jsonPath: 'purchaseOrders[0].paymentTerms',
            label: 'inventory.paymentTerms',
            pattern: '',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 512,
            patternErrorMsg: '',
          },
          {
            name: 'remarks',
            jsonPath: 'purchaseOrders[0].remarks',
            label: 'inventory.remarks',
            pattern: '',
            type: 'textarea',
            isRequired: false,
            isDisabled: false,
            defaultValue: '',
            maxLength: 1000,
            patternErrorMsg: '',
          },
          {
            name: 'designation',
            jsonPath: 'purchaseOrders[0].designation',
            label: 'inventory.designation',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: true,
            defaultValue: '',
            maxLength: 128,
            patternErrorMsg: '',
          },
          {
            type: 'tableList',
            jsonPath: 'purchaseOrders[0].purchaseOrderDetails',
            displayJsonPath:'indents[0].indentDetails',
            tableList: {
              header: [
                {
                  label: 'inventory.materialName',
                },
                {
                  label: 'inventory.indent.number',
                },
                {
                  label: 'inventory.materialDesc',
                },
                {
                  label: 'inventory.totalindent.quantity',
                },
                {
                  label: 'inventory.Uom',
                },
                {
                  label: 'inventory.ratecontract',
                },
                {
                  label: 'inventory.orderqty',
                },
                {
                  label: 'inventory.unitRate',
                },
                {
                  label: 'reports.inventory.openbal.TotalAmount',
                },
                {
                  label: 'inventory.TenderQuantity',
                },
                {
                  label: 'inventory.usedQuantity',
                },
              ],
              values: [
                {
                  name: 'material',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].material.code',
                  displayJsonPath:'indents[0].indentDetails[0].material.code',
                  label: '',
                  pattern: '',
                  type: 'autoCompelete',
                  isRequired: true,
                  isDisabled: false,
                  defaultValue: '',
                  maxLength: 50,
                  patternErrorMsg: '',
                  url: '/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Material|$..code|$..name|$..description|$..purchaseUom.code',
                  depedants: [{
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].material.description',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].material.code', getVal('purchaseOrders[0].purchaseOrderDetails[*].material.code'), 'others[0]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].uom.code',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].material.code', getVal('purchaseOrders[0].purchaseOrderDetails[*].material.code'), 'others[1]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractNumber',
                    type: 'griddropDown',
                    autoSelect: true,
                    pattern: '/inventory-services/pricelists/_search?tenantId=default&supplierName={purchaseOrders[0].supplier.code}&rateType={purchaseOrders[0].rateType}&active=true&asOnDate={purchaseOrders[0].purchaseOrderDate}&materialCode={purchaseOrders[0].purchaseOrderDetails[0].material.code}|$..rateContractNumber|$..rateContractNumber|$..ratePerUnit|$..quantity|$..usedQuantity|$..agreementNumber|$..rateContractDate|$..agreementDate|$..agreementStartDate|$..agreementEndDate',
                  },
                 ],
                },
                {
                  name: 'indentNumber',
                  jsonPath: 'purchaseOrders[0].purchaseIndentDetails[0].purchaseIndentDetails[0].indentDetail[0].indentNumber',
                  label: '',
                  pattern: '',
                  type: 'text',
                  isRequired: false,
                  isDisabled: true,
                  defaultValue: '',
                  maxLength: 50,
                  minLength: 5,
                  patternErrorMsg: '',
                },
                {
                  name: 'materialDescription',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].material.description',
                  label: '',
                  pattern: '',
                  type: 'text',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  maxLength: 50,
                  minLength: 5,
                  patternErrorMsg: '',
                },
                {
                  name: 'totalIndentQuantity',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].purchaseIndentDetails[0].quantity',
                  label: '',
                  pattern: '',
                  type: 'number',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                },
                {
                  name: 'uom',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].uom.code',
                  label: '',
                  pattern: '',
                  type: 'singleValueList',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                  url: '/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..description',
                },
                {
                  name: 'rateContractNumber',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractNumber',
                  label: '',
                  pattern: '',
                  type: 'singleValueList',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: [],
                  url: '/inventory-services/pricelists/_search?tenantId=default&rateContractNumber={purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractNumber}&priceListDetails.material.code={purchaseOrders[0].purchaseOrderDetails[0].material.code}|$..rateContractNumber|$..rateContractNumber|$..ratePerUnit|$..quantity',
                  patternErrorMsg: '',
                  depedants: [{
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].unitPrice',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[0]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].tenderQuantity',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[1]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].usedQuantity',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractDate', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[2]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementNumber',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[3]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractDate',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[4]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementDate',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[5]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementStartDate',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[6]')",
                  },
                  {
                    jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementEndDate',
                    type: 'textField',
                    valExp: "getValFromDropdownData('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber', getVal('purchaseOrders[0].purchaseOrderDetails[*].priceList.rateContractNumber'), 'others[7]')",
                  },
                ],
                },
                {
                  name: 'orderQuantity',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].userQuantity',
                  label: '',
                  pattern: '',
                  type: 'number',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                  dependency: 'purchaseOrders[0].totalAdvancePaidAmount:purchaseOrders[0].purchaseOrderDetails[0].unitPrice',
                  depedants: [{
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].totalAmount',
                  type: 'textField',
                  pattern: "`${getVal('purchaseOrders[0].purchaseOrderDetails[*].unitPrice')!=''?getVal('purchaseOrders[0].purchaseOrderDetails[*].unitPrice'):0} * ${getVal('purchaseOrders[0].purchaseOrderDetails[*].userQuantity')!=''?getVal('purchaseOrders[0].purchaseOrderDetails[*].userQuantity'):0}`",
                  rg: '',
                  isRequired: false,
                  requiredErrMsg: '',
                  patternErrMsg: '',
                }],
                },
                {
                  name: 'unitPrice',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].unitPrice',
                  label: '',
                  pattern: '',
                  type: 'number',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                  dependency: 'purchaseOrders[0].totalAdvancePaidAmount:purchaseOrders[0].purchaseOrderDetails[0].userQuantity',
                  depedants: [{
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].totalAmount',
                  type: 'textField',
                  pattern: "`${getVal('purchaseOrders[0].purchaseOrderDetails[*].unitPrice')!=''?getVal('purchaseOrders[0].purchaseOrderDetails[*].unitPrice'):0} * ${getVal('purchaseOrders[0].purchaseOrderDetails[*].userQuantity')!=''?getVal('purchaseOrders[0].purchaseOrderDetails[*].userQuantity'):0}`",
                  rg: '',
                  isRequired: false,
                  requiredErrMsg: '',
                  patternErrMsg: '',
                },
                ],
                },
                {
                  name: 'TotalAmount',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].totalAmount',
                  label: '',
                  pattern: '',
                  type: 'number',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                },
                {
                  name: 'tenderQuantity',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].tenderQuantity',
                  label: '',
                  pattern: '',
                  type: 'number',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                },
                {
                  name: 'usedQuantity',
                  jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].usedQuantity',
                  label: '',
                  pattern: '',
                  type: 'number',
                  isRequired: false,
                  isDisabled: false,
                  defaultValue: '',
                  patternErrorMsg: '',
                },
                {
                name: 'rateContractDate',
                jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.rateContractDate',
                label: 'inventory.create.rateContractDate',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isHidden: true,
                isDisabled: true,
                requiredErrMsg: '',
                patternErrMsg: '',
              },
              {
                name: 'agreementNumber',
                jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementNumber',
                label: 'inventory.create.agreementNumber',
                pattern: '',
                type: 'text',
                isRequired: false,
                isHidden: true,
                isDisabled: true,
                requiredErrMsg: '',
                patternErrMsg: '',
              },
              {
                name: 'agreementDate',
                jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementDate',
                label: 'inventory.create.agreementDate',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isHidden: true,
                isDisabled: true,
                requiredErrMsg: '',
                patternErrMsg: '',
              },
              {
                name: 'agreementStartDate',
                jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementStartDate',
                label: 'inventory.create.agreementStartDate',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isHidden: true,
                isDisabled: true,
                requiredErrMsg: '',
                patternErrMsg: '',
              },
              {
                name: 'agreementEndDate',
                jsonPath: 'purchaseOrders[0].purchaseOrderDetails[0].priceList.agreementEndDate',
                label: 'inventory.create.agreementEndDate',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isHidden: true,
                isDisabled: true,
                requiredErrMsg: '',
                patternErrMsg: '',
              },             
              ],
            },
          },
           {
          name: 'totalPoValue',
          jsonPath: 'purchaseOrders[0].totalAdvancePaidAmount',
          label: 'inventory.totalPoValue',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: true,
          defaultValue: '',
          maxLength: 128,
          patternErrorMsg: '',
        },
          {
                name: 'additionalPurchaseWindow',
                jsonPath: 'purchaseOrders[0]',
                arrayPath: 'purchaseOrderDetails',
                label: 'inventory.purchasedetails.create.rateContractWindow',
                pattern: '',
                modulepath: 'inventory.create',
                actionsNotRequired: true,
                type: 'window',
                tableConfig: {
                  header: [{
                    label: 'inventory.create.rateContractNumber',
                    style: {
                      width: '700px',
                    },
                  }, ],
                  rows: [{
                    displayField: 'priceList.rateContractNumber',
                  }, ],
                },
                subPath: 'inventory/master/subdetails',
                isRequired: false,
                isDisabled: true,
                requiredErrMsg: '',
                patternErrMsg: '',
              },
        ],
      },
    ],
    url: '/inventory-services/purchaseorders/_create',
    // onloadFetchUrl: '/inventory-services/purchaseorders/_preparepofromindents',
    searchUrl: '/inventory-services/purchaseorders/_preparepofromindents?inedentNumbers={id}', //indents/_search?ids={id}',
    tenantIdRequired: true,
  },
};
export default dat;