import React from "react";
import styled from "styled-components";
import { FileUpload } from "../../helpers/FileUpload";
import { List } from "./List";
const Input = styled.input` background-color: #db7093;
`;
export const MoviesCRUD = () => {

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            correo: "",
            descripcion: "",
        },
        onSubmit: (data) => {
            console.log(data);
        },
    });

    const handleInputClick = () => {
        document.querySelector("#inputImage").click();
    };

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        FileUpload(e.target.files[0])
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container mt-5">
                <hr />
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">Movies</h3>
                        <form className="form-group">
                            <input
                                id="inputImage"
                                type="file"
                                className="form-control"
                                placeholder="url image"
                                name="url"
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
                                id="inputName"
                                type="text"
                                className="form-control mt-2"
                                name="nombre"
                                autoComplete="off"
                                placeholder="user name"
                                required
                            />
                            <input
                                id="inputEmail"
                                type="text"
                                className="form-control mt-2"
                                name="correo"
                                autoComplete="off"
                                placeholder="email"
                                required
                            />
                            <textarea id="inputDescription"
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                required
                            ></textarea>
                            <div className="d-grid gap-2 mx-auto mt-2"> <Input
                                value="Save"
                                type="submit"
                                className="btn btn-outline-dark"
                            /> </div>
                        </form>
                    </div>
                    <List />
                </div>
            </div>
        </div>
    );
};