//Hook
import { useState, useEffect } from 'react'

//Data 
import moviesData from './data/movies.js'

//Css
import './App.css'

const exampleMovie = {
  title: '',
  genre: 'Fantascienza'
}

function App() {


  const [movies, setMovies] = useState(moviesData);
  const [filterdMovies, setFilterdMovies] = useState(movies)
  const [searchedGenre, setSearchedGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('')
  const [newMovies, setNewMovies] = useState(exampleMovie);



  const newMoviesSubmit = (event) => {
    event.preventDefault();
    if (newMovies.title.trim() === '') return console.error("Non sono stati inseriti dati");

    const newMoviesObject = {
      title: newMovies.title,
      genre: newMovies.genre
    };

    setMovies([...movies, newMoviesObject]);
    setNewMovies({ title: '', genre: 'Fantascienza' }); // Reset del form
  }


  useEffect(() => {
    let result = movies;
    if (searchedGenre !== '') {
      result = moviesData.filter(movie => movie.genre === searchedGenre);
    }

    if (searchTitle !== '') {
      result = result.filter(movie => {
        let movieTitle = movie.title.toLowerCase();
        let searchWord = searchTitle.toLowerCase();
        return movieTitle.includes(searchWord);
      });
    }

    setFilterdMovies(result);
  }, [searchedGenre, searchTitle, movies])

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
        {filterdMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>

      <form onSubmit={newMoviesSubmit}>
        <input
          type="text"
          placeholder="Inserisci un nuovo film..."
          value={newMovies.title}
          onChange={(e) => setNewMovies({ ...newMovies, title: e.target.value })}
        />

        <select
          value={newMovies.genre}
          onChange={(e) => setNewMovies({ ...newMovies, genre: e.target.value })}
        >
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <button>Aggiungi</button>
      </form>
    </>
  )
}

export default App
