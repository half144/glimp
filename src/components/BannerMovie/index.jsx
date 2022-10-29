import { Link } from "react-router-dom"
import useTmdb from "../../hooks/useTmdb"
import "./style.css"

const BannerMovie = ({ id, isFullScreen }) => {
    const { data, isLoading } = useTmdb(id)

    return (
        data ? (
            <div className="bannerMovie" style={{
                "backgroundImage": `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                "height": isFullScreen ? "100%" : "450px"
            }}>
                <div className="infoMovie">
                    <h1 id="movieName">{data.title}</h1>
                    <div id="overview"><p>{data.overview}</p></div>
                    <div className="buttonWatch">
                        <Link to={`/movie/${id}/watch`}>
                            <button>Assistir</button>
                        </Link>
                    </div>
                </div>
            </div>)
            :
            (<div className="bannerLoading">

            </div>)
    )

}

export default BannerMovie