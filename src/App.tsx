import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'

function App (): JSX.Element {
  const movies = useMovies()
  const { search, error, setSearch } = useSearch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.currentTarget))
    console.log(fields.searchMovie)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  return (
    <div className="Home">
      <header>
        <h2>Find your favorite movie!</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
          style={{
            border: '1px solid transparent',
            borderColor: (error.length > 0) ? 'red' : 'transparent'
          }}
          onChange={handleChange} name='searchMovie' value={search} placeholder="Movies.."/>
          <button type='submit'>submit</button>
        </form>
        {(error.length > 0) && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
