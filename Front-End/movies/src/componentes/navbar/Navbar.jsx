import React from "react";
import { useDispatch } from "react-redux";
import { /*Link,*/ useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../action/actionLogin";

const Nav = styled.nav` 
background-color: #db7093;
`;

export const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }
    return (
        <div>
            <Nav className="navbar navbar-light #db7093">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643916678/Proyecto2/door-open-solid_pmgtjm.svg" width="80" onClick={()=>handleLogout()}
                            alt="" />
                    </a>
                    {/* <Link className="navbar-toggler-icon" to=""></Link> */}
                </div>
            </Nav>
        </div>
    );
};