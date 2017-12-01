import axios from 'axios';

import { getRedirectPath } from '../utils';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOGOUT = 'LOGOUT';
const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  type: '',
};

// reducer
export function user(state = initState, action) {
  switch(action.type) {
    case AUTH_SUCCESS:
      return { ...state, redirectTo: getRedirectPath(action.payload), msg: '', ...action.payload };
    case REGISTER_SUCCESS:
      return { ...state, isAuth: true, redirectTo: getRedirectPath(action.payload), msg: '', ...action.payload };
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, redirectTo: getRedirectPath(action.payload), msg: '', ...action.payload };
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...initState, redirectTo: '/login' };
    default:
      return state;
  }
}

// action
export function register({ user, pwd, repeatPwd, type }) {
  if (!user || !pwd ||!repeatPwd || !type) {
    return errorMsg('用户名、密码必须输入');
  }

  if (pwd !== repeatPwd) {
    return errorMsg('密码输入不一致');
  }

  return dispatch => {
    axios.post('/user/register', { user, pwd, type })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({ user, pwd, type }));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      });
  };
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名、密码不能为空');
  }

  return dispatch => {
    axios.post('/user/login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      });
  };
}

export function update(data) {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      })
  }
}

function authSuccess(obj) {
  const {pwd, ...data} = obj;
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
}

function registerSuccess(obj) {
  const {pwd, ...data} = obj;
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG };
}

function loginSuccess(obj) {
  const {pwd, ...data} = obj;
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loadData(userInfo) {
  return {
    type: LOAD_DATA,
    payload: userInfo,
  }
}

export function logoutSubmit() {
  return {
    type: LOGOUT,
  }
}