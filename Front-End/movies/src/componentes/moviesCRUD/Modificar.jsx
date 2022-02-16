import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { modificarPeliculaAsincrono, registroPeliculaAsincrono } from '../../action/actionMovies';
import { FileUpload } from '../../helpers/FileUpload';
import { userFormHook } from '../../hooks/userFormHook';

const Modificar = ({pelicula}) => {
    const dispatch = useDispatch();
    console.log(pelicula);
    //console.log(pelicula.pelicula? pelicula.pelicula.image : {});


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



    const getValues = () => {
        if (pelicula) {

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
        
            } = pelicula

            setFormHook({
                description,
                director,
                duration,
                genre,
                image,
                name,
                ranking,
                releaseage,
                releasedate,
            })
            //console.log(FormHook);
        } else {
            console.log(pelicula);
        }
    }


    const handleModify = (e) => {
        //e.preventDefault() 
        dispatch(modificarPeliculaAsincrono(pelicula.id,FormHook));
        reset();
    }


    useEffect(() => {
        getValues()

    }, [pelicula])


    return (
        <div>
            <div className="container mt-5">
                <hr />
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">Movies</h3>
                        <form className="form-group" >
                            <input
                                id="inputImage"
                                type="file"
                                className="form-control"
                                placeholder="url image"
                                name="image"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                            <button
                                type="button"
                                className="btn btn-dark"
                            >
                                Imagen
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

                                <button
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                    onClick={() => { handleModify() }}
                                >
                                    Modificar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modificar