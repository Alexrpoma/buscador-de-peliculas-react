import { type MoviesApi } from './posterMoviesApi'
import { MOVIES_FOUND } from './__mocks__/searchMovie'
import './App.css'

interface Props {
  movies: MoviesApi
}

const MoviesFound: React.FC<Props> = ({ movies }) => {
  const moviesFound = movies.Search
  return (
    <ul>
      {
        moviesFound.map(movie => {
          return (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title}/>
              <span>{movie.Year}</span>
            </li>
          )
        })
      }
    </ul>
  )
}

function App (): JSX.Element {
  return (
    <div className="Home">
      <header>
        <h2>Find your favorite movie!</h2>
        <form className="form">
          <input placeholder="Movies.."/>
          <button>submit</button>
        </form>
      </header>
      <main>
        Here will be the movies
        <MoviesFound movies={MOVIES_FOUND}/>
      </main>
    </div>
  )
}

export default App
