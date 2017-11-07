var dat = {
  "legal.update": {
    numCols: 12 / 3,
    title:"vakalatnama.create.document.title",
     searchUrl:
      "/lcms-services/legalcase/case/_search?code={id}",
    url:
      "/lcms-services/legalcase/case/_vakalatnamageneration",
    tenantIdRequired: true,
    useTimestamp: true,
    objectName: "vakalatnama",
    groups: [
      {
        label: "legal.vakalatnama.create.group.title.generateVakalatnama",
        name: "Vakalatnama",
        fields: [
          {
            name: "caseNumber",
            jsonPath: "cases[0].code",
            label: "legal.vakalatnama.create.caseNumber",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "referenceCaseNumber",
            jsonPath: "cases[0].caseRefernceNo",
            label: "legal.vakalatnama.create.referenceCaseNumber",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "summonWarrantReferenceNumber",
            jsonPath: "cases[0].summon.summonReferenceNo",
            label: "legal.vakalatnama.create.summon_WarrantReferenceNumber",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "exhibitNumber",
            jsonPath: "exhibitNumber",
            label: "legal.vakalatnama.create.exhibitNumber",
            pattern: "",
            type: "text",
            isRequired: false,
            isDisabled: true,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
           {
            name: "departmentName",
            jsonPath: "cases[0].summon.departmentName.id",
            label: "legal.create.departmentName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url: "/egov-common-masters/departments/_search?|$..id|$..name",
            depedants: [
              {
                jsonPath: "cases[0].departmentPerson",
                type: "dropDown",
                pattern:
                  "/hr-employee/employees/_search?tenantId=default&departmentId={cases[0].summon.departmentName.id}|$..name|$..name"
              }
            ]
          },
          {
            name: "chiefOfficerDetails",
            jsonPath: "cases[0].coName",
            label: "legal.vakalatnama.create.chiefOfficerDetails",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "vakalatnamDate",
            jsonPath: "cases[0].vakalatnamaGenerationDate",
            label: "legal.vakalatnama.create.vakalatnamaDate",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "courtName",
            jsonPath: "cases[0].summon.courtName.code",
            label: "legal.create.courtName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
          },
          {
            name: "addWitness",
            jsonPath: "cases[0].witness",
            label: "legal.vakalatnama.create.addWitness",
            pattern: "",
            type: "arrayText",
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "GenerateVakalatnama",
            jsonPath: "cases[0].isVakalatnamaGenerated",
            label: "legal.vakalatnama.create.generateVakalatnama",
            pattern: "",
            type: "checkbox",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "",
            "enableDisableFields": [{
								"ifValue": true,
								"disable": [],
								"enable": ["exhibitNumber"]
							}]
          }
        ]
      }, {
        name: "assignAdvocate",
        label: "legal.create.group.title.assignAdvocate",
        fields: [
          {
            type: "tableList",
            jsonPath: "cases[0].summon.advocateDetails",
            tableList: {
              header: [
                {
                  label: "legal.create.advocateName"
                },
                {
                  label: "legal.create.advocateAssignDate"
                },
                {
                  label: "legal.create.advocateFee"
                }
              ],
              values: [
                {
                  name: "advocateName",
                  pattern: "",
                  type: "singleValueList",
                  jsonPath: "cases[0].advocateDetails[0].advocate.code",
                  isRequired: true,
                  isDisabled: false,
                  url:
                    "/lcms-services/legalcase/advocate/_search?|$..code|$..name"
                },
                {
                  name: "advocateAssignDate",
                  pattern: "",
                  type: "datePicker",
                  jsonPath: "cases[0].advocateDetails[0].assignedDate",
                  isRequired: true,
                  isDisabled: false
                },
                {
                  name: "advocateFee",
                  pattern: "",
                  type: "text",
                  jsonPath: "cases[0].advocateDetails[0].fee",
                  isRequired: true,
                  isDisabled: false
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

export default dat;
