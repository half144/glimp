import React from 'react'
import ReactDOM from 'react-dom/client'
import MoviesProvider from './context/useMovies'
import './index.css'
import Router from './router'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <MoviesProvider>
      <Router />
    </MoviesProvider>
  </QueryClientProvider>

)
