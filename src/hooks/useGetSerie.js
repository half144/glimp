import { useState } from "react";
import { useQuery } from "react-query";

const useGetSerie = (id) => {
  const [seasons, setSeasons] = useState([]);
  const API_KEY = "3a5dff13eb5663c0800c091be3a9f848";

  const getDataFromTmdb = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/find/${id}?api_key=${API_KEY}&external_source=imdb_id&language=pt-BR`
      );
      const data = await res.json();
      const idTmdb = data.tv_results[0].id;
      const resTmdb = await fetch(
        `https://api.themoviedb.org/3/tv/${idTmdb}?api_key=${API_KEY}&language=pt-BR`
      ).then((res) => res.json());
      if (resTmdb.seasons[0].name === "Especiais") {
        setSeasons(resTmdb.seasons.slice(1, resTmdb.number_of_seasons + 1));
      } else {
        setSeasons(resTmdb.seasons);
      }
      return resTmdb;
    } catch (error) {
      console.log(error);
    }
  };

  const query = useQuery(["serie", id], getDataFromTmdb);

  return {
    query,
    seasons,
  };
};

export default useGetSerie;
