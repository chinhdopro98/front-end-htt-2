import { IPayload } from "@/type/auth.interface";
import axiosConfig from "../axios.config";

export const AuthAPI = {
  login: async ({ username, password }: IPayload) => {
    try {
      const response = await axiosConfig.post("/auth/login", {
        username,
        password,
      });

      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
    } catch (error) {
      return error;
    }
  },
};
