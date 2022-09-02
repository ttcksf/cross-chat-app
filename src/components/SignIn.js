import React from "react";
import firebase from "firebase/compat/app";
import { Button } from "@mui/material";
import { auth, db } from "../firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログインする</Button>
    </div>
  );
};

export default SignIn;
