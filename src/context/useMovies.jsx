import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react"

const MoviesContext = createContext()

export const useMovies = () => useContext(MoviesContext)

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "loadMovies":
            return action.payload;
        default:
            return state;
    }
};

const MoviesProvider = ({ children }) => {
    const [movieGroups, dispatch] = useReducer(reducer, initialState);
    const [bannerMovie, setBannerMovie] = useState({});
    const API_BASE = "http://localhost:3000";

    useEffect(() => {
        const fetchMovies = async () => {
            const action = await fetch(`${API_BASE}/action`).then((res) =>
                res.json()
            );
            const romance = await fetch(`${API_BASE}/romance`).then((res) =>
                res.json()
            );
            const adventure = await fetch(`${API_BASE}/adventure`).then((res) =>
                res.json()
            );
            const crime = await fetch(`${API_BASE}/crime`).then((res) => res.json());
            const comedy = await fetch(`${API_BASE}/comedy`).then((res) =>
                res.json()
            );
            const drama = await fetch(`${API_BASE}/drama`).then((res) => res.json());
            const mistery = await fetch(`${API_BASE}/mistery`).then((res) =>
                res.json()
            );
            const terror = await fetch(`${API_BASE}/terror`).then((res) =>
                res.json()
            );
            const fantasy = await fetch(`${API_BASE}/fantasy`).then((res) =>
                res.json()
            );
            dispatch({
                type: "loadMovies",
                payload: [
                    {
                        id: "action",
                        slug: "Ação",
                        items: action,
                    },
                    {
                        id: "romance",
                        slug: "O amor está no ar",
                        items: romance,
                    },
                    {
                        id: "comedy",
                        slug: "Pra morrer de rir",
                        items: comedy,
                    },
                    {
                        id: "adventure",
                        slug: "Aventuras incriveis",
                        items: adventure,
                    },
                    {
                        id: "crime",
                        slug: "Filmes sobre crime",
                        items: crime,
                    },
                    {
                        id: "drama",
                        slug: "Drama",
                        items: drama,
                    },
                    {
                        id: "mistery",
                        slug: "Hora de resolver o misterio",
                        items: mistery,
                    },
                    {
                        id: "terror",
                        slug: "Pra não dormir mais a noite",
                        items: terror,
                    },
                    {
                        id: "fantasy",
                        slug: "O melhor da fantasia",
                        items: fantasy,
                    },
                ],
            });
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        if (movieGroups.length > 1) {
            const randomMovie = movieGroups[0].items[Math.floor(Math.random() * 80)];
            setBannerMovie(randomMovie);
        }
    }, [movieGroups]);

    return (
        <MoviesContext.Provider value={{ movieGroups, bannerMovie }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider