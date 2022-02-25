import '@testing-library/jest-dom'
import {types} from "./types"

describe('verificar types ', () => {
    test('Comparar Types ', () => {
        expect(types).toEqual({
            iniciarSesion: "iniciarSesion",
            registrarUsuario: "registrarUsuario",
            cerrarSesion: "cerrarSesion",

        })
        
    })
})