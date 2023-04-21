import type { Search, Error } from '../posterMoviesApi'

interface Props {
  movies: Search[]
  error?: Error
}

const ListOfMovies: React.FC<Props> = ({ movies }) => (
  <ul>
    {
      movies.map(movie => (
        <li key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))
    }
  </ul>
)

interface PropsError {
  error?: Error
}

const RenderNoResults: React.FC<PropsError> = ({ error }) => (
  error === undefined
    ? <p>Not movie found!</p>
    : <p>{error.Error}</p>
)

export const Movies: React.FC<Props> = ({ movies, error }) => {
  const thereAreMovies = movies?.length > 0
  return (
    thereAreMovies
      ? <ListOfMovies movies={movies} />
      : <RenderNoResults error={error}/>
  )
}
