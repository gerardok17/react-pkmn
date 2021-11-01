const paginate = (data) => {
  const pkmnPerPage = 30
  const pages = Math.ceil(data.length / pkmnPerPage)

  const newPokemons = Array.from({ length: pages }, (_, index) => {
    const start = index * pkmnPerPage
    return data.slice(start, start + pkmnPerPage)
  })

  return newPokemons
}

export default paginate
