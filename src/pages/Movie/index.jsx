import { Outlet } from "react-router-dom"

const Movie = () => {

    return (
        <div className="movie">
            <Outlet />
        </div>
    )
}

export default Movie