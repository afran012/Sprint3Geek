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
        case typesMovies.listar: return {
            ...state,
        };
        case typesMovies.eliminar: return {
            ...state,
        };
        default:
            return state;
    }
};