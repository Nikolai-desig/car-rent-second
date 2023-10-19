import axios from "axios";

// const apiUrl = "https://65083eef56db83a34d9bfdaa.mockapi.io/";
axios.defaults.baseURL = 'https://65083eef56db83a34d9bfdaa.mockapi.io/';

const getCars = async (page) => {
    try {
      const response = await axios.get(`cars/?&page=${page}&limit=8`);
      return response.data;
    } catch (e) {
      throw e.message;
    }

};

export default getCars;

// export const fetchCars = async (page) => {
//   try {
//     const response = await axios.get(`/cars/?&page=${page}&limit=8`);
//     return response.data;
//   } catch (e) {
//     throw e.message;
//   }
// };

  // try {
  //   const response = await axios.get(apiUrl, {
  //     params: {
  //       page: page,
  //       limit: carsPerPage,
  //     },
  //   });
  //   if (response.status === 200) {
  //     return response.data;
  //   } else {
  //     throw new Error(`Request failed with status ${response.status}`);
  //   }
  // } catch (error) {
  //   console.error("Error fetching data from the API:", error);
  //   throw error;
  // }
