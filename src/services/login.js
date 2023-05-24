import axios from "axios";

export const loginService = (body) => {
  return axios.post("api/auth/login", {
    email: body.email,
    password: body.password,
  });
};
