import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Grid, Row, Col, Table, DropdownButton } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DataTable from '../common/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MetisMenu from 'react-metismenu';

import { translate } from '../common/common';
import Api from '../../api/api';

// Data Table
const $ = require('jquery');
$.DataTable = require('datatables.net');
const dt = require('datatables.net-bs');

const buttons = require('datatables.net-buttons-bs');
const constants = require('../common/constants');

require('datatables.net-buttons/js/buttons.colVis.js'); // Column visibility
require('datatables.net-buttons/js/buttons.html5.js'); // HTML 5 file export
require('datatables.net-buttons/js/buttons.flash.js'); // Flash file export
require('datatables.net-buttons/js/buttons.print.js'); // Print view button

const nameMap = {
  PT_NODUES: 'Property Tax No Dues',
  WC_NODUES: 'Water Charges No Dues',
  CREATED: 'Created',
  WATER_NEWCONN: 'New Water Connection',
  CANCELLED: 'Request Cancelled',
  REJECTED: 'Rejected',
  BPA_FIRE_NOC: 'Fire NOC',
  INPROGRESS: 'In Progress',
  APPROVED: 'Approved',
  PT_EXTRACT: 'Property Extract',
  WC_PAYTAX: 'Water Charge Tax Payment',
  PT_PAYTAX: 'Property Tax Payment',
  ESTIMATIONNOTICEGENERATED: 'Estimation Notice Generated',
  VERIFIED: 'Verified',
  ESTIMATIONAMOUNTCOLLECTED: 'Estimation Amount Collected',
  WORKORDERGENERATED: 'Work Order Generated',
  SANCTIONED: 'Sanctioned',
  TL_NEWCONN: 'New Trade License',
  PAYMENTFAILED: 'Payment Failed',
};

const content = [
  {
    icon: 'icon-class-name',
    label: 'Water',
    content: [
      {
        icon: 'icon-class-name',
        label: 'Apply for No Dues',
        to: '#/non-framework-cs/citizenServices/no-dues/search/wc',
      },
      {
        icon: 'icon-class-name',
        label: 'Apply for New Connection',
        to: '#/non-framework/citizenServices/create/fill/wc',
      },
      {
        icon: 'icon-class-name',
        label: 'Pay My Dues',
        to: '#/non-framework-cs/citizenServices/paytax/search/wc',
      },
    ],
  },
  {
    icon: 'icon-class-name',
    label: 'Property',
    content: [
      {
        icon: 'icon-class-name',
        label: 'Apply for No Dues',
        to: '#/non-framework-cs/citizenServices/no-dues/search/pt',
      },
      {
        icon: 'icon-class-name',
        label: 'Apply for Extract',
        to: '#/non-framework-cs/citizenServices/extract/search/pt',
      },
      {
        icon: 'icon-class-name',
        label: 'Pay My Dues',
        to: '#/non-framework-cs/citizenServices/paytax/search/pt',
      },
    ],
  },
  {
    icon: 'icon-class-name',
    label: 'Trade License',
    content: [
      {
        icon: 'icon-class-name',
        label: 'Apply for New License',
        to: '#/non-framework/citizenServices/tl/fill/create',
      },
    ],
  },
  {
    icon: 'icon-class-name',
    label: 'NOC',
    content: [
      {
        icon: 'icon-class-name',
        label: 'Apply for Fire NOC',
        to: '#/non-framework/citizenServices/fireNoc/fill/create',
      },
    ],
  },
  {
    icon: 'icon-class-name',
    label: 'Grievance',
    content: [
      {
        icon: 'icon-class-name',
        label: 'New Grievance',
        to: '#/pgr/createGrievance',
      },
    ],
  },
];

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '0px 32px 16px 0',
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  headerStyle: {
    fontSize: 19,
  },
  slide: {
    padding: 10,
  },
  status: {
    fontSize: 14,
    background: '#5f5c62',
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: 4,
    color: '#fff',
  },
};

const getDate = function(val) {
  var _date = new Date(Number(val));
  return ('0' + _date.getDate()).slice(-2) + '/' + ('0' + (_date.getMonth() + 1)).slice(-2) + '/' + _date.getFullYear();
};

const sR = [
  {
    tenantId: 'default',
    serviceRequestId: 'ServiceReq1',
    serviceCode: null,
    lat: null,
    lang: null,
    address: null,
    addressId: null,
    email: null,
    deviceId: null,
    accountId: null,
    firstName: null,
    lastName: null,
    phone: null,
    description: null,
    attributeValues: null,
    status: null,
    assignedTo: null,
    comments: null,
    backendServiceDetails:
      '{\n\t"RequestInfo": {\n    "apiId": "org.egov.pt",\n    "ver": "1.0",\n    "ts": 1502890899493,\n    "action": "asd",\n    "did": "4354648646",\n    "key": "xyz",\n    "msgId": "654654",\n    "requesterId": "61",\n    "authToken": "e04855b2-4378-4ade-9189-6d33b1893390",\n    "userInfo":{\n    \t"id":73\n    }\n  }\n}',
    auditDetails: null,
    action: null,
    consumerCode: null,
    applicationFee: null,
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceRequestsTwo: [],
      slideIndexOne: 0,
      slideIndex: 0,
      serviceRequests: [],
      citizenServices: [],
      selectedServiceCode: '',
      selectedServiceName: constants.LABEL_SERVICES,
      localArray: [],
      hasData: false,
      workflowResult: {},
    };
  }

  componentDidMount() {
    let { setLoadingStatus } = this.props;
    setLoadingStatus('loading');

    let current = this;
    let self = this;
    let currentUser = null;

    try {
      currentUser = JSON.parse(window.localStorage.userRequest);
    } catch (error) {
      console.log(error);
    }

    let count = 4,
      _state = {};

    const checkCountAndSetState = function(key, res) {
      _state[key] = res;
      count--;
      if (count == 0) {
        setLoadingStatus('hide');
        current.setState({ ..._state, hasData: true });
      }
    };

    if (currentUser.type === constants.ROLE_CITIZEN) {
      Api.commonApiPost('/pgr/seva/v1/_search', { userId: currentUser.id }, {}).then(
        function(res1) {
          let inboxResponse = res1;

          if (inboxResponse && inboxResponse.serviceRequests) {
            for (var i = 0; i < inboxResponse.serviceRequests.length; i++) {
              var d1 = inboxResponse.serviceRequests[i].requestedDatetime.split(' ')[0].split('-');
              var d11 = inboxResponse.serviceRequests[i].requestedDatetime.split(' ')[1].split(':');
              inboxResponse.serviceRequests[i].clientTime = new Date(d1[2], d1[1] - 1, d1[0], d11[0], d11[1], d11[2]).getTime();
            }

            inboxResponse.serviceRequests.sort(function(s1, s2) {
              var d1 = s1.requestedDatetime.split(' ')[0].split('-');
              var d11 = s1.requestedDatetime.split(' ')[1].split(':');
              var d2 = s2.requestedDatetime.split(' ')[0].split('-');
              var d22 = s2.requestedDatetime.split(' ')[1].split(':');
              if (
                new Date(d1[2], d1[1] - 1, d1[0], d11[0], d11[1], d11[2]).getTime() <
                new Date(d2[2], d2[1] - 1, d2[0], d22[0], d22[1], d22[2]).getTime()
              ) {
                return 1;
              } else if (
                new Date(d1[2], d1[1] - 1, d1[0], d11[0], d11[1], d11[2]).getTime() >
                new Date(d2[2], d2[1] - 1, d2[0], d22[0], d22[1], d22[2]).getTime()
              ) {
                return -1;
              }
              return 0;
            });

            checkCountAndSetState('serviceRequests', inboxResponse.serviceRequests);
            checkCountAndSetState('localArray', inboxResponse.serviceRequests);
          } else {
            checkCountAndSetState('serviceRequests', []);
            checkCountAndSetState('localArray', []);
          }
        },
        function(err) {
          checkCountAndSetState('serviceRequests', []);
          checkCountAndSetState('localArray', []);
        }
      );

      Api.commonApiPost('/pgr-master/serviceGroup/v1/_search', { keywords: constants.CITIZEN_SERVICES_KEYWORD }, {}).then(
        function(res2) {
          let citizenServices = res2 && res2.ServiceGroups ? res2.ServiceGroups : [];
          checkCountAndSetState('citizenServices', citizenServices);
        },
        function(err) {
          checkCountAndSetState('citizenServices', []);
        }
      );

      Api.commonApiPost('/citizen-services/v1/requests/_search', { userId: currentUser.id }, {}, null, true).then(
        function(res3) {
          if (res3 && res3.serviceReq && res3.serviceReq) {
            res3.serviceReq.sort(function(v1, v2) {
              return v1.auditDetails.createdDate > v2.auditDetails.createdDate
                ? -1
                : v1.auditDetails.createdDate < v2.auditDetails.createdDate ? 1 : 0;
            });

            checkCountAndSetState('serviceRequestsTwo', res3.serviceReq);
          } else {
            checkCountAndSetState('serviceRequestsTwo', []);
          }
        },
        function(err) {
          checkCountAndSetState('serviceRequestsTwo', []);
        }
      );
    } else {
      Api.commonApiPost('/hr-employee/employees/_search', { id: currentUser.id }, {}).then(function(res) {
        if (
          res &&
          res.Employee &&
          res.Employee[0] &&
          res.Employee[0].assignments &&
          res.Employee[0].assignments[0] &&
          res.Employee[0].assignments[0].position
        ) {
          var positions = '';
          for (var i = 0; i < res.Employee[0].assignments.length; i++) {
            positions += i == 0 ? res.Employee[0].assignments[i].position : "','" + res.Employee[0].assignments[i].position;
          }

          var bodyReq = {
            tenantId: localStorage.getItem('tenantId') || 'default',
            reportName: 'CommonInbox',
            searchParams: [{ name: 'positionId', input: positions }],
          };
          Api.commonApiPost('/report/common/_get', {}, bodyReq, null, true).then(
            function(res) {
              current.setState({ workflowResult: res, hasData: true });
            },
            function(err) {
              current.props.setLoadingStatus('hide');
              current.setState({ workflowResult: {}, hasData: false });
            }
          );
        } else {
          current.props.setLoadingStatus('hide');
          current.props.toggleSnackbarAndSetText(true, 'Something went wrong. Please try again later.');
        }
      });
    }
  }

  componentDidUpdate() {
    let self = this;
    if (this.state.hasData) {
      $('#searchTable').DataTable({
        initComplete: function(settings, json) {
          self.props.setLoadingStatus('hide');
        },
        dom: 'lBfrtip',
        buttons: [],
        aaSorting: [],
        bDestroy: true,
        language: {
          emptyTable: 'No Records',
        },
      });

      $('#requestTable').DataTable({
        dom: 'lBfrtip',
        aaSorting: [],
        buttons: [],
        bDestroy: true,
        language: {
          emptyTable: 'No Records',
        },
      });
    }
  }

  localHandleChange = string => {
    var b = this.state.serviceRequests.filter(function(item, index, array) {
      if (
        JSON.stringify(item)
          .toLowerCase()
          .match(string.toLowerCase())
      ) {
        return item;
      }
    });
    this.setState({ localArray: b });
  };

  filterCitizenServices = name => {
    this.setState({ servicesFilter: name });
  };

  handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  handleChangeOne = value => {
    this.setState({
      slideIndexOne: value,
    });
  };

  handleNavigation = (type, id) => {
    this.props.history.push(type + id);
  };

  handleRowClick = row => {
    this.props.setRoute(row[row.length - 1].replace('_url?', ''));
  };

  checkIfDate = (val, i) => {
    if (
      this.state.workflowResult &&
      this.state.workflowResult.reportHeader &&
      this.state.workflowResult.reportHeader.length &&
      this.state.workflowResult.reportHeader[i] &&
      this.state.workflowResult.reportHeader[i].type == 'epoch'
    ) {
      var _date = new Date(Number(val));
      return ('0' + _date.getDate()).slice(-2) + '/' + ('0' + (_date.getMonth() + 1)).slice(-2) + '/' + _date.getFullYear();
    } else {
      return val;
    }
  };

  loadServiceTypes = service => {
    var _this = this;
    this.props.setLoadingStatus('loading');
    Api.commonApiPost(
      '/pgr-master/service/v2/_search',
      {
        categoryId: service.id,
        keywords: constants.CITIZEN_SERVICES_KEYWORD,
      },
      {}
    ).then(function(response) {
      _this.props.setLoadingStatus('hide');
      service['types'] = response;
      _this.setState([..._this.state.citizenServices, ...service]);
    });
  };

  onClickServiceGroup = ({ code, name }) => {
    this.setState({
      servicesFilter: '',
      selectedServiceCode: code,
      selectedServiceName: name,
    });
    var service = this.state.citizenServices.find(service => service.code === code);
    if (service && !service.hasOwnProperty('types')) {
      if (name.toLowerCase() !== 'water connection')
        //water connection hardcoded values
        this.loadServiceTypes(service);
      else
        service['types'] = [
          {
            id: 170,
            serviceName: 'Apply New Water Connection',
            serviceCode: 'CWCW',
            description: 'Apply New Water Connection',
            url: '/create/wc',
          },
        ];
    }
  };

  onBackFromServiceType() {
    this.setState({
      servicesFilter: '',
      selectedServiceCode: '',
      selectedServiceName: translate(constants.LABEL_SERVICES),
    });
  }

  rowClickHandler = item => {
    if (['WATER_NEWCONN', 'BPA_FIRE_NOC', 'TL_NEWCONN'].indexOf(item.serviceCode) > -1 && item.status == 'PAYMENTFAILED') {
    } else if (item.serviceCode == 'WATER_NEWCONN') {
      this.props.setRoute('/non-framework/citizenServices/view/update/wc/' + encodeURIComponent(item.serviceRequestId));
    } else if (item.serviceCode == 'BPA_FIRE_NOC') {
      this.props.setRoute('/non-framework/citizenServices/fireNoc/update/view/' + encodeURIComponent(item.serviceRequestId) + '/success');
    } else if (item.serviceCode == 'WC_NODUES' && item.status == 'No Dues Generated') {
      this.props.setRoute(`/receipt/watercharge/nodues/${encodeURIComponent(item.consumerCode)}/${encodeURIComponent(item.serviceRequestId)}`);
    } else if (item.serviceCode == 'PT_NODUES' && item.status == 'No Dues Generated') {
      this.props.setRoute(`/receipt/propertytax/nodues/${encodeURIComponent(item.consumerCode)}/${encodeURIComponent(item.serviceRequestId)}`);
    } else if (item.serviceCode == 'PT_EXTRACT' && item.status == 'Extract Generated') {
      this.props.setRoute(`/receipt/extract/nodues/${encodeURIComponent(item.consumerCode)}/${encodeURIComponent(item.serviceRequestId)}`);
    } else if (item.serviceCode == 'PT_PAYTAX' && item.status == 'No Dues Generated') {
      this.props.setRoute(`/receipt/propertytax/paytax/${encodeURIComponent(item.consumerCode)}/${encodeURIComponent(item.serviceRequestId)}`);
    } else if (item.serviceCode == 'WC_PAYTAX' && item.status == 'No Dues Generated') {
      this.props.setRoute(`/receipt/watercharge/paytax/${encodeURIComponent(item.consumerCode)}/${encodeURIComponent(item.serviceRequestId)}`);
    } else if (item.serviceCode == 'TL_NEWCONN') {
      this.props.setRoute('/non-framework/citizenServices/tl/update/view/' + encodeURIComponent(item.serviceRequestId) + '/success');
    }
  };

  render() {
    //filter citizen services
    let servicesMenus = [];
    let serviceTypeMenus = [];
    let { serviceRequestsTwo } = this.state;

    if (!this.state.selectedServiceCode)
      servicesMenus = this.state.citizenServices.filter(
        service => !this.state.servicesFilter || service.name.toLowerCase().indexOf(this.state.servicesFilter.toLowerCase()) > -1
      );
    else {
      var service = this.state.citizenServices.find(service => service.code === this.state.selectedServiceCode);
      if (service) {
        var types = [];
        if (service.hasOwnProperty('types'))
          types = service.types.filter(
            type => !this.state.servicesFilter || type.serviceName.toLowerCase().indexOf(this.state.servicesFilter.toLowerCase()) > -1
          );
        serviceTypeMenus = [...types];
      }
    }

    let { workflowResult } = this.state;
    let { handleRowClick, checkIfDate } = this;
    const renderBody = () => {
      return this.state.localArray.map((e, i) => {
        var triColor = '#000';
        e.attribValues.map((item, index) => {
          if (item.key == 'PRIORITY') {
            switch (item.name) {
              case 'PRIORITY-1':
                triColor = '#ff0000';
                break;
              case 'PRIORITY-2':
                triColor = '#00ff00';
                break;
              case 'PRIORITY-3':
                triColor = '#ffff00';
                break;
            }
          }
        });

        return (
          <tr
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.handleNavigation('/pgr/viewGrievance/', encodeURIComponent(e.serviceRequestId));
            }}
          >
            <td>{i + 1}</td>
            <td style={{ minWidth: 120 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 50,
                  backgroundColor: triColor,
                  display: 'inline-block',
                  marginRight: 5,
                }}
              />
              {e.serviceRequestId}
            </td>
            <td>
              <span style={{ display: 'none' }}>{e.clientTime}</span>
              {e.requestedDatetime}
            </td>
            <td>{e.firstName}</td>
            <td>
              {e.attribValues &&
                e.attribValues.map((item, index) => {
                  if (item['key'] == 'keyword') return item['name'] && item['name'].toLowerCase() == 'complaint' ? 'Grievance' : 'Service';
                })}
            </td>
            <td>
              {e.attribValues &&
                e.attribValues.map((item, index) => {
                  if (item.key == 'systemStatus') {
                    return item.name;
                  }
                })}
            </td>
            <td style={{ maxWidth: 300 }}>
              {' '}
              Complaint No. {e.serviceRequestId} regarding {e.serviceName} in{' '}
              {e.attribValues &&
                e.attribValues.map((item, index) => {
                  if (item.key == 'systemStatus') {
                    return item.name;
                  }
                })}{' '}
            </td>
          </tr>
        );
      });
    };

    var { currentUser } = this.props;

    return (
      <div className="Dashboard">
        {currentUser && currentUser.type == constants.ROLE_CITIZEN ? (
          <div>
            <Grid>
              <Row>
                <Col md={2}>
                  <MetisMenu content={content} activeLinkFromLocation />
                </Col>

                <Col md={10}>
                  <br />
                  <Card>
                    <CardHeader title={translate('service.requests')} />
                    <CardText>
                      <Table id="requestTable">
                        <thead>
                          <tr>
                            <th>Service Request No.</th>
                            <th>Service Name</th>
                            <th>Status</th>
                            <th>Applied On</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {serviceRequestsTwo.map((item, key) => {
                            if (
                              item.status != 'CREATED' ||
                              (item.status == 'CREATED' && ['BPA_FIRE_NOC', 'WATER_NEWCONN', 'TL_NEWCONN'].indexOf(item.serviceCode) > -1)
                            ) {
                              return (
                                <tr
                                  key={key}
                                  onClick={() => {
                                    this.rowClickHandler(item);
                                  }}
                                >
                                  <td>{item.serviceRequestId}</td>
                                  <td>{nameMap[item.serviceCode] || item.serviceCode}</td>
                                  <td>{nameMap[item.status] || item.status}</td>
                                  <td>{item.auditDetails ? getDate(item.auditDetails.createdDate) : '-'}</td>
                                  {
                                    <td>
                                      <i className="material-icons">cloud_download</i>
                                    </td>
                                  }
                                </tr>
                              );
                            }
                          })}
                        </tbody>
                      </Table>
                    </CardText>
                  </Card>
                  <br />

                  <Card>
                    <CardHeader title={translate('pgr.lbl.grievance.citizen')} />
                    <CardText>
                      <Table id="searchTable" style={{ color: 'black', fontWeight: 'normal' }} bordered responsive className="table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>{translate('pgr.grievanceno')}</th>
                            <th>{translate('pgr.grievanceDate')}</th>
                            <th>{translate('pgr.grievanceSender')}</th>
                            <th>{translate('pgr.grievanceNOW')}</th>
                            <th>{translate('pgr.grievanceStatus')}</th>
                            <th>{translate('pgr.grievanceComments')}</th>
                          </tr>
                        </thead>
                        <tbody>{renderBody()}</tbody>
                      </Table>
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </Grid>
          </div>
        ) : (
          <Card className="uiCard">
            <CardHeader title={<div style={styles.headerStyle}>{translate('deshboard.title')}</div>} />
            <CardText>
              <Grid style={{ paddingTop: '0' }}>
                <Row>
                  <div className="col-md-12">
                    <Table id="searchTable" style={{ color: 'black', fontWeight: 'normal' }} bordered responsive className="table-striped">
                      <thead>
                        <tr>
                          {workflowResult.hasOwnProperty('reportHeader') &&
                            workflowResult.reportHeader.map((item, i) => {
                              if (item.name != 'url') return <th key={i}>{translate(item.label)}</th>;
                            })}
                        </tr>
                      </thead>
                      <tbody>
                        {workflowResult.hasOwnProperty('reportData') &&
                          workflowResult.reportData.map((item, i) => {
                            return (
                              <tr
                                key={i}
                                onClick={() => {
                                  handleRowClick(item);
                                }}
                              >
                                {item.map((item1, i2) => {
                                  if (!/_url\?/.test(item1)) return <td key={i2}>{checkIfDate(item1, i2)}</td>;
                                })}
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </div>
                </Row>
              </Grid>
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

const ServiceMenu = ({ service, onClick }) => {
  return (
    <Col md={4} sm={4} lg={4} xs={12}>
      <div className="service-menu-item disable-selection">
        <ListItem
          primaryText={<div className="ellipsis">{service.name}</div>}
          secondaryText={service.description}
          onTouchTap={() => {
            onClick(service);
          }}
        />
      </div>
    </Col>
  );
};

const ServiceTypeItem = ({ serviceType, onClick }) => {
  return (
    <Col md={4} sm={4} lg={4} xs={12}>
      <div className="service-menu-item disable-selection">
        <ListItem primaryText={serviceType.serviceName} secondaryText={serviceType.description} onClick={onClick} />
      </div>
    </Col>
  );
};

const mapStateToProps = state => ({
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  toggleSnackbarAndSetText: (snackbarState, toastMsg) => {
    dispatch({ type: 'TOGGLE_SNACKBAR_AND_SET_TEXT', snackbarState, toastMsg });
  },
  setLoadingStatus: loadingStatus => {
    dispatch({ type: 'SET_LOADING_STATUS', loadingStatus });
  },
  setRoute: route => dispatch({ type: 'SET_ROUTE', route }),
  login: (error, token, userRequest, doNotNavigate) => {
    let payload = {
      access_token: token,
      UserRequest: userRequest,
      doNotNavigate: doNotNavigate,
    };
    dispatch({ type: 'LOGIN', error, payload });
  },
  setActionList: actionList => {
    dispatch({ type: 'SET_ACTION_LIST', actionList });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
