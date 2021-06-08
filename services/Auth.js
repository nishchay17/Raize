import axios from "axios";
import { toast } from "react-toastify";

import { URL } from "../api";
import auth from "../api/auth";

class Auth {
  async login({ password, email }) {
    try {
      const res = await axios.post(`${URL}${auth.signin}`, {
        password,
        email,
      });
      if (res.data.status === false) {
        toast.error(res.data.message);
        return undefined;
      } else {
        return res.data;
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  async signup({ password, email, name }) {
    try {
      const res = await axios.post(`${URL}${auth.signup}`, {
        password,
        email,
        name,
      });
      if (res.data.status === false) {
        toast.error(res.data.message);
        return undefined;
      } else {
        return res.data;
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
}

export default new Auth();
