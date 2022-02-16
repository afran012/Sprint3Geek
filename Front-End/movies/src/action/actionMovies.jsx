import { typesMovies } from "../types/types";

export const registroPeliculaSincrono = (movies) => {
    return {
        type: typesMovies.registro,
        payload: movies
    };
};


//Listar
export const listarPeliculaSincrono = (movies) => {
    return {
        type: typesMovies.listar,
        payload: movies
    };
};

//Eliminar
export const eliminarPeliculaSincrono = (movies) => { return {
    type: typesMovies.eliminar,
    payload: movies };
    };