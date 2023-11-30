const API_BASE = "https://api.coingecko.com/api/v3/";
const User_key = "&x_cg_demo_api_key=CG-hqyF8ytjHCvJrGgJTrfUNnh9";
const apiMaker = () => {
  return `${API_BASE}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en${User_key}`;
};
export default apiMaker;
