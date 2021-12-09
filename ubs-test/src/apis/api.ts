const BASE_URL = process.env.REACT_APP_PUBLIC_URL;

export const fetchData = async (query: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/${query}`);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
