import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const authContext = createContext(null)

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    //  google login
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    } 
   

    //--- user created ---
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    } 

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }



     // --- on auth state change --- 
       useEffect(()=> {
       onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        if(currentUser){
            // console.log(currentUser)
        }
      
        setLoading(false)
       })
       },[])

    const authInfo = {   createUser, logInUser, logOut, user, loading, googleLogin}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;