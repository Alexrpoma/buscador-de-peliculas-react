import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useEffect, useRef, useState } from 'react'

function App (): JSX.Element {
  const movies = useMovies()
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.currentTarget))
    console.log(fields.searchMovie)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Is not possible to search an empty search')
      return
    }
    if (search.match(/^\d+$/) != null) {
      setError('Is not possible to search a number')
      return
    }
    if (search.length < 3) {
      setError('Is not possible to search less than 3 characters')
      return
    }
    setError('')
  }, [search])

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
