import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import { registroPeliculaAsincrono } from "./actionMovies";
import { registroEmailPasswordNombre } from "./actionRegister";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones task', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })
    test('Crear Pelicula', async () => {
        await store.dispatch(registroPeliculaAsincrono(
            {
                description: "",
                director: "",
                duration: "",
                genre: "",
                image: "",
                name: "",
                ranking: 0,
                releaseage: 0,
                releasedate: "",
            }
        ))
    })

    const actions = store.getActions();
})
