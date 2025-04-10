//Hook
import { useState, useEffect } from 'react'

//Data 
import moviesData from './data/movies.js'
//Css
import './App.css'

function App() {

  const [movies, setMovies] = useState(moviesData);

  return (
    <>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
