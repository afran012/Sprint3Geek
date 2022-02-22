import React from 'react'



const MovieCard = (pelicula) => {

  const { image,
    ranking,
    /*
    description,
    director,
    duration,
    genre,
    id,
    
    name,
    
    releaseage,
  releasedate*/ } = pelicula

    const DefineBorderColor = ()=>{
      if (ranking<51) {
        return "border-rankin-1"
        
      } else {
        return ""
        
      }
    }


  return (
    <div className='card-container'>
      <img src={image} alt="..." className='imgCard' />
      <section className={`ranking-card ${DefineBorderColor()}`}>

        <section className='rank-img-p'>
          <img src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645496117/Peliculas/Vector_1_v6wzgj.svg" alt="" />
          <p>{(ranking*0.1).toFixed( 1 )}</p>
        </section>

      </section>
    </div>
  )
}

export default MovieCard