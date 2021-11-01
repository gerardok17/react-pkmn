import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = `https://pokeapi.co/api/v2/pokemon/`

const SinglePokemon = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    setLoading(true)

    async function getPokemon() {
      try {
        const response = await fetch(`${url}${id}/`)
        const pokemon = await response.json()

        const { name, types, stats, abilities, weight } = pokemon
        const image = pokemon.sprites.other['official-artwork'].front_default

        const newPokemon = {
          name,
          types,
          stats,
          abilities,
          weight,
          image,
        }

        setPokemon(newPokemon)
      } catch (error) {
        setPokemon(null)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getPokemon()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!pokemon) {
    return <h2 className='section-title'>no pokemon to display</h2>
  }

  const { name, image, types, stats, abilities, weight } = pokemon

  return (
    <section className='section pokemon-section'>
      <div className='single-pkmn'>
        <img src={image} alt={name}></img>
        <div className='single-pkmn-info'>
          <p>
            <span className='single-pkmn-data'>number:</span>
            {id}
          </p>
          <p>
            <span className='single-pkmn-data'>pokemon:</span>
            {name}
          </p>
          <p>
            <span className='single-pkmn-data'>weight:</span>
            {weight}
          </p>
          <p>
            <span className='single-pkmn-data'>types:</span>
            Coming soon
          </p>
          <p>
            <span className='single-pkmn-data'>abilities:</span>
            Coming soon
          </p>
          <p>
            <span className='single-pkmn-data'>stats:</span>
            Coming soon
          </p>
        </div>
      </div>

      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
    </section>
  )
}

export default SinglePokemon
