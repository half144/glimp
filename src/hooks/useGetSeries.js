import { useQuery } from "react-query";

const useGetSeries = () => {
  const API_BASE = "https://glimpmovies.herokuapp.com";

  const getSeries = async () => {
    try {
      const res = await fetch(`${API_BASE}/series`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery("series", getSeries);
};

export default useGetSeries;
