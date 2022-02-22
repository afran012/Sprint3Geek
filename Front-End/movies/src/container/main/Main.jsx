import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { listarPeliculaAsincrono } from '../../action/actionMovies'
import MoviesSection from '../../componentes/movies/MoviesSection'

const Main = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(listarPeliculaAsincrono())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='main-Section'>Main
      <MoviesSection>

      </MoviesSection>

    </div>
  )
}

export default Main