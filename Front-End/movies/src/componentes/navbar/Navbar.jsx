import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { /*Link,*/ useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../action/actionLogin";
import { Button, Container, Form, FormControl, Nav, Navbar, /*NavbarBrand, */NavDropdown } from "react-bootstrap"
import querystring from 'query-string';
import { userFormHook } from "../../hooks/userFormHook";
//import { useFormik } from "formik"
//import { buscarPeliculaAsincrono } from "../../action/actionMovies";

const NavSection = styled.section` 
    //background-color: #b7c036;
    .colorText{
        //color:#b7c036
    }
`;

const style1 = {
    color: "white",
    //backgroundColor: "#db7093"

}

export const NavbarMain = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    /*const formik = useFormik({
        initialValues: {
            nombrePelicula: ""
        },
        onSubmit: ({ nombrePelicula }) => { dispatch(buscarPeliculaAsincrono(nombrePelicula)) }

    })*/

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }


    const location = useLocation();
    const { q = '' } = querystring.parse(location.search);


    const { FormHook, handleInputChange} = userFormHook({
        searchText: q
    });

    //console.log("NAbvar",FormHook);

    const { searchText } = FormHook;


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
        //console.log(searchText);
    }

    useEffect(() => {
        navigate(`?q=${searchText}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [FormHook])
    



    return (
        <NavSection >

            <Navbar expand="lg" className="sectionNavBar" bg="dark" variant="dark"  >
                <Container fluid >
                    <Navbar.Brand href="/main">
                        <img

                            src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645037508/Peliculas/logo-blockBuster_h24ngy.svg"
                            alt="...."
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="/main">
                                Todas
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <p className="navBarColor">Más valoradas</p>
                            </Nav.Link>
                            <Nav.Link href="#action3" >
                                <p className="navBarColor">Menos valoradas</p>
                            </Nav.Link>
                            <Nav.Link href="/movies" >
                                <p className="navBarColor">Agregar Películas</p>
                            </Nav.Link>
                            <Nav.Link href="#ubicacion" disabled>
                                <p className="navBarColor">Ubicación</p>
                            </Nav.Link>
                            <NavDropdown
                                title="Usuario"
                                id="navbarScrollingDropdown"
                                style={style1}
                                bg="dark"
                                variant="dark"

                            >
                                <NavDropdown.Item href="#action3" className="colorText" >Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Registrarse</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#action4"
                                    onClick={() => handleLogout()}>Cerrar sesión</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" disabled >
                                    <img
                                        src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645034733/Peliculas/user-check-solid_ia3kle.svg"
                                        alt="userLogin"
                                        className="imgUser"
                                    />
                                    <h2>Nombre de usuario</h2>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex" 
                        onSubmit={handleSearch/*handleSubmit*/}
                        >
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                /*name="nombrePelicula"*/
                                name="searchText" 
                                value={searchText}
                                onChange={handleInputChange}
                            />
                            <Button type="submit" variant="outline-success">Search</Button>
                        </Form >
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </NavSection>

    )



    /*return (
        <div>
            <Nav className="navbar navbar-light #db7093">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643916678/Proyecto2/door-open-solid_pmgtjm.svg" width="80" onClick={()=>handleLogout()}
                            alt="" />
                    </a>
                    {/* <Link className="navbar-toggler-icon" to=""></Link> }
                </div>
            </Nav>
        </div>
    );*/
};