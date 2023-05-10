import { useState, useRef, useEffect } from 'react'

interface SearchData {
  search: string
  error: string | null
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const useSearch = (): SearchData => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState<string | null>('')
  const isFirstInput = useRef(true)
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
    setError(null)
  }, [search])
  return { search, error, setSearch }
}
