import http from "./httpService";

const apiEndpoint = "api/users";

export async function register(user) {
  const { data } = await http.post(apiEndpoint, user);
  console.log(data);
  return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
};
