import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName) => ({
    type: 'LOGIN',
    uid,
    displayName
});

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
}};

export const startLoginFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
}};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}