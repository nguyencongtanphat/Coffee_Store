import axios from "axios";
import { toast } from "react-toastify";

export const successNoti = (text) => {
  toast.success(`${text || "Default Message"}`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export const errorNoti = (text)=>{
  toast.error(`${text || "Default Message"}`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const HttpService = {
  //appUrl: "https://coffeestorebe-production.up.railway.app",
  appUrl: "http://127.0.0.1:8000",
};

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: HttpService.appUrl,
    timeout: 30000,
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  });
};

const FormatterService = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export { FormatterService };
export default HttpService;


