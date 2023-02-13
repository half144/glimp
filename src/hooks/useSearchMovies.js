import { startTransition, useEffect, useState } from "react";
import { useQuery } from "react-query";

const useSearchMovies = (q) => {
  const [movies, setMovies] = useState();
  const API_BASE = "https://glimpmoviesback-production.up.railway.app/getall";

  const fetchAll = async () => {
    const res = await fetch(API_BASE);
    return await res.json();
  };

  const { data } = useQuery("getall", fetchAll);

  useEffect(() => {
    if (data) {
      startTransition(() => {
        const searchResults = data.filter((movie) =>
          movie.name.includes(String(q).toLowerCase())
        );
        setMovies(searchResults.slice(0, 25));
      });
    }
  }, [q]);

  return {
    movies,
  };
};

export default useSearchMovies;
