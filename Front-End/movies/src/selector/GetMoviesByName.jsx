import React from 'react'

export const GetMoviesByName = (name = '', peliculas) => {

    if (peliculas.length!==0){
        name = name.toLocaleLowerCase();
        let pelicuFilter = peliculas.filter( peli => peli.name.toLocaleLowerCase().includes( name )  );
        return pelicuFilter
    }
}
