import config from '../config';
import { getCookie, delCookie } from './helper';

// Auth
export function getAuthHeader(sso_token) {
  return ({
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sso_token,
      'Content-Type': 'application/json',
    },
  });
}

export function redirectLogin() {
  localStorage.clear();
  window.location.href = config.redirectUrl + window.location.origin;
}

export function redirectLoginPage() {
  window.location.href = config.redirectUrl;
}

export function authenticated() {
  console.log("authenticated");
  console.log("origin: " + window.location.origin);
  const sso_token = getCookie('sso_token');
  if (!sso_token) {
    redirectLogin();
  }
}

export function logOut() {
  delCookie({
    name: 'sso_token',
    path: '/',
    domain: '.corp.visiondk.com',
  });
  authenticated();
}

export function log1() {
    console.log("hello");
}