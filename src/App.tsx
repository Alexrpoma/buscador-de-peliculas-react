import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { useState } from 'react'

function App (): JSX.Element {
  const { search, error, setSearch } = useSearch()
  const [sort, setSort] = useState(false)
  const { foundMovies, getMovies, errorMovie } = useMovies({ search, sort })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.currentTarget))
    console.log(fields.searchMovie)
    void getMovies()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  const handleSort = (): void => {
    setSort(!sort)
  }

  return (
    <div className="Home">
      <header>
        <h2>Find your favorite movie!</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
          style={{
            border: '1px solid transparent',
            borderColor: error !== null ? 'red' : 'transparent'
          }}
          onChange={handleChange} name='searchMovie' value={search} placeholder="Movies.."/>
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>submit</button>
        </form>
        {error !== null && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={foundMovies} error={errorMovie} />
      </main>
    </div>
  )
}

export default App
