import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";
import "../components/Register.css"
function Register() {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name || !lname || !email || !password ) alert("All fields are required");
        let isValid = true
        if (password !== '' && cpassword !== ''){
            
            if (password !== cpassword) {
            isValid = false
            alert('Passwords does not match')
            }
        }
        registerWithEmailAndPassword(name,lname, email, password);
        
        setName("")
        setLname("")
        setEmail("")
        setPassword("")
        setCpassword("")
        return isValid
      };
      useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
      }, [user, loading]);
  return (
    <>
        <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="register__textBox"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        

        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
    </>
  )
}

export default Register