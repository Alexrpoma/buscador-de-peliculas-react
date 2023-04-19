export interface MoviesApi {
  Response: string
  Search: Search[]
  totalResults: string
  Error?: string
}

export interface Search {
  Poster: string
  Title: string
  Type: typeof TYPE[keyof typeof TYPE]
  Year: string
  imdbID: string
}

export const TYPE = {
  MOVIE: 'movie',
  SERIES: 'series'
} as const
