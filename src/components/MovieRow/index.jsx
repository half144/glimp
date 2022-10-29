import CardMovie from "../CardMovie"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import "./style.css"
import { useState } from "react"
import { useRef } from "react"

const MovieRow = ({ movieGroup }) => {
    const velocityScroll = 400;
    const [scrollX, setScrollX] = useState(50);
    const movieAreaRef = useRef()
    const handleLeftArrow = () => {
        let moveL = scrollX + velocityScroll;
        if (moveL > 0) {
            moveL = 50;
        }
        setScrollX(moveL);
    };
    const handleRigthArrow = () => {
        let moveR = scrollX - velocityScroll;
        let listW = movieGroup.items.length * 150;
        if (window.innerWidth - listW > moveR) {
            moveR = window.innerWidth - listW - 90;
        }
        setScrollX(moveR);
    };

    return (
        <div className="movieRowArea">
            <div className="movieRow">
                <div className="title"><h1>{movieGroup.slug}</h1></div>
                <div className="arrowLeft" onClick={handleLeftArrow}>
                    <BsArrowLeft />
                </div>
                <div className="arrowRight" onClick={handleRigthArrow}>
                    <BsArrowRight />
                </div>
                <div className="moviesArea" ref={movieAreaRef}>
                    <div className="movies" style={{
                        marginLeft: scrollX,
                        width: movieGroup.items.length * 150,
                    }}>
                        {movieGroup.items.map(movie => (
                            <CardMovie key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieRow