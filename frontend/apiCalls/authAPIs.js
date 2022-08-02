import axios from "axios";

export const loginAPI = async (payload) => {
  try {
    const res = await axios.post("/api/login", payload);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
