import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "./firebaseConfig";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "./authSlice";
import "./auth.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(firebase, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        dispatch(setAuthenticated(true));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const onSignUp = (e) => {
    navigate("/signup");
  };
  return (
    <>
      <main>
        <section>
          <div className="content">
            <div className="left-content">
              <p>Kluster Store</p>
            </div>
            <div className="right-content">
              <form>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <button className="login" onClick={onLogin}>
                    Login
                  </button>
                </div>
              </form>

              <p className="text-sm text-white text-center">
                No account yet?{" "}
                <button className="signup" onClick={onSignUp}>
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
