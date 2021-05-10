import http from "./httpService";

const apiEndpoint = "api/users";

export async function register(user) {
  const { data } = await http.post(apiEndpoint, user);
  return data;
}

export const getAll = (page = 0) => {
  const param = `page=${page}&`;
  return http.get(apiEndpoint + `?${param}`);
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  getAll,
};
