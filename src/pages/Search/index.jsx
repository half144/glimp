import { useSearchParams } from "react-router-dom"
import CardMovie from "../../components/CardMovie"
import useSearchMovies from "../../hooks/useSearchMovies"
import useTitle from "../../hooks/useTitle"
import "./style.css"


const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const { movies } = useSearchMovies(query)

    useTitle(`Pesquisar`)

    return (
        <div className="searchArea">
            <div className="moviesBySearchArea">
                {movies?.map(movie => (
                    <CardMovie movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Search