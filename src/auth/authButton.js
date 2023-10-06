import React, { useState, useEffect } from 'react';
import { onAuthStateChanged,signOut  } from "firebase/auth";
import { firebase } from './firebaseConfig';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated, setAuthenticated } from './authSlice';

const AuthButton = () => {
 
  const [userName, setUserName] = useState(false);
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=>{
    onAuthStateChanged(firebase, (user) => {
        if (user) {
            dispatch(setAuthenticated(true));
            setUserName(user.email)
        } else {
            dispatch(setAuthenticated(false));
        }
      });
     
},)

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {               
    signOut(firebase).then(() => {
    // Sign-out successful.
    navigate("/login");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}

  return (
    <div>
      {authenticated ? (
        <>
        <span>Hi, {userName}</span><button onClick={handleLogout}>Logout</button>
        </>
        
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
