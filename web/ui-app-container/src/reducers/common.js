let actions = window.localStorage.getItem('actions');
try {
  actions = JSON.parse(actions);
} catch (error) {
  actions = [];
}

const defaultState = {
  appName: 'common',
  token: null,
  viewChangeCounter: 0,
  route: '',
  complaintsLength: 0,
  pleaseWait: false,
  showMenu: false,
  actionList: actions,
  showHome: false,
  tenantInfo: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        token: action.token || null,
        currentUser: action.payload ? action.payload.UserRequest : null,
      };

    case 'SET_TENANT_INFO':
      return {
        ...state,
        tenantInfo: action.tenantInfo,
      };
    case 'REDIRECT':
      return { ...state, redirectTo: null };
    case 'LOGOUT':
      window.location.replace('/');
      return {
        ...state,
        token: null,
        currentUser: null,
        showMenu: false,
        actionList: [],
      };
    case 'FORCE_LOGOUT':
      return { token: null, showMenu: false, showHome: false };
    case 'SETTINGS_SAVED':
      return {
        ...state,
        redirectTo: action.error ? null : '/prd/dashboard',
        currentUser: action.error ? null : action.payload.UserRequest,
      };
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        redirectTo: action.error || action.doNotNavigate ? null : '/loadComponent?url=/prd/dashboard',
        token: action.error ? null : action.payload.access_token,
        currentUser: action.error ? null : action.payload.UserRequest,
      };
    case 'HOME_PAGE_UNLOADED':
    case 'PROFILE_PAGE_UNLOADED':
    case 'LOGIN_PAGE_UNLOADED':
    case 'REGISTER_PAGE_UNLOADED':
      return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
    case 'SET_ROUTE':
      return {
        ...state,
        route: action.route,
        redirectTo: action.route,
      };
    case 'SET_HOME':
      return {
        ...state,
        showHome: action.showHome,
      };
    case 'GET_LENGTH':
      return {
        ...state,
        complaintsLength:
          action.payload && action.payload.service_requests && action.payload.service_requests.length
            ? action.payload.service_requests.length
            : 10789,
      };
    case 'PLEASE_WAIT':
      return {
        ...state,
        pleaseWait: action.pleaseWait,
      };
    case 'MENU_TOGGLE':
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    case 'MENU_DONT_TOGGLE':
      return {
        ...state,
        showMenu: action.state,
      };

    case 'SET_ACTION_LIST':
      return {
        ...state,
        actionList: action.actionList,
      };
    default:
      return state;
  }
};
