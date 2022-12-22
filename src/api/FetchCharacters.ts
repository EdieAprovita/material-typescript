import axios from "axios";

const fetchCharacters = async () => {
  const { data } = await axios.get("https://www.breakingbadapi.com/api/characters");
  return data;
};

export default fetchCharacters;
