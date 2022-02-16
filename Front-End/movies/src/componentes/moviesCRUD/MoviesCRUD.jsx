import React, { useEffect } from "react";
import styled from "styled-components";
import { FileUpload } from "../../helpers/FileUpload";
import { List } from "./List";
//import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { listarPeliculaAsincrono, registroPeliculaAsincrono } from "../../action/actionMovies";
import { userFormHook } from "../../hooks/userFormHook";

const Input = styled.input` background-color: #db7093;
`;

export const MoviesCRUD = () => {
    const dispatch = useDispatch();

    /*const formik = useFormik({
        initialValues: {
            description: "",
            director: "",
            duration: "",
            genre: "",
            image: "",
            name: "",
            ranking: 0,
            releaseage: 0,
            releasedate: "",
        },
        onSubmit: (data) => {
            console.log(data);
            dispatch(registroPeliculaAsincrono(data));
        },
    });*/

    const { FormHook, handleInputChange, setFormHook, reset } = userFormHook({
        description: "",
        director: "",
        duration: "",
        genre: "",
        image: "",
        name: "",
        ranking: 0,
        releaseage: 0,
        releasedate: "",
    });



    const handleInputClick = () => {
        document.querySelector("#inputImage").click();
    };

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        FileUpload(e.target.files[0])
            .then((response) => {
                setFormHook({
                    ...FormHook,
                    image: response
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const {
        description,
        director,
        duration,
        genre,
        image,
        name,
        ranking,
        releaseage,
        releasedate,

    } = FormHook

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            description,
            director,
            duration,
            genre,
            image,
            name,
            ranking,
            releaseage,
            releasedate,

        }
        dispatch(registroPeliculaAsincrono(data));
        reset();
    }


    useEffect(() => {
        dispatch(listarPeliculaAsincrono());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <hr />
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">Movies</h3>
                        <form className="form-group" onSubmit={handleSubmit}>
                            <input
                                id="inputImage"
                                type="file"
                                className="form-control"
                                placeholder="url image"
                                name="image"
                                required
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => handleInputClick()}> Imagen
                            </button>
                            <input
                                value={FormHook.name}
                                id="inputName"
                                type="text"
                                className="form-control mt-2"
                                name="name"
                                autoComplete="off"
                                placeholder="Nombre de la película"
                                required
                                onChange={handleInputChange}
                            />
                            <input
                                value={FormHook.director}
                                id="inputDirector"
                                type="text"
                                className="form-control mt-2"
                                name="director"
                                autoComplete="off"
                                placeholder="Director"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.duration}
                                id="inputduration"
                                type="text"
                                className="form-control mt-2"
                                name="duration"
                                autoComplete="off"
                                placeholder="Duración"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.genre}
                                id="inputgenre"
                                type="text"
                                className="form-control mt-2"
                                name="genre"
                                autoComplete="off"
                                placeholder="Género"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.ranking}
                                id="inputranking"
                                type="number"
                                className="form-control mt-2"
                                name="ranking"
                                autoComplete="off"
                                placeholder="Ranking"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.releaseage}
                                id="inputreleaseage"
                                type="number"
                                className="form-control mt-2"
                                name="releaseage"
                                autoComplete="off"
                                placeholder="Año"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.releasedate}
                                id="inputreleasedate"
                                type="text"
                                className="form-control mt-2"
                                name="releasedate"
                                autoComplete="off"
                                placeholder="Fecha de lanzamiento"
                                required
                                onChange={handleInputChange}
                            />

                            <textarea
                                value={FormHook.description}
                                id="inputDescription"
                                className="form-control mt-2"
                                autoComplete="off"
                                name="description"
                                placeholder="Descripción"
                                required
                                onChange={handleInputChange}
                            >

                            </textarea>
                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </form>
                    </div>
                    <List />
                </div>
            </div>
        </div>
    );
};