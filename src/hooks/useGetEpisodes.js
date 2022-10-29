import { useQuery } from "react-query";

const useGetEpisodes = (id, season) => {
  const API_KEY = "3a5dff13eb5663c0800c091be3a9f848";

  const fetchEps = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${API_KEY}&language=pt-BR`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery(["episodes", id, season], fetchEps);
};

export default useGetEpisodes;
