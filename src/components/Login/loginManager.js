import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeSignIn = () =>
{
    if (!firebase.apps.length)
    {
        firebase.initializeApp(firebaseConfig);
    }
    else
    {
        firebase.app();
    }
}

export const googleSignIn = () =>
{
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    return signInWithPopup(auth, googleProvider)
        .then((res) =>
        {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName,
                email,
                imgSrc: photoURL,
                success: true
            };
            return signedInUser;
        }).catch((err) =>
        {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage);
        });
}


export const createUserUsingEmailAndPassword = (name, email, password) =>
{
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) =>
        {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserInfo(name);
            return newUserInfo;
        })
        .catch((error) =>
        {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const SignInUserWithEmailAndPassword = (email, password) =>
{
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then(res =>
        {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            newUserInfo.isSignedIn = true;
            return newUserInfo;
        })
        .catch((error) =>
        {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const updateUserInfo = (name) =>
{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: name,
    }).then((res) =>
    {
        console.log('user name updated successfully');
    }).catch(error =>
    {
        console.log(error);
    });
}
