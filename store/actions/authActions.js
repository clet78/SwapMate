import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

export const signInWithEmailAndPassword = (login) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then((log) => {
        console.log("This is me logged in");
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    console.log("About to sign out...");
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
        console.log("User is signed out...");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createUserWithEmailAndPassword = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log(user)
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        firestore.collection("users").doc(response.user.uid).set({
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.mobileNumber,
          registeredAt: new Date(),
          longitude: user.longitude,
          latitude: user.latitude,
        });

        return response.user.updateProfile({
          displayName: user.firstName + " " + user.lastName,
          phoneNumber: user.mobileNumber,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/me.jpg?alt=media&token=4a52aa04-e133-4b1e-a68f-51196a938034'
        });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "REGISTER_ERROR" });
      });
  };
};
