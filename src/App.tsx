import { MOVIES_FOUND } from './__mocks__/searchMovie'
import { Movies } from './components/Movies'
import './App.css'

function App (): JSX.Element {
  const movies = MOVIES_FOUND.Search
  return (
    <div className="Home">
      <header>
        <h2>Find your favorite movie!</h2>
        <form className="form">
          <input placeholder="Movies.."/>
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
