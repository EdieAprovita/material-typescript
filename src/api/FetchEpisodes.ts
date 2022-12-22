import axios from "axios";

const fetchEpisodes = async () => {
  const { data } = await axios.get("https://www.breakingbadapi.com/api/episodes");
  return data;
};

export default fetchEpisodes;
