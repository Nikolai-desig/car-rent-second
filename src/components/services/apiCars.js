import axios from "axios";

axios.defaults.baseURL = "https://65083eef56db83a34d9bfdaa.mockapi.io";

export const getCars = async() => {
  const response = await axios.get(`/cars`);
  return response.data;
}
