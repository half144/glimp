import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loading from "../pages/Loading"
import Search from "../pages/Search"
import Details from "../pages/Details"
import Home from "../pages/Home"
import Serie from "../pages/Serie"
import App from "../App"
import Series from "../pages/Series"

const SerieDetails = lazy(() => import("../components/SerieDetails"))
const Genre = lazy(() => import("../pages/Genre"))
const Watch = lazy(() => import("../pages/Watch"))
const Movie = lazy(() => import("../pages/Movie"))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<App />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/genre/:genre" element={<Genre />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/serie/:id" element={<Serie />}>
                            <Route path="details" element={<SerieDetails />} />
                            <Route path="watch" element={<Watch />} />
                        </Route>
                        <Route path="/series" element={<Series />} />
                    </Route>
                    <Route path="/movie/:id" element={<Movie />}>
                        <Route path="watch" element={<Watch />} />
                        <Route path="details" element={<Details />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router