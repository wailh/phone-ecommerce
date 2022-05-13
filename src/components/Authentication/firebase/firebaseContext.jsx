import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebaseConfig';

const FirebaseContext = React.createContext()
export function useAuth() {
    return useContext(FirebaseContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function signup (email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const resetPass = (email) => {
       return auth.sendPasswordResetEmail(email)
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        // unsubscribe because it will return a method that when we call this method it will unsubscribe this change
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)      
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPass,
        updateEmail,
        updatePassword
    }

    return ( 
        <FirebaseContext.Provider value={value}>
            {!loading && children}
        </FirebaseContext.Provider>
     );
}
 
export default AuthProvider;