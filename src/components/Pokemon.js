import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon = ({ id, name, url, image, types }) => {
  return (
    <article className='pokemon'>
      <div className='img-container'>
        <h3>
          {id} - {name}
        </h3>
        <img src={image} alt={name} />
      </div>
      <div className='pokemon-footer'>
        <PokemonTypes types={types} />
        <div className='pokemon-details'>
          <Link to={`/pokemon/${id}`} className='btn btn-primary btn-details'>
            details
          </Link>
        </div>
      </div>
    </article>
  )
}

const PokemonTypes = ({ types }) => {
  if (types.length > 1) {
    return (
      <section className='pokemon-type'>
        <p className={`${types[0]}`}>{types[0]}</p>
        <p className={`${types[1]}`}>{types[1]}</p>
      </section>
    )
  }
  return (
    <section className='pokemon-type'>
      <p className={types[0]}>{types[0]}</p>
    </section>
  )
}

export default Pokemon
