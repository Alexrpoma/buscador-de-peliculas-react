import './App.css'

function App (): JSX.Element {
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
        Here will be the movies
      </main>
    </div>
  )
}

export default App
