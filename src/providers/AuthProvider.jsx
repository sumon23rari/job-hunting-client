import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import auth from '../firebase/firebase.config';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // const axiosPublic=useAxiosPublic();
  
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        setLoading(true)
      return  signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const profileUpdate=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    };

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser,'currentUser')
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
               setLoading(false)
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
             
                setLoading(false);
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo={handleGoogleSignIn,createUser,loading,logInUser,profileUpdate,user,logOut};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;