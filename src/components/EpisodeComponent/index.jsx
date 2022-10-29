import { Link } from "react-router-dom"
import "./style.css"


const EpisodeComponent = ({ episode }) => {
    return (
        <Link data-aos="fade-up" className="episodeComponent" to={`/serie/${episode.id}/watch`}>
            <div className="posterEpisode">
                <img src={`https://image.tmdb.org/t/p/original${episode.still_path}`} alt="" />
            </div>
            <div className="episodeInfo">
                <h2>{episode.name}</h2>
                <p class="epOverview">{episode.overview}</p>
            </div>
        </Link>


    )
}

export default EpisodeComponent
