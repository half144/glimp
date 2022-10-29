
import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import useGetEpisodes from "../../hooks/useGetEpisodes"
import EpisodeComponent from "../EpisodeComponent"
import "./style.css"

const SerieDetails = () => {
    const [seasonNumber, setSeasonNumber] = useState(1)
    const { dataSerie, seasons } = useOutletContext()
    const { data } = useGetEpisodes(dataSerie.id, seasonNumber)

    const handleSeason = (e) => {
        setSeasonNumber(e.target.value)
    }

    return (
        <>
            <div className="serieDetails">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/original${dataSerie.backdrop_path}`} alt="" />
                </div>
                <div className="serieInfo">
                    <h1>{dataSerie.name}</h1>
                    <p>{dataSerie.overview}</p>
                    <div className="numberEps">
                        <p className="eps">{dataSerie.number_of_episodes} Episodios</p>
                        <p className="seasonsNum">{dataSerie.number_of_seasons} Temporadas</p>
                    </div>
                </div>
            </div>
            <div className="epsArea">
                <header id="epsHeader">
                    <div>
                        <h3>Episodios</h3>
                    </div>
                    <div className="seasons">
                        <select name="seasonNum" onChange={handleSeason} id="seasonNum">
                            {seasons && seasons.map(season => (
                                <option key={season.id} value={season.season_number}>{season.name}</option>
                            ))}
                        </select>
                    </div>
                </header>
                <div className="episodes">
                    {data && data.episodes.map(eps => (
                        <EpisodeComponent key={eps.id} episode={eps} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default SerieDetails