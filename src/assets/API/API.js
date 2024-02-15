
export const TrendingCoins = () => 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-KAoatvTcTEQBtENPveM3Nhhd';

export const SingleCoin = (id) => 'https://api.coingecko.com/api/v3/coins/${id}';