import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarPeliculaAsincrono } from "../../action/actionMovies";
import Modificar from "./Modificar";

export const List = () => {
    const [PeliModificar, setPeliModificar] = useState()
    const dispatch = useDispatch();
    const { pelicula } = useSelector((store) => store.pelicula);
    //console.log(pelicula);

    const handleModificar = (peli) => {
        //console.log(peli);
        setPeliModificar(peli)
    }
    
    return (
        <div>

            <Modificar pelicula={PeliModificar} />


            <table className="table text-center mt-3">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Ranking</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>

                    {pelicula.map((peli, index) => (
                        <tr key={index}>
                            <td> <img src={peli.image} width="50" alt="" /> </td>
                            <td>{peli.name}</td>
                            <td>{peli.ranking}</td>
                            <td>{peli.description}</td>
                            <td>
                                <button
                                    className="btn btn-success btn-sm float-end mx-2"
                                    onClick={() => { handleModificar(peli) }}

                                >
                                    Modificar
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm float-end"
                                    onClick={() => {
                                        dispatch(eliminarPeliculaAsincrono(peli.id))
                                    }}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
};