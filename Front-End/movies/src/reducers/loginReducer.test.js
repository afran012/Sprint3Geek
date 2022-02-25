import '@testing-library/jest-dom'
import { types } from '../types/types';
import { loginReducer } from './loginReducer';

describe('Pruebas en LoginReducer', () => {
	test("debe de realizar el login", () => {
	
	const initState = {};
	const action = {
		type: types.iniciarSesion,
		payload: {
			id:'abc',
			displayname: 'nombre'
		}
	};
	const state = loginReducer( initState, action );
	expect( state ).toEqual({
		id: 'abc',
		name: 'nombre'
		})
	})

    test('Cerrar sesion - logout ', () => {
        const initState = {
            id: 'abc',
            name: 'nombre'
        };
        const action = {
            type: types.cerrarSesion,
        };
    
        const state = loginReducer ( initState, action );
        expect ( state ).toEqual({})
    })
})