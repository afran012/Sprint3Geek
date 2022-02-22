import React, { useEffect } from 'react'
import { GetMoviesByName } from '../../selector/GetMoviesByName';
import MovieCard from './MovieCard';
import querystring from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MoviesSection = () => {

  console.log("MoviesSection");

  const location = useLocation();
  const { q = '' } = querystring.parse(location.search);
  const { pelicula } = useSelector((store) => store.pelicula);
  const Peliculas = GetMoviesByName(q , pelicula)|| []


  useEffect(() => {
  }, [q])
  


  return (
    <div className='movies-container'>
                  {
                Peliculas.map(pelic => (
                    <MovieCard key={pelic.id}
                        {...pelic} />
                ))
                }
    </div>
  )
}

export default MoviesSection