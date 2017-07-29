var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/donation/_create",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "Donation",
		"groups": [
			{
				"label": "wc.create.donation.title",
				"name": "donation",
				"fields": [
					{
						"name": "propertyType",
						"jsonPath": "Donation.propertyType",
						"label": "wc.create.propertyType",
						"pattern": "",
						"type": "singleValueList",
						"url": "/pt-property/property/propertytypes/_search?|$..name|$..name",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
          {
								"name": "CategoryType",
								"jsonPath": "Donation.category",
								"label": "wc.create.groups.connectionDetails.categoryType",
								"pattern": "",
								"type": "singleValueList",
								"isRequired": false,
								"isDisabled": false,
								"url": "/wcms/masters/categorytype/_search?|$..name|$..name",
								"requiredErrMsg": "",
								"patternErrMsg": ""
					},
          {
						"name": "UsageType",
						"jsonPath": "Donation.usageType",
						"label": "wc.create.groups.connectionDetails.usageType",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": false,
						"isDisabled": false,
						"url": "/pt-property/property/usages/_search?|$..name|$..name",
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
          {
						"name": "hscPipeSizeType",
						"jsonPath": "Donation.minPipeSize",
						"label": "Min H.S.C Pipe Size :",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": false,
						"isDisabled": false,
						"url": "/wcms/masters/pipesize/_search?|$..sizeInMilimeter|$..sizeInMilimeter",
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
          {
						"name": "hscPipeSizeType",
						"jsonPath": "Donation.maxPipeSize",
						"label": "Max H.S.C Pipe Size",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": false,
						"isDisabled": false,
						"url": "/wcms/masters/pipesize/_search?|$..sizeInMilimeter|$..sizeInMilimeter",
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
          {
            "name": "donationAmount",
            "jsonPath": "Donation.donationAmount",
            "label": "Donation Amount",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "fromDate",
            "jsonPath": "Donation.fromDate",
            "label": "From Date",
            "pattern": "",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "fromDate",
            "jsonPath": "Donation.toDate",
            "label": "To Date",
            "pattern": "",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
						"name": "Active",
						"jsonPath": "Donation.active",
						"label": "Active",
						"pattern": "",
						"type": "checkbox",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					}
				]
			}
		]
	}
}

export default dat;
