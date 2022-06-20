import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth ,logout } from "../firebase";
import "../components/Home.css"
function Home() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    
      }, [user, loading]);
  return (
    <>
    <div className="container">
        <h1>Welcome to the Home Page</h1>
        <button onClick={logout}>Logout</button>
    </div>
    </>
    
  )
}

export default Home