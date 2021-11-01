import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const PokemonList = () => {
  const { loading, data, page } = useGlobalContext()
  const [pkmns, setPkmns] = useState([])

  useEffect(() => {
    if (!loading) {
      setPkmns(data[page])
    }
  }, [loading, page])

  if (loading) {
    return <Loading />
  }

  if (pkmns.length < 1) {
    return (
      <h2 className='section-title'>
        no pokemons matched your search criteria
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Pokemons</h2>
      <div className='pokemons-center'>
        {pkmns.map((item) => {
          return <Pokemon key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default PokemonList
