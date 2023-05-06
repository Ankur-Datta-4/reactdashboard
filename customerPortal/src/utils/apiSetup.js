import axios from "axios";
import { toast } from "react-toastify";
import { setLoading } from "../store/features/user";
let store;
export let injectStore = (_store) => {
  store = _store;
};

const api = axios.create({
  baseURL: "http://localhost:5005/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    store?.dispatch(setLoading(true));
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => {
    store?.dispatch(setLoading(false));
    return response;
  },
  (err) => {
    store?.dispatch(setLoading(false));
    if (err.response && err.code !== "ERR_NETWORK") {
      toast(err.response.data.error, { type: "error" });
    } else if (err.request) {
      toast("Network Error", { type: "error" });
    }
    return Promise.reject(err);
  }
);

export default api;
