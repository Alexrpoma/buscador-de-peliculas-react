import { type MoviesApi, type Movie, type Error } from '../posterMoviesApi'

interface Search {
  search: string
}

interface Response {
  movies: Movie[]
  error: Error
}

export const searchMovies = async ({ search }: Search): Promise<Response> => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
    const data: MoviesApi = await response.json()
    const error = data.Error as Error
    //* This is a way to map the data from the API to the data that we want to use in our app
    //* With this we can avoid to use the data from the API directly in our app!
    const movies = data.Search?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return { movies, error }
  } catch (e) {
    throw new Error('Error fetching movies')
  }
}
