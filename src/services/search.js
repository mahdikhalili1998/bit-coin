const API_BASE = "https://api.coingecko.com/api/v3/";
const User_key = "&x_cg_demo_api_key=CG-hqyF8ytjHCvJrGgJTrfUNnh9";
const Search = (text) => {
  return `${API_BASE}search?query=${text}${User_key}`;
};
export default Search;
