//Hook
import { useState, useEffect } from 'react'

//Data 
import moviesData from './data/movies.js'
//Css
import './App.css'

function App() {

  const [movies, setMovies] = useState(moviesData);
  const [searchedGenre, setSearchedGenre] = useState('');



  useEffect(() => {
    let result = moviesData;
    if (searchedGenre !== '') {
      console.log(searchedGenre)
      result = moviesData.filter(movie => movie.genre === searchedGenre);
    }

    setMovies(result);
  }, [searchedGenre])

  return (
    <>
      <select value={searchedGenre} onChange={e => setSearchedGenre(e.target.value)}>
        <option value="">--</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
