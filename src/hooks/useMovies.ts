import { MOVIES_FOUND } from '../__mocks__/searchMovie'
import { type Movie } from '../posterMoviesApi'

export const useMovies = (): Movie[] => {
  const movies = MOVIES_FOUND.Search

  //* This is a way to map the data from the API to the data that we want to use in our app
  //* With this we can avoid to use the data from the API directly in our app!
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return mappedMovies
}
