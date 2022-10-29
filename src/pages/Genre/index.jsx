import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import CardMovie from "../../components/CardMovie"
import { useMovies } from "../../context/useMovies"
import "./style.css"


const Genre = () => {
    const [movies, setMovies] = useState([])
    const [slug, setSlug] = useState("")
    const { genre } = useParams()
    const { movieGroups } = useMovies()

    useEffect(() => {
        const moviesByGenre = movieGroups.find(movieGroup => movieGroup.id == genre)
        setSlug(moviesByGenre.slug)
        setMovies(moviesByGenre.items)
        return () => {
            setMovies([])
        }
    }, [movieGroups, genre])

    return (
        <div className="genre">
            <div className="slugAreaGenre">
                <h1>{slug}</h1>
            </div>
            <div className="moviesByGenreArea">
                {movies && movies.map(movie => (
                    <CardMovie movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Genre