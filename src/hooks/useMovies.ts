import { useRef, useState } from 'react'
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
  const previousSearch = useRef<string | undefined>(search)

  const getMovies = async (): Promise<void> => {
    if (previousSearch.current === search) return
    if (search.length > 0) {
      previousSearch.current = search
      const result = await searchMovies({ search })
      setFoundMovies(result.movies)
      setErrorMovie(result.error)
    }
  }

  return { foundMovies, getMovies, errorMovie }
}
