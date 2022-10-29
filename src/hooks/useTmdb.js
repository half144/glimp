import { useQuery } from "react-query";

const useTmdb = (id) => {
  const API_KEY = "3a5dff13eb5663c0800c091be3a9f848";

  const getDataFromTmdb = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/find/${id}?api_key=${API_KEY}&external_source=imdb_id&language=pt-BR`
      );
      const data = await res.json();
      return data.movie_results[0];
    } catch (error) {
      console.log(error);
      setDataMovie("");
    }
  };

  return useQuery(["dataSerie", id], getDataFromTmdb);
};

export default useTmdb;
