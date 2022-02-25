import '@testing-library/jest-dom';
import { PrivateRoute } from '../routers/PrivateRoute';

import { Children } from 'react'




describe("verificar rutas", () => {
	test("verifacr ruat privada", () =>{
		const isLoggedIn = true
		const privat = PrivateRoute({isLoggedIn, Children})
		expect(privat).toB(Children)
	})
}) 