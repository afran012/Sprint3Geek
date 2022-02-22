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

        querySnapshot.forEach((doc) => {

            pelis.push({
                ...doc.data(),
                id: doc._key.path.segments[6]
            });
        });

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


export const modificarPeliculaAsincrono = (id, pelicula) => {
    return async (dispatch) => {

        await updateDoc(doc(db, "peliculas", id), pelicula);
        await dispatch(listarPeliculaAsincrono())

    };
};

// Buscar

export const buscarPeliculaSincrono = (pelicula) => {
    return {
        type: typesMovies.buscar,
        payload: pelicula
    };
};


export const buscarPeliculaAsincrono = (nombrePelicula) => {

    return async (dispatch) => {

        const peliculaCollections = collection(db, "peliculas");
        const q = query(peliculaCollections, where("name", "==", nombrePelicula))
        const datos = await getDocs(q);
        //console.log(datos)
        const pelicula = [];
        datos.forEach((docu) => {
            pelicula.push(docu.data())
        })
        console.log(pelicula)
        dispatch(buscarPeliculaSincrono(pelicula))
        //console.log(pelicula);
    }
}

/*
export const buscarPeliculaAsincrono = (nombrePelicula) => {

    return async (dispatch) => {

        const peliculaCollections = collection(db, "peliculas");
        const q = query(peliculaCollections, where("name", "==", nombrePelicula))
        const datos = await getDocs(q);
        //console.log(datos)
        const pelicula = [];
        datos.forEach((docu) => {
            pelicula.push(docu.data())
        })
        console.log(pelicula)
        dispatch(buscarPeliculaSincrono(pelicula))
        //console.log(pelicula);
    }
}*/