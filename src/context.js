import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { pkmns } from './pkmns'
import paginate from './utils'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  const fetchPokemons = useCallback(async () => {
    setLoading(true)

    try {
      setData(paginate(pkmns))
      setLoading(false)
    } catch (error) {
      console.error(
        'An error occurred while getting Pokemon list. Error: ',
        error
      )
    }
  }, [])

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  return (
    <AppContext.Provider value={{ loading, data, page, setPage }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
