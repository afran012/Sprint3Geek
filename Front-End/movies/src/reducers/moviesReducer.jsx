import { typesMovies } from "../types/typesMovies";


const initialState = {
    pelicula: [],
};
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesMovies.registro:
            return {
                pelicula: [action.payload],
            };
        case typesMovies.listar:
            return {
                pelicula: [...action.payload],
            };
        case typesMovies.buscar:
            //console.log(state.pelicula);
            console.log(...action.payload);
            return {
                pelicula: action.payload,
            };
        default:
            return state;
    }
};