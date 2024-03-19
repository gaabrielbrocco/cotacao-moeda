import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
});

export default axiosInstance