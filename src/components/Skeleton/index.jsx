import "./style.css"

const Skeleton = () => {


    return (
        <>
            <div className="serieDetailsSk animate">
                <div className="posterSk animate">
                </div>
                <div className="serieInfoSk animate">
                    <h1 className="serieNameSk animate"></h1>
                    <div className="serieResumeSk animate"></div>
                    <div className="serieResumeSk animate"></div>
                    <div className="serieResumeSk animate"></div>
                    <div className="numberEps">
                        <div className="epsSk animate"></div>
                        <div className="epsSk animate"></div>
                    </div>
                </div>
            </div>
            <div className="epsArea">
                <header id="epsHeader">
                    <div className="epsSk animate">
                    </div>
                    <div className="epsSk animate">
                    </div>
                </header>
                <div className="episodesSk">

                </div>
            </div>
        </>
    )
}

export default Skeleton