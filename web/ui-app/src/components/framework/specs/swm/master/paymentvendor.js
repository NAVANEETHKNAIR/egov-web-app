var dat ={
'swm.search': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'paymentDetails',
    title: 'swm.vendorpayment.create.searchcapturetitle',
    url: '/swm-services/paymentdetails/_search',
    groups: [
    {
        fields:[
          {
            name: 'vendorName',
            jsonPath: 'vendorNo',
            label: 'swm.vendorpayment.create.vendorName',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
            depedants: [
              {
                jsonPath: 'contractNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorcontracts/_search?&vendorNo={vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
              }
            ]
          },
          {
            name: 'contractno',
            jsonPath: 'contractNo',
            label: 'swm.vendorpayment.create.contractno',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            depedants: [
              {
                jsonPath: 'paymentNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorpaymentdetails/_search?&contractNo={contractNo}|$.vendorPaymentDetails.*.paymentNo|$.vendorPaymentDetails.*.invoiceNo",
              }
            ],
          },
          {
            name: 'InvoiceNumber',
            label: 'swm.paymentvendor.create.InvoiceNumber',
            type: 'singleValueList',
            jsonPath: "paymentNo",
            isRequired: false,
            isDisabled: false, 
            patternErrorMsg: '',
          },
          {
            name: 'voucherNumber', 
            label: 'swm.paymentvendor.create.VoucherNumber',
            type: 'text',
            jsonPath: "voucherNumber",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'vocherDate',
            label: 'swm.paymentvendor.create.VoucherDate',
            type: 'datePicker',
            jsonPath: "voucherDate",
            isRequired: false,
            isDisabled: false, 
            patternErrorMsg: '',
          },
      ],  
    },
    ],
    result: {
      header: [
        {
          label: 'swm.paymentvendor.create.VendorName',
        },
        {
          label: 'swm.paymentvendor.create.ContractNumber',
        },
        {
          label: 'swm.paymentvendor.create.InvoiceNumber',
        },
        {
          label: 'swm.paymentvendor.create.InvoiceAmount',
        },
        {
          label: 'swm.paymentvendor.create.VoucherNumber',
        },
        {
          label: 'swm.paymentvendor.create.VoucherDate',
          isDate:true
        },
        {
        label: 'swm.paymentvendor.create.AmountPaid',
        },
      ],
      values: [
        'vendorPaymentDetails.vendorContract.vendor.name',
        'vendorPaymentDetails.vendorContract.contractNo',
        'vendorPaymentDetails.invoiceNo',
        'vendorPaymentDetails.vendorInvoiceAmount',
        'voucherNumber',
        'voucherDate',
        'amount'
      ],
      resultPath: 'paymentDetails',
      rowClickUrlUpdate: '/update/swm/paymentvendor/{code}',
      rowClickUrlView: '/view/swm/paymentvendor/{code}',
    },
},
'swm.view': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'paymentDetails',
    title: 'swm.vendorpayment.create.capturetitle',
    groups:[
      {
        name: 'vendorPayment',
        label: '',
        fields: [
          {
            name: 'vendorName',
            jsonPath: 'paymentDetails[0].vendorPaymentDetails.vendorContract.vendor.name',
            label: 'swm.vendorpayment.create.vendorName',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
            depedants: [
              {
                jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorcontracts/_search?&vendorNo={vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
              }
            ]
          },
          {
            name: 'contractno',
            jsonPath: 'paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo',
            label: 'swm.vendorpayment.create.contractno',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendorcontracts/_search?|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo',
            autoCompleteDependancy: {
              autoCompleteUrl: '/swm-services/vendorpaymentdetails/_search?paymentNo={paymentDetails[0].vendorPaymentDetails.paymentNo}',
              autoFillFields: {
                'vendorPaymentDetails[0].approvalAmmount': 'vendorPaymentDetails[0].vendorContract.contractNo',
              },
            },
          },
          {
            name: 'InvoiceNumber',
            label: 'swm.paymentvendor.create.InvoiceNumber',
            type: 'text',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.invoiceNo",
            isRequired: false,
            isDisabled: false, 
            patternErrorMsg: '',
          }
        ],
      },
    {
        fields:[
        {
            name: 'InvoiceAmount',
            label: 'swm.paymentvendor.create.InvoiceAmount',
            type: 'number',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorInvoiceAmount",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
        },
        {
          name: 'InvoiceDate',
          label: 'swm.vendorpayment.create.invoiceDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.invoiceDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
            name: 'FromDate',
            label: 'swm.paymentvendor.create.FromDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.fromDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
        },
        {
            name: 'ToDate',
            label: 'swm.paymentvendor.create.ToDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.toDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
        },
        {
          name: 'InvoiceAmount',
          label: 'swm.vendorpayment.create.amountalreadypaid',
          type: 'text',
          jsonPath: "paymentDetails[0].vendorInvoiceAmount",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
      ],  
    },
    {
        name: 'PaymentDeatails',
        label: 'swm.paymentvendor.create.PaymentDeatails',
        fields: [
        {
            name: 'VoucherNumber',
            jsonPath: 'paymentDetails[0].voucherNumber',
            label: 'swm.paymentvendor.create.VoucherNumber',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'VoucherDate',
            jsonPath: 'paymentDetails[0].voucherDate',
            label: 'swm.paymentvendor.create.VoucherDate',
            pattern: '',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'AmountPaid',
            jsonPath: 'paymentDetails[0].amount',
            label: 'swm.paymentvendor.create.AmountPaid',
            pattern: '',
            type: 'number',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'PaymentInstrument',
            jsonPath: 'paymentDetails[0].instrumentType',
            label: 'swm.paymentvendor.create.PaymentInstrument',
            pattern: '',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
            defaultValue: [
              {
                key: 'Cash',
                value: 'Cash',
              },
              {
                key: 'Cheque',
                value: 'Cheque',
              },
              {
                key: 'DD',
                value: 'DD',
              },
            ],
          },
           {
            name: 'InstrumentNumber',
            jsonPath: 'paymentDetails[0].instrumentNumber',
            label: 'swm.paymentvendor.create.InstrumentNumber',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'InstrumentDate',
            jsonPath: 'paymentDetails[0].instrumentDate',
            label: 'swm.paymentvendor.create.InstrumentDate',
            pattern: '',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BankName',
            jsonPath: 'paymentDetails[0].bankName',
            label: 'swm.paymentvendor.create.BankName',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BranchName',
            jsonPath: 'paymentDetails[0].branchName',
            label: 'swm.paymentvendor.create.BranchName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          ],
      },
    ], 
    tenantIdRequired: true,
    url: '/swm-services/paymentdetails/_search?codes={code}',
},
'swm.create': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'paymentDetails',
    idJsonPath: 'paymentDetails[0].code',
    title: 'swm.vendorpayment.create.capturetitle',
    groups:[
      {
        name: 'vendorPayment',
        label: '',
        fields: [
          {
            name: 'vendorName',
            jsonPath: 'vendorNo',
            label: 'swm.vendorpayment.create.vendorName',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
            depedants: [
              {
                jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorcontracts/_search?&vendorNo={vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
              }
            ]
          },
          {
            name: 'contractno',
            jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
            label: 'swm.vendorpayment.create.contractno',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            depedants: [
              {
                jsonPath: 'paymentDetails[0].vendorPaymentDetails.paymentNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorpaymentdetails/_search?&contractNo={vendorPaymentDetails[0].vendorContract.contractNo}|$.vendorPaymentDetails.*.paymentNo|$.vendorPaymentDetails.*.invoiceNo",
              }
            ],
          },
          {
            name : 'TransactionNumber',
            label : 'swm.paymentvendor.create.InvoiceNumber',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.paymentNo",
            type : 'singleValueList',
            isRequired: true,
            isDisabled: false,
            defaultValue:'',
            patternErrorMsg: '',
            depedants: [
              {
                jsonPath: 'paymentDetails[0].vendorPaymentDetails.paymentNo',
                type: 'autoFill',
                pattern: '/swm-services/vendorpaymentdetails/_search?&paymentNo={paymentDetails[0].vendorPaymentDetails.paymentNo}',
                autoFillFields: {
                  'paymentDetails[0].invoiceAmount':'vendorPaymentDetails[0].vendorContract.paymentAmount',
                  'paymentDetails[0].invoiceDate':'vendorPaymentDetails[0].invoiceDate',
                  'paymentDetails[0].fromDate':'vendorPaymentDetails[0].fromDate',
                  'paymentDetails[0].toDate':'vendorPaymentDetails[0].toDate',
                  'paymentDetails[0].vendorInvoiceAmount':'vendorPaymentDetails[0].vendorInvoiceAmount',
                },
              },
            ],
          },
        ],
      },
    {
      name: 'invoicedetails',
      label: 'swm.vendorpayment.create.invoicetitle',
        fields:[
        {
          name: 'InvoiceAmount',
          label: 'swm.paymentvendor.create.InvoiceAmount',
          type: 'text',
          jsonPath: "paymentDetails[0].invoiceAmount",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
          name: 'InvoiceDate',
          label: 'swm.vendorpayment.create.invoiceDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].invoiceDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
            name: 'FromDate',
            label: 'swm.paymentvendor.create.FromDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].fromDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
        },
        {
            name: 'ToDate',
            label: 'swm.paymentvendor.create.ToDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].toDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
        },
        {
            name: 'InvoiceAmount',
            label: 'swm.vendorpayment.create.amountalreadypaid',
            type: 'text',
            jsonPath: "paymentDetails[0].vendorInvoiceAmount",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
        },
        ],  
    }, 
    {
        name: 'PaymentDetails',
        label: 'swm.paymentvendor.create.PaymentDeatails',
        fields: [
        {
            name: 'VoucherNumber',
            jsonPath: 'paymentDetails[0].voucherNumber',
            label: 'swm.paymentvendor.create.VoucherNumber',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'VoucherDate',
            jsonPath: 'paymentDetails[0].voucherDate',
            label: 'swm.paymentvendor.create.VoucherDate',
            pattern: '',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'AmountPaid',
            jsonPath: 'paymentDetails[0].amount',
            label: 'swm.paymentvendor.create.AmountPaid',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'PaymentInstrument',
            jsonPath: 'paymentDetails[0].instrumentType',
            label: 'swm.paymentvendor.create.PaymentInstrument',
            pattern: '',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
            defaultValue: [
              {
                key: 'Cash',
                value: 'Cash',
              },
              {
                key: 'Cheque',
                value: 'Cheque',
              },
              {
                key: 'DD',
                value: 'DD',
              },
            ],
          },
           {
            name: 'InstrumentNumber',
            jsonPath: 'paymentDetails[0].instrumentNumber',
            label: 'swm.paymentvendor.create.InstrumentNumber',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
           {
            name: 'InstrumentDate',
            jsonPath: 'paymentDetails[0].instrumentDate',
            label: 'swm.paymentvendor.create.InstrumentDate',
            pattern: '',
            type: 'datePicker',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BankName',
            jsonPath: 'paymentDetails[0].bankName',
            label: 'swm.paymentvendor.create.BankName',
            pattern: '',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url:''
            // url: '/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=bank|$..name|$..name',
            // depedants: [
            //   {
            //     jsonPath: 'paymentDetails[0].branchName',
            //     type: 'dropDown',
            //     pattern:
            //       "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=bankBranch&filter=%5B%3F%28%40.bankName%3D%3D'{paymentDetails[0].bankName}'%29%5D|$..branch|$..branch",
            //   },
            // ],
          },
          {
            name: 'BranchName',
            jsonPath: 'paymentDetails[0].branchName',
            label: 'swm.paymentvendor.create.BranchName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          ],
      },   
    ], 
    url: '/swm-services/paymentdetails/_create',
    tenantIdRequired: true,
},
'swm.update': {
  numCols: 3,
  useTimestamp: true,
  objectName: 'paymentDetails',
  idJsonPath: 'paymentDetails[0].code',
  title: 'swm.vendorpayment.create.capturetitle',
  groups:[
    {
      name: 'vendorPayment',
      label: '',
      fields: [
        {
          name: 'vendorName',
          jsonPath: 'paymentDetails[0].vendorPaymentDetails.vendorContract.vendor.vendorNo',
          label: 'swm.vendorpayment.create.vendorName',
          type: 'singleValueList',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
          depedants: [
            {
              jsonPath: 'paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo',
              type: 'dropDown',
              pattern:
                "swm-services/vendorcontracts/_search?&vendorNo={paymentDetails[0].vendorPaymentDetails.vendorContract.vendor.vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
            }
          ]
        },
        {
          name: 'contractno',
          jsonPath: 'paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo',
          label: 'swm.vendorpayment.create.contractno',
          type: 'singleValueList',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          depedants: [
            {
              jsonPath: 'paymentDetails[0].vendorPaymentDetails.paymentNo',
              type: 'dropDown',
              pattern:
                "swm-services/vendorpaymentdetails/_search?&contractNo={paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo}|$.vendorPaymentDetails.*.paymentNo|$.vendorPaymentDetails.*.invoiceNo",
            }
          ],
        },
        {
          name : 'TransactionNumber',
          label : 'swm.paymentvendor.create.InvoiceNumber',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.paymentNo",
          type : 'singleValueList',
          isRequired: true,
          isDisabled: false,
          defaultValue:'',
          patternErrorMsg: '',
          depedants: [
            {
              jsonPath: 'paymentDetails[0].vendorPaymentDetails.vendorContract.paymentNo',
              type: 'autoFill',
              pattern: '/swm-services/vendorpaymentdetails/_search?&paymentNo={paymentDetails[0].vendorPaymentDetails.vendorContract.paymentNo}',
              autoFillFields: {
                'paymentDetails[0].invoiceAmount':'vendorPaymentDetails[0].vendorContract.paymentAmount',
                'paymentDetails[0].invoiceDate':'vendorPaymentDetails[0].invoiceDate',
                'paymentDetails[0].fromDate':'vendorPaymentDetails[0].fromDate',
                'paymentDetails[0].toDate':'vendorPaymentDetails[0].toDate',
                'paymentDetails[0].vendorInvoiceAmount':'vendorPaymentDetails[0].vendorInvoiceAmount',
              },
            },
          ],
        },
      ],
    },
  {
      fields:[
      {
          name: 'InvoiceAmount',
          label: 'swm.paymentvendor.create.InvoiceAmount',
          type: 'text',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorInvoiceAmount",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
      },
      {
        name: 'InvoiceDate',
        label: 'swm.vendorpayment.create.invoiceDate',
        type: 'datePicker',
        jsonPath: "paymentDetails[0].vendorPaymentDetails.invoiceDate",
        isRequired: false,
        isDisabled: false,
        patternErrorMsg: '',
      },
      {
          name: 'FromDate',
          label: 'swm.paymentvendor.create.FromDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.fromDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
      },
      {
          name: 'ToDate',
          label: 'swm.paymentvendor.create.ToDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.toDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
      },
      {
        name: 'InvoiceAmount',
        label: 'swm.vendorpayment.create.amountalreadypaid',
        type: 'text',
        jsonPath: "paymentDetails[0].vendorInvoiceAmount",
        isRequired: false,
        isDisabled: false,
        patternErrorMsg: '',
      },
      ],  
  }, 
  {
      name: 'PaymentDetails',
      label: 'swm.paymentvendor.create.PaymentDeatails',
      fields: [
      {
          name: 'VoucherNumber',
          jsonPath: 'paymentDetails[0].voucherNumber',
          label: 'swm.paymentvendor.create.VoucherNumber',
          pattern: '',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'VoucherDate',
          jsonPath: 'paymentDetails[0].voucherDate',
          label: 'swm.paymentvendor.create.VoucherDate',
          pattern: '',
          type: 'datePicker',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'AmountPaid',
          jsonPath: 'paymentDetails[0].amount',
          label: 'swm.paymentvendor.create.AmountPaid',
          pattern: '',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'PaymentInstrument',
          jsonPath: 'paymentDetails[0].instrumentType',
          label: 'swm.paymentvendor.create.PaymentInstrument',
          pattern: '',
          type: 'singleValueList',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
          defaultValue: [
            {
              key: 'Cash',
              value: 'Cash',
            },
            {
              key: 'Cheque',
              value: 'Cheque',
            },
            {
              key: 'DD',
              value: 'DD',
            },
          ]
        },
        {
          name: 'InstrumentNumber',
          jsonPath: 'paymentDetails[0].instrumentNumber',
          label: 'swm.paymentvendor.create.InstrumentNumber',
          pattern: '',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'InstrumentDate',
          jsonPath: 'paymentDetails[0].instrumentDate',
          label: 'swm.paymentvendor.create.InstrumentDate',
          pattern: '',
          type: 'datePicker',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'BankName',
          jsonPath: 'paymentDetails[0].bankName',
          label: 'swm.paymentvendor.create.BankName',
          pattern: '',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'BranchName',
          jsonPath: 'paymentDetails[0].branchName',
          label: 'swm.paymentvendor.create.BranchName',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        ],
    },   
  ], 
  url: '/swm-services/paymentdetails/_update',
  tenantIdRequired: true,
  searchUrl: '/swm-services/paymentdetails/_search?codes={code}',
},
};
export default dat;