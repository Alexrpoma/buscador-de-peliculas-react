import type { Error, Movie } from '../posterMoviesApi'

interface Props {
  movies: Movie[] | undefined
  error?: Error
}

const ListOfMovies: React.FC<Props> = ({ movies }) => (
  <ul className='movies'>
    {
      movies?.map(movie => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
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
    ? <p>Search for a movie!</p>
    : <p style={{ color: 'red' }}>{error as string}</p>
)

export const Movies: React.FC<Props> = ({ movies, error }) => {
  return (
    movies !== undefined && movies.length > 0
      ? <ListOfMovies movies={movies} />
      : <RenderNoResults error={error}/>
  )
}
