import CardMovie from "../../components/CardMovie"
import useGetSeries from "../../hooks/useGetSeries"
import useTitle from "../../hooks/useTitle"
import "./style.css"


const Series = () => {
    const { data } = useGetSeries()

    useTitle("Series")

    return (
        <div className="series">
            <div className="headerAreaSerie">
                <h1>As melhores series</h1>
            </div>
            <div className="seriesArea">
                {data?.map(serie => (
                    <CardMovie key={serie.id} movie={serie} />
                ))}
            </div>
        </div>
    )
}

export default Series