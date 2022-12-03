const api_url = "https://api.agify.io/";

const getAge = async (authors) => {
  const searchParameter = authors.reduce((prev, curr) => {
    const name = curr.split(" ")[0];
    return prev.concat(`name[]=${name}&`);
  }, "?");
  const res = await fetch(
    api_url + searchParameter.substring(0, searchParameter.length - 1)
  );
  if (!res.ok) {
    throw new Error(`HTTP error: status: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

export default getAge;
