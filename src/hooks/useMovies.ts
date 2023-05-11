import { useState } from 'react'
import type { Movie, Error } from '../posterMoviesApi'
import { searchMovies } from '../services/movies'

interface MoviesData {
  foundMovies: Movie[] | undefined
  getMovies: () => Promise<void>
  errorMovie: Error | undefined
}

interface Search {
  search: string
}

export const useMovies = ({ search }: Search): MoviesData => {
  const [foundMovies, setFoundMovies] = useState<Movie[]>()
  const [errorMovie, setErrorMovie] = useState<Error>()

  const getMovies = async (): Promise<void> => {
    if (search.length > 0) {
      const result = await searchMovies({ search })
      setFoundMovies(result.movies)
      setErrorMovie(result.error)
    }
  }

  return { foundMovies, getMovies, errorMovie }
}
