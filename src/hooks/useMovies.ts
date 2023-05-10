import { useState } from 'react'
import type { MoviesApi, Movie, Error } from '../posterMoviesApi'

interface MoviesData {
  mappedMovies: Movie[] | undefined
  getMovies: () => Promise<void>
  errorMovie: Error | undefined
}

interface Search {
  search: string
}

export const useMovies = ({ search }: Search): MoviesData => {
  const [responseMovies, setResponseMovies] = useState<MoviesApi>()
  const movies = responseMovies?.Search
  const errorMovie = responseMovies?.Error as Error

  //* This is a way to map the data from the API to the data that we want to use in our app
  //* With this we can avoid to use the data from the API directly in our app!
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = async (): Promise<void> => {
    if (search.length > 0) {
      const response = await fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
      const data = await response.json()
      setResponseMovies(data)
    }
  }

  /* const getMovies = (): void => {
    fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
      .then(async response => await response.json())
      .then(data => { setResponseMovies(data) })
      .catch(e => { console.log(e) })
  } */

  return { mappedMovies, getMovies, errorMovie }
}
