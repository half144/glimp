import BannerMovie from "../../components/BannerMovie"
import MovieRow from "../../components/MovieRow"
import Navbar from "../../components/Navbar"
import { useMovies } from "../../context/useMovies"
import "./style.css"

const Home = () => {
    const { movieGroups, bannerMovie } = useMovies()

    return (
        <div className="home">
            <div className="bannerArea">
                <Navbar />
                <BannerMovie id={bannerMovie.id} />
            </div>
            <div className="container">
                <div className="movieRowArea">
                    {movieGroups && movieGroups.map(movieGroup => (
                        <MovieRow movieGroup={movieGroup} key={movieGroup.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home