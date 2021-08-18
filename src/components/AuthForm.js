import React from "react";
import { useState } from "react";
import { authService } from "fbase";

const AuthForm = () => {
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
  return (
    <>
    <form onSubmit={onSubmit} className="container">
      <input 
        name="email"
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={onChange}
        required 
        className="authInput"
      />
      <input 
        name="password"
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={onChange}
        required 
        className="authInput"
      />
      <input 
        type="submit" 
        value={newAccout? "Create Account" : "Log In"} 
        className="authInput authSubmit"
      />
      {error && <span className="authError">{error}</span>}
    </form>
    <span onClick={toggleAccount} className="authSwitch">
      {newAccout? "Sign In" : "Create Account"}
    </span>
    </>
  );
};


export default AuthForm;