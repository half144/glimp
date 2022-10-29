import { startTransition, useEffect, useState } from "react";
import { useQuery } from "react-query";

const useSearchMovies = (q) => {
  const [movies, setMovies] = useState();
  const API_BASE = "http://localhost:3000/getall";

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
        setMovies(searchResults);
      });
    }
  }, [q]);

  return {
    movies,
  };
};

export default useSearchMovies;
