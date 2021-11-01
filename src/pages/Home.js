import React, { useState, useEffect } from 'react'
import PokemonList from '../components/PokemonList'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'

const Home = () => {
  const { data, page, loading, setPage } = useGlobalContext()

  const onHandlePrev = () => {
    let newPage = page - 1

    if (newPage < 0) {
      newPage = data.length - 1
    }

    setPage(newPage)
  }
  const onHandleNext = () => {
    let newPage = page + 1

    if (newPage === data.length) {
      newPage = 0
    }

    setPage(newPage)
  }

  const onHandleClick = (index) => {
    setPage(index)
  }

  return (
    <main>
      <PokemonList />
      {!loading && (
        <div className='btn-container'>
          <button className='prev-btn' onClick={onHandlePrev}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                onClick={() => onHandleClick(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className='next-btn' onClick={onHandleNext}>
            next
          </button>
        </div>
      )}
    </main>
  )
}

export default Home
