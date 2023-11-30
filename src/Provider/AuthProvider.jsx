import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types';
import useAxiosPublic from "../Components/Pages/Shared/Hooks/useAxiosPublic";
// import useAxiosPublic from "../Components/Pages/Shared/Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // goggle Signup 
    const googleSignup = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    //    login with email and password 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // create user with email and password 
    const createUser = (email, password) => {
        setLoading(true);
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // logOut the user 
    const logOut = () => {
        setLoading(true);
        return (signOut(auth))
    }

    // watching the current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user watching", currentUser);
            if (currentUser) {
                //get teh token and store client
                const userInfo = { email: currentUser?.email };

                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("Access-Token", res.data.token);
                            setLoading(false);
                        }
                    })
            } else {
                //remove the token (if token stored in the client local storage,caching ,in memory)
                localStorage.removeItem("Access-Token");
                setLoading(false);
            }

        })
        return () => {
            unsubscribe();
        }
    }, [axiosPublic]);

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    };

    const authInfo = {
        user, loading, loginUser, createUser, logOut, updateUserProfile, googleSignup
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;