import axios from "axios";

const fetchDeaths = async () => {
  const { data } = await axios.get("https://www.breakingbadapi.com/api/deaths");
  return data;
};

export default fetchDeaths;
