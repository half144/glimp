
import { useRef, useState, useEffect, startTransition } from "react"
import { createSearchParams, Link, useNavigate, useSearchParams } from "react-router-dom"
import { BsList, BsX } from "react-icons/bs"
import "./style.css"


const Header = () => {
    const [isOpenMobile, setIsOpenMobile] = useState(false)
    const navigate = useNavigate()

    const handleSearch = (e) => {
        startTransition(() => {
            if (e.target.value) {
                navigate({
                    pathname: "/search", search: createSearchParams({
                        q: e.target.value
                    }).toString()
                })
            } else {
                navigate("/")
            }
        })
    }

    const handleMenuMobile = () => {
        console.log(isOpenMobile)
        setIsOpenMobile(!isOpenMobile)
    }

    return (
        <header>
            <div className="menuMobile" >
                <BsList size={30} onClick={handleMenuMobile} />
            </div>
            <div className="logo">
                <Link to="/">
                    <img src="https://i.imgur.com/0f5O79O.png" alt="Logo glimp" referrerPolicy="no-referrer" />
                </Link>
            </div>
            <ul className={`navHeader ${!isOpenMobile && "inactive"}`} >
                {isOpenMobile && (
                    <BsX size={30} className="pointer" onClick={handleMenuMobile} />
                )}
                <Link to={"/genre/action"}>
                    <li>Ação</li>
                </Link>
                <Link to={"/genre/comedy"}>
                    <li>Comedia</li>
                </Link>
                <Link to={"/genre/romance"}>
                    <li>Romance</li>
                </Link>
                <Link to={"/genre/mistery"}>
                    <li>Mistério</li>
                </Link>
                <Link to={"/genre/terror"}>
                    <li>Terror</li>
                </Link>
            </ul>
            <div className="search">
                <form>
                    <input type="text" onChange={handleSearch} placeholder="Pesquisar" />
                </form>
            </div>
        </header>
    )
}

export default Header