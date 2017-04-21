import axios from "axios";

axios.defaults.baseURL = "/";

export function auth(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';
  axios.defaults.withCredentials = false;
}

/**
 * Get Request Wrapper
 * @param route
 * @param params
 * @returns {AxiosPromise}
 */
export function get(route, params = {}) {
  return axios.get(route, {params});
}
/**
 * Post Request Wrapper
 * @param route
 * @param data
 * @param params
 * @returns {AxiosPromise}
 */
export function post(route, data, params = {}) {
  return axios.post(route, data, {params});
}
/**
 * Delete Request Wrapper
 * @param route
 * @param params
 * @returns {AxiosPromise}
 */
export function deleteAction(route, params = {}) {
  return axios.delete(route, {params});
}

/**
 * Update Request Wrapper
 * @param route
 * @param data
 * @param params
 * @returns {AxiosPromise}
 */
export function update(route, data, params = {}) {
  return axios.put(route, data, {params});
}

/**
 * Login User
 * @param email
 * @param password
 * @returns {AxiosPromise}
 */
export function loginUser(email, password) {
  return axios.post(`/login`, {
    email,
    password
  });
}

/**
 * Register User in a Company
 * @param email
 * @param password
 * @returns {AxiosPromise}
 */
export function registerUser(email, password) {
  return axios.post(`/register`, {
    email,
    password
  });
}
