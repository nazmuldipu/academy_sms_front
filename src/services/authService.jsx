import jwtDecode from "jwt-decode";

import http from "./httpService";

const apiEndpoint = "/api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email: email,
    password: password,
  });
  http.setJwt(jwt.token);
  localStorage.setItem(tokenKey, jwt.token);
}
export function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/";
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function isAuthenticated() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return !!jwt;
  } catch (ex) {
    return null;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
  isAuthenticated,
};
