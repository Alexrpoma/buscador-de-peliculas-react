import type { Error, Movie } from '../posterMoviesApi'

interface Props {
  movies: Movie[]
  error?: Error
}

const ListOfMovies: React.FC<Props> = ({ movies }) => (
  <ul className='movies'>
    {
      movies.map(movie => (
        <li className='movie' key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
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
