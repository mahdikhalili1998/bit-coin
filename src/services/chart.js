const API_BASE = "https://api.coingecko.com/api/v3/";
const User_key = "&x_cg_demo_api_key=CG-hqyF8ytjHCvJrGgJTrfUNnh9";
const chart_api = (id) => {
  return `${API_BASE}coins/${id}/market_chart?vs_currency=usd&days=7${User_key}
    `;
};
export default chart_api;
