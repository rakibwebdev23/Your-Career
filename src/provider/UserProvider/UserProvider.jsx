import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";


export const UserContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // google login
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () =>{
        setLoading (true);
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("current value of the current user", currentUser);
            setLoading(false);
            setUser(currentUser);
        }) 
        return () =>{
            unSubscribe();
        }
    })

    const authInfo = {
        user, 
        createUser,
        userLogin,
        logOut,
        loading,
        googleLogin, 
        githubLogin
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node
}

export default UserProvider;