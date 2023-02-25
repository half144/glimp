import { useParams } from "react-router-dom"
import "./style.css"

const Watch = () => {
    const { id } = useParams()

    return (
        <div className="movie">
            <iframe data-aos="zoom-in" src={`https://embedder.net/e/${id}`} width="100%" allowFullScreen="allowFullScreen" height="100%" frameBorder="0" />
        </div>
    )
}

export default Watch
