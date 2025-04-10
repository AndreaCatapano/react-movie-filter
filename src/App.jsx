//Hook
import { useState, useEffect } from 'react'

//Data 
import moviesData from './data/movies.js'
//Css
import './App.css'

function App() {

  const [movies, setMovies] = useState(moviesData);
  const [searchedGenre, setSearchedGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('')



  useEffect(() => {
    console.log(searchTitle)
    let result = moviesData;
    if (searchedGenre !== '') {
      result = moviesData.filter(movie => movie.genre === searchedGenre);
    }

    setMovies(result);
  }, [searchedGenre, searchTitle])

  return (
    <>
      <div>
        <select value={searchedGenre} onChange={e => setSearchedGenre(e.target.value)}>
          <option value="">--</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <input type="text" value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />
      </div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
