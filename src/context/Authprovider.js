import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadin] = useState(true);

    const providerLogin = (provider) => {
        setLoadin(true);
        return signInWithPopup(auth, provider);
    }

    const providerLoginGithub = (provider) => {
        signInWithPopup(auth, provider);
    }

    const creatUser = (email, passwor) => {
        setLoadin(true);
        return createUserWithEmailAndPassword(auth, email, passwor);
    }

    const signIn = (email, password) => {
        setLoadin(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoadin(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
            setLoadin(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = { user, loading, creatUser, signIn, logOut, providerLogin, providerLoginGithub };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;