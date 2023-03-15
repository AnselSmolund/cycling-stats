import axios from "axios";

export const getTopRiders = async () => {
  const result = await axios
    .get("http://127.0.0.1:5000/top-riders")
    .then((res) => {
      return res.data;
    });

  return Promise.resolve(result);
};
