import { useEffect } from 'react'
import './App.css'
import { useMovies } from './context/useMovies'
import Loading from './pages/Loading'
import useAOS from './hooks/useAOS'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    useAOS({ duration: 1300, once: true })
  }, [])

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
