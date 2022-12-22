import axios from "axios";

const fetchQuote = async () => {
  const { data } = await axios.get("https://www.breakingbadapi.com/api/quotes");
  return data;
};

export default fetchQuote;
