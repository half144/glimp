import "./style.css"
import { Link } from "react-router-dom"

const CardMovie = ({ movie }) => {

    return (
        <div className="cardMovie">
            <Link to={`/${movie.type || "movie"}/${movie.id}/details`}>
                <img src={movie.poster}
                    alt={movie.name} />
            </Link>
        </div>
    )
}

export default CardMovie