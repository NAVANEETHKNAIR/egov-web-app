var dat = {
  "vehicles.search": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "",
    "url": "/swm-services/vehicles/_search",
    "groups": [
      {
        "name": "search",
        "label": "vehicles.search.title",
        "fields": [
          {
            "name": "vehicleTypeCode",
            "jsonPath": "vehicleTypeCode",
            "label": "vehicles.create.vehicleType",
            "type": "singleValueList",
            "isDisabled": false,
            "maxLength": 256,
            "patternErrorMsg": "vehicles.create.field.message.vehicleTypeCode",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=VehicleType|$..code|$..code"
          },
          {
            "name": "fuelTypeCode",
            "jsonPath": "fuelTypeCode",
            "label": "vehicles.create.fuelType",
            "type": "singleValueList",
            "isDisabled": false,
            "maxLength": 256,
            "patternErrorMsg": "vehicles.create.field.message.fuelTypeCode",
	    "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=FuelType|$..code|$..code"
          },
          {
            "name": "regNumber",
            "jsonPath": "regNumber",
            "label": "vehicles.create.regNumber",
            "type": "text",
            "isDisabled": false,
            "maxLength": 12,
            "patternErrorMsg": "vehicles.create.field.message.regNumber"
          },
          {
            "name": "engineSrNumber",
            "jsonPath": "engineSrNumber",
            "label": "vehicles.create.engineSrNumber",
            "type": "text",
            "isDisabled": false,
            "maxLength": 256,
            "patternErrorMsg": "vehicles.create.field.message.engineSrNumber"
          },
          {
            "name": "chassisSrNumber",
            "jsonPath": "chassisSrNumber",
            "label": "vehicles.create.chassisSrNumber",
            "type": "text",
            "isDisabled": false,
            "maxLength": 256,
            "patternErrorMsg": "vehicles.create.field.message.chassisSrNumber"
          },
          {
            "name": "model",
            "jsonPath": "model",
            "label": "vehicles.create.model",
            "type": "text",
            "isDisabled": false,
            "maxLength": 256,
            "patternErrorMsg": "vehicles.create.field.message.model"
          },
          {
            "name": "ulbOwnedVehicle",
            "jsonPath": "ulbOwnedVehicle",
            "label": "vehicles.create.ulbOwnedVehicle",
            "type": "checkbox",
            "isDisabled": false,
            "patternErrorMsg": "vehicles.create.field.message.ulbOwnedVehicle"
          },
          {
            "name": "vendorName",
            "jsonPath": "vendorName",
            "label": "vehicles.create.vendor",
            "type": "singleValueList",
            "isDisabled": false,
            "maxLength": 265,
            "patternErrorMsg": "vehicles.create.field.message.vendorName",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Vendor|$..name|$..name"
          },
          {
            "name": "purchaseDate",
            "jsonPath": "purchaseDate",
            "label": "vehicles.create.purchaseDate",
            "type": "datePicker",
            "isDisabled": false,
            "patternErrorMsg": "vehicles.create.field.message.purchaseDate"
          },
          {
            "name": "purchaseYear",
            "jsonPath": "purchaseYear",
            "label": "vehicles.create.purchaseYear",
            "type": "text",
            "isDisabled": false,
            "maxLength": 265,
            "patternErrorMsg": "vehicles.create.field.message.purchaseYear"
          },
          {
            "name": "insuranceNumber",
            "jsonPath": "insuranceNumber",
            "label": "vehicles.create.insuranceNumber",
            "type": "text",
            "isDisabled": false,
            "patternErrorMsg": "vehicles.create.field.message.insuranceNumber"
          },
          {
            "name": "insuranceValidityDate",
            "jsonPath": "insuranceValidityDate",
            "label": "vehicles.create.insuranceValidityDate",
            "type": "datePicker",
            "isDisabled": false,
            "patternErrorMsg": "vehicles.create.field.message.insuranceValidityDate"
          },
          {
            "name": "isUnderWarranty",
            "jsonPath": "isUnderWarranty",
            "label": "vehicles.create.isUnderWarranty",
            "type": "checkbox",
            "isDisabled": false,
            "patternErrorMsg": "vehicles.create.field.message.isUnderWarranty"
          }
        ]
      }
    ],
    "result": {
      "header": [
        {
          "label": "vehicles.search.result.vehicleType"
        },
        {
          "label": "vehicles.search.result.regNumber"
        },
        {
          "label": "vehicles.search.result.vehicleCapacity"
        },
        {
          "label": "vehicles.search.result.engineSrNumber"
        },
        {
          "label": "vehicles.search.result.numberOfPersonsReq"
        },
        {
          "label": "vehicles.search.result.chassisSrNumber"
        },
        {
          "label": "vehicles.search.result.model"
        },
        {
          "label": "vehicles.search.result.fuelType"
        },
        {
          "label": "vehicles.search.result.ulbOwnedVehicle"
        },
        {
          "label": "vehicles.search.result.vendor"
        },
        {
          "label": "vehicles.search.result.insuranceNumber"
        },
        {
          "label": "vehicles.search.result.insuranceValidityDate",
          "isDate": true
        },
        {
          "label": "vehicles.search.result.purchaseDate",
          "isDate": true
        },
        {
          "label": "vehicles.search.result.yearOfPurchase"
        },
        {
          "label": "vehicles.search.result.price"
        },
        {
          "label": "vehicles.search.result.sourceOfPurchase"
        },
        {
          "label": "vehicles.search.result.isUnderWarranty"
        },
        {
          "label": "vehicles.search.result.kilometers"
        },
        {
          "label": "vehicles.search.result.endOfWarranty"
        },
        {
          "label": "vehicles.search.result.remarks"
        }
      ],
      "values": [
        "vehicleType.code",
        "regNumber",
        "vehicleCapacity",
        "engineSrNumber",
        "numberOfPersonsReq",
        "chassisSrNumber",
        "model",
        "fuelType.code",
        "ulbOwnedVehicle",
        "vendor.name",
        "insuranceNumber",
        "insuranceValidityDate",
        "purchaseDate",
        "yearOfPurchase",
        "price",
        "sourceOfPurchase",
        "isUnderWarranty",
        "kilometers",
        "endOfWarranty",
        "remarks"
      ],
      "resultPath": "vehicles",
      "rowClickUrlUpdate": "/update/vehicles/{regNumber}",
      "rowClickUrlView": "/view/vehicles/{regNumber}"
    }
  },
  "vehicles.create": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vehicles",
    "groups": [
      {
        "name": "VehicleDetails1",
        "label": "vehicles.create.group.title.VehicleDetails1",
        "fields": [
          {
            "name": "code",
            "jsonPath": "vehicles[0].vehicleType.code",
            "label": "vehicles.create.vehicleType",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 128,
            "minLength": 1,
            "patternErrorMsg": "",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=VehicleType|$..code|$..code"
          },
          {
            "name": "regNumber",
            "jsonPath": "vehicles[0].regNumber",
            "label": "vehicles.create.regNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 12,
            "minLength": 6,
            "patternErrorMsg": ""
          },
          {
            "name": "vehicleCapacity",
            "jsonPath": "vehicles[0].vehicleCapacity",
            "label": "vehicles.create.vehicleCapacity",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "engineSrNumber",
            "jsonPath": "vehicles[0].engineSrNumber",
            "label": "vehicles.create.engineSrNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "numberOfPersonsReq",
            "jsonPath": "vehicles[0].numberOfPersonsReq",
            "label": "vehicles.create.numberOfPersonsReq",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "chassisSrNumber",
            "jsonPath": "vehicles[0].chassisSrNumber",
            "label": "vehicles.create.chassisSrNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "model",
            "jsonPath": "vehicles[0].model",
            "label": "vehicles.create.model",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "code",
            "jsonPath": "vehicles[0].fuelType.code",
            "label": "vehicles.create.fuelType",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 128,
            "minLength": 1,
            "patternErrorMsg": "",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=FuelType|$..code|$..code"
          }
        ]
      },
      {
        "name": "VehicleDetails2",
        "label": "vehicles.create.group.title.VehicleDetails2",
        "fields": [
          {
            "name": "ulbOwnedVehicle",
            "jsonPath": "vehicles[0].ulbOwnedVehicle",
            "label": "vehicles.create.ulbOwnedVehicle",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "name",
            "jsonPath": "vehicles[0].vendor.name",
            "label": "vehicles.create.vendor",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": "",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Vendor|$..name|$..name"
          }
        ]
      },
      {
        "name": "InsuranceDetails",
        "label": "vehicles.create.group.title.InsuranceDetails",
        "fields": [
          {
            "name": "insuranceNumber",
            "jsonPath": "vehicles[0].insuranceNumber",
            "label": "vehicles.create.insuranceNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "insuranceValidityDate",
            "jsonPath": "vehicles[0].insuranceValidityDate",
            "label": "vehicles.create.insuranceValidityDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "refId",
            "jsonPath": "vehicles[0].insuranceDocument.fileStoreId",
            "label": "vehicles.create.insurance.details",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "PurchaseDetails",
        "label": "vehicles.create.group.title.PurchaseDetails",
        "fields": [
          {
            "name": "purchaseDate",
            "jsonPath": "vehicles[0].purchaseDate",
            "label": "vehicles.create.purchaseDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "price",
            "jsonPath": "vehicles[0].price",
            "label": "vehicles.create.price",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "sourceOfPurchase",
            "jsonPath": "vehicles[0].sourceOfPurchase",
            "label": "vehicles.create.sourceOfPurchase",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 0,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "WarrantyDetails",
        "label": "vehicles.create.group.title.WarrantyDetails",
        "fields": [
          {
            "name": "isUnderWarranty",
            "jsonPath": "vehicles[0].isUnderWarranty",
            "label": "vehicles.create.isUnderWarranty",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "kilometers",
            "jsonPath": "vehicles[0].kilometers",
            "label": "vehicles.create.kilometers",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "endOfWarranty",
            "jsonPath": "vehicles[0].endOfWarranty",
            "label": "vehicles.create.endOfWarranty",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "remarks",
            "jsonPath": "vehicles[0].remarks",
            "label": "vehicles.create.remarks",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "maxLength": 300,
            "minLength": 15,
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "url": "/swm-services/vehicles/_create",
    "tenantIdRequired": true
  },
  "vehicles.view": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vehicles",
    "groups": [
      {
        "name": "VehicleDetails1",
        "label": "vehicles.create.group.title.VehicleDetails1",
        "fields": [
          {
            "name": "code",
            "jsonPath": "vehicles[0].vehicleType.code",
            "label": "vehicles.create.vehicleType",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 128,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "regNumber",
            "jsonPath": "vehicles[0].regNumber",
            "label": "vehicles.create.regNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 12,
            "minLength": 6,
            "patternErrorMsg": ""
          },
          {
            "name": "vehicleCapacity",
            "jsonPath": "vehicles[0].vehicleCapacity",
            "label": "vehicles.create.vehicleCapacity",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "engineSrNumber",
            "jsonPath": "vehicles[0].engineSrNumber",
            "label": "vehicles.create.engineSrNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "numberOfPersonsReq",
            "jsonPath": "vehicles[0].numberOfPersonsReq",
            "label": "vehicles.create.numberOfPersonsReq",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "chassisSrNumber",
            "jsonPath": "vehicles[0].chassisSrNumber",
            "label": "vehicles.create.chassisSrNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "model",
            "jsonPath": "vehicles[0].model",
            "label": "vehicles.create.model",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "code",
            "jsonPath": "vehicles[0].fuelType.code",
            "label": "vehicles.create.fuelType",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 128,
            "minLength": 1,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "VehicleDetails2",
        "label": "vehicles.create.group.title.VehicleDetails2",
        "fields": [
          {
            "name": "ulbOwnedVehicle",
            "jsonPath": "vehicles[0].ulbOwnedVehicle",
            "label": "vehicles.create.ulbOwnedVehicle",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "name",
            "jsonPath": "vehicles[0].vendor.name",
            "label": "vehicles.create.vendor",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "InsuranceDetails",
        "label": "vehicles.create.group.title.InsuranceDetails",
        "fields": [
          {
            "name": "insuranceNumber",
            "jsonPath": "vehicles[0].insuranceNumber",
            "label": "vehicles.create.insuranceNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "insuranceValidityDate",
            "jsonPath": "vehicles[0].insuranceValidityDate",
            "label": "vehicles.create.insuranceValidityDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "PurchaseDetails",
        "label": "vehicles.create.group.title.PurchaseDetails",
        "fields": [
          {
            "name": "purchaseDate",
            "jsonPath": "vehicles[0].purchaseDate",
            "label": "vehicles.create.purchaseDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "price",
            "jsonPath": "vehicles[0].price",
            "label": "vehicles.create.price",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "sourceOfPurchase",
            "jsonPath": "vehicles[0].sourceOfPurchase",
            "label": "vehicles.create.sourceOfPurchase",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 0,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "WarrantyDetails",
        "label": "vehicles.create.group.title.WarrantyDetails",
        "fields": [
          {
            "name": "isUnderWarranty",
            "jsonPath": "vehicles[0].isUnderWarranty",
            "label": "vehicles.create.isUnderWarranty",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "kilometers",
            "jsonPath": "vehicles[0].kilometers",
            "label": "vehicles.create.kilometers",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "endOfWarranty",
            "jsonPath": "vehicles[0].endOfWarranty",
            "label": "vehicles.create.endOfWarranty",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "remarks",
            "jsonPath": "vehicles[0].remarks",
            "label": "vehicles.create.remarks",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "maxLength": 300,
            "minLength": 15,
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "tenantIdRequired": true,
    "url": "/swm-services/vehicles/_search?regNumber={regNumber}"
  },
  "vehicles.update": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "vehicles",
    "groups": [
      {
        "name": "VehicleDetails1",
        "label": "vehicles.create.group.title.VehicleDetails1",
        "fields": [
          {
            "name": "code",
            "jsonPath": "vehicles[0].vehicleType.code",
            "label": "vehicles.create.vehicleType",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 128,
            "minLength": 1,
            "patternErrorMsg": "",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=VehicleType|$..code|$..code"
          },
          {
            "name": "regNumber",
            "jsonPath": "vehicles[0].regNumber",
            "label": "vehicles.create.regNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 12,
            "minLength": 6,
            "patternErrorMsg": ""
          },
          {
            "name": "vehicleCapacity",
            "jsonPath": "vehicles[0].vehicleCapacity",
            "label": "vehicles.create.vehicleCapacity",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "engineSrNumber",
            "jsonPath": "vehicles[0].engineSrNumber",
            "label": "vehicles.create.engineSrNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "numberOfPersonsReq",
            "jsonPath": "vehicles[0].numberOfPersonsReq",
            "label": "vehicles.create.numberOfPersonsReq",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "chassisSrNumber",
            "jsonPath": "vehicles[0].chassisSrNumber",
            "label": "vehicles.create.chassisSrNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "model",
            "jsonPath": "vehicles[0].model",
            "label": "vehicles.create.model",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "code",
            "jsonPath": "vehicles[0].fuelType.code",
            "label": "vehicles.create.fuelType",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 128,
            "minLength": 1,
            "patternErrorMsg": "",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=FuelType|$..code|$..code"
          }
        ]
      },
      {
        "name": "VehicleDetails2",
        "label": "vehicles.create.group.title.VehicleDetails2",
        "fields": [
          {
            "name": "ulbOwnedVehicle",
            "jsonPath": "vehicles[0].ulbOwnedVehicle",
            "label": "vehicles.create.ulbOwnedVehicle",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "name",
            "jsonPath": "vehicles[0].vendor.name",
            "label": "vehicles.create.vendor",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": "",
            "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Vendor|$..name|$..name"
          }
        ]
      },
      {
        "name": "InsuranceDetails",
        "label": "vehicles.create.group.title.InsuranceDetails",
        "fields": [
          {
            "name": "insuranceNumber",
            "jsonPath": "vehicles[0].insuranceNumber",
            "label": "vehicles.create.insuranceNumber",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "insuranceValidityDate",
            "jsonPath": "vehicles[0].insuranceValidityDate",
            "label": "vehicles.create.insuranceValidityDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "refId",
            "jsonPath": "vehicles[0].insuranceDocument.fileStoreId",
            "label": "vehicles.create.insurance.details",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 1,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "PurchaseDetails",
        "label": "vehicles.create.group.title.PurchaseDetails",
        "fields": [
          {
            "name": "purchaseDate",
            "jsonPath": "vehicles[0].purchaseDate",
            "label": "vehicles.create.purchaseDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "price",
            "jsonPath": "vehicles[0].price",
            "label": "vehicles.create.price",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "sourceOfPurchase",
            "jsonPath": "vehicles[0].sourceOfPurchase",
            "label": "vehicles.create.sourceOfPurchase",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "maxLength": 256,
            "minLength": 0,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "WarrantyDetails",
        "label": "vehicles.create.group.title.WarrantyDetails",
        "fields": [
          {
            "name": "isUnderWarranty",
            "jsonPath": "vehicles[0].isUnderWarranty",
            "label": "vehicles.create.isUnderWarranty",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "kilometers",
            "jsonPath": "vehicles[0].kilometers",
            "label": "vehicles.create.kilometers",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "endOfWarranty",
            "jsonPath": "vehicles[0].endOfWarranty",
            "label": "vehicles.create.endOfWarranty",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "remarks",
            "jsonPath": "vehicles[0].remarks",
            "label": "vehicles.create.remarks",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "maxLength": 300,
            "minLength": 15,
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "url": "/swm-services/vehicles/_update",
    "tenantIdRequired": true,
    "searchUrl": "/swm-services/vehicles/_search?regNumber={regNumber}"
  }
}
 export default dat;
