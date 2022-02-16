import { getAuth, /*signInWithPopup, */createUserWithEmailAndPassword, updateProfile, } from "firebase/auth"
//import { authGoogle } from "../FireBase/fireBase"
import { types } from "../types/types"



export const registerSync = (email, password, name)=>{
    
    return {  
        type: types.registrarUsuario,
        payload: {
            email,
            password,
            name
        },}
}



export const registroEmailPasswordNombre = (email, password, name) => { 
    return (dispatch) => {
        const auth = getAuth(); createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
            await updateProfile(auth.currentUser, { displayName: name }); dispatch(registerSync(user.email, user.uid,
            user.displayName));
            // console.log(user);
        })
        .catch((error) => {
            console.log(error); });
    }; 
};