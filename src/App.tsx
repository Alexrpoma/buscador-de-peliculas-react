import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App (): JSX.Element {
  const movies = useMovies()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.currentTarget))
    console.log(fields.searchMovie)
  }

  return (
    <div className="Home">
      <header>
        <h2>Find your favorite movie!</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input name='searchMovie' placeholder="Movies.."/>
          <button>submit</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
