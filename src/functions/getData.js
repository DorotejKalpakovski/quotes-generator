const api_url = "https://favqs.com/api/quotes/";
const options = {
  method: "GET",
  headers: {
    Authorization: `Token token=${process.env.REACT_APP_API_ACCESS_KEY}`,
  },
};

const getData = async () => {
  const res = await fetch(api_url, options);
  return res;
};

export default getData;
