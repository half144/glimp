import { useParams } from "react-router-dom"
import BannerMovie from "../../components/BannerMovie"
import "./style.css"

const Details = () => {
    const { id } = useParams()
    return (
        <div className="details">
            <div data-aos="zoom-in" className="bannerAreaDetails">
                <BannerMovie id={id} isFullScreen={true} />
            </div>
        </div>
    )
}
export default Details