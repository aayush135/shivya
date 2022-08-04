import axios from "axios";

export const loginAPI = async (payload) => {
  try {
    const res = await axios.post("/api/login", payload);

    console.log(res);
    return res
  } catch (err) {
    console.log(err);
  }
};

export const getUserAPI = async (payload) => {
  try {
    const res = await axios.get("/api/user");

    console.log(res);
    return res
  } catch (err) {
    console.log(err);
  }
};
