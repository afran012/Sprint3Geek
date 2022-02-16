import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../FireBase/fireBase";
import { typesMovies } from "../types/typesMovies";

export const registroPeliculaSincrono = (pelicula) => {
    return {
        type: typesMovies.registro,
        payload: pelicula
    };
};

export const registroPeliculaAsincrono = (pelicula) => {
    return (dispatch) => {
        addDoc(collection(db, "peliculas"), pelicula)
            .then((resp) => {
                //console.log(resp);
                dispatch(registroPeliculaSincrono(pelicula));
                dispatch(listarPeliculaAsincrono())
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


//Listar
export const listarPeliculaSincrono = (pelicula) => {
    return {
        type: typesMovies.listar,
        payload: pelicula
    };
};


export const listarPeliculaAsincrono = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "peliculas"));
        const pelis = [];
        //console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc._key.path.segments[6]);
            //console.log(doc.data());
            pelis.push({
                ...doc.data(),
                id: doc._key.path.segments[6]
            });
        });
        //console.log(pelis);
        dispatch(listarPeliculaSincrono(pelis));
    };
};



//Eliminar
export const eliminarPeliculaSincrono = (pelicula) => {
    return {
        type: typesMovies.eliminar,
        payload: pelicula
    };
};


export const eliminarPeliculaAsincrono = (pelicula) => {
    return (dispatch) => {
        console.log(pelicula);
        deleteDoc(doc(db, "peliculas", pelicula));
        dispatch(listarPeliculaAsincrono())
    };
};

// modificar

export const modificarPeliculaSincrono = (pelicula) => {
    return {
        type: typesMovies.eliminar,
        payload: pelicula
    };
};


export const modificarPeliculaAsincrono = (id,pelicula) => {
    return (dispatch) => {
        console.log(id,pelicula);
        //deleteDoc(doc(db, "peliculas", pelicula));
        //dispatch(modificarPeliculaSincrono())
        
        updateDoc(doc(db, "peliculas", id), pelicula);
        dispatch(listarPeliculaAsincrono())
        
    };
};




//Actualizar (METODO PUT)
/*
export const actualizarPeliculaASincrono = (pelicula) => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "peliculasdb");
        const consulta = query(coleccion, where("id", "==", pelicula.id));
        const datos = await getDocs(consulta);
        datos.forEach((docu) => {
            const nuevoscampos = {
                nombre: pelicula.nombre,
                año: pelicula.año,
                genero: pelicula.genero,
                duracion: pelicula.duracion,
                calificacion: pelicula.calificacion,
                sinopsis: pelicula.sinopsis,
            };
            updateDoc(doc(dataBase, "peliculasdb", docu.id), nuevoscampos);
        });
        dispatch(listarPeliculasAsincrono());
        toast("Pelicula Modificada", {
            type: "info",
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
        });
    };
};*/