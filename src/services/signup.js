import axios from "axios";

export const signUpService = (body) => {
  const {email, password, firstName, lastName} = body
  return axios.post("api/auth/signup", {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
};
