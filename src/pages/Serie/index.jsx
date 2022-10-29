import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import Skeleton from "../../components/Skeleton"
import useGetSerie from "../../hooks/useGetSerie"
import useTitle from "../../hooks/useTitle"
import "./style.css"

const Serie = () => {
    const { id } = useParams()
    const { query, seasons } = useGetSerie(id)

    useTitle(`${query.data?.name || ""}`)

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, [query]);

    return (
        <div className="serie">
            {query.isLoading ? <Skeleton /> : <Outlet context={{ dataSerie: query.data, seasons }} />}
        </div>
    )
}

export default Serie