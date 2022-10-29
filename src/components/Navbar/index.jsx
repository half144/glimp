import { useState } from "react"
import { BsList, BsX } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./style.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleNav = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <div className="navIcon">
                {!isOpen && <BsList size={30} onClick={handleNav} />}
            </div>
            <nav style={
                {
                    "width": isOpen ? "40%" : "0px",
                    "opacity": isOpen ? "1" : "0"
                }
            }>
                <ul id="lateralNav">
                    <li onClick={handleNav}><BsX size={30} /></li>
                    <Link to="/series">
                        <li>Series</li>
                    </Link>
                </ul>
            </nav>
        </>

    )
}

export default Navbar