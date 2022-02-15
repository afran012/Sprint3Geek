import { types } from "../types/types"; 

export const loginReducer = (state={},action) => {
    switch (action.type) {
        case types.iniciarSesion:
            return {
                id:action.payload.id,
                name:action.payload.displayname
            }
        case types.cerrarSesion:
            return {}
        default:
            return state;
    }
}
