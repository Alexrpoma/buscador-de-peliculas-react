import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'

function App (): JSX.Element {
  const { search, error, setSearch } = useSearch()
  const { foundMovies, getMovies, errorMovie } = useMovies({ search })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.currentTarget))
    console.log(fields.searchMovie)
    void getMovies()
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
            borderColor: error !== null ? 'red' : 'transparent'
          }}
          onChange={handleChange} name='searchMovie' value={search} placeholder="Movies.."/>
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
