import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccout, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccout) {
        const data = await authService.createUserWithEmailAndPassword(email, password);
        console.log(data);
      } else {
        const data = await authService.signInWithEmailAndPassword(email, password);
        console.log(data);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: {name}
    } = event;
    let provider;
    if (name==="google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name="email"
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={onChange}
          required 
        />
        <input 
          name="password"
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={onChange}
          required 
        />
        <input type="submit" value={newAccout? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccout? "Sign In" : "Create Account"}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;