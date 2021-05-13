import http from "./httpService";

const apiEndpoint = "api/companies";

export const save = (object) => {
  return http.post(apiEndpoint, object);
};

export const getAll = (page = 0) => {
  const param = `page=${page}&`;
  return http.get(apiEndpoint + `?${param}`);
};

export const update = (id, object) => {
  return http.put(apiEndpoint + `/${id}`, object);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  save,
  getAll,
};
