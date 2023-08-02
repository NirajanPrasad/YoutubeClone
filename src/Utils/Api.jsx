import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//   params: {
//     hl: "en",
//     gl: "US",
//   },
//   headers: {
//     "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

// export const fetchDataFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}, options`);
//   console.log(data);
//   return data;
// };

export async function fetchDataFromApi(url) {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${url}, options`,
    params: {
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
