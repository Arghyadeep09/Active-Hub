import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     navigate('/api/users/login')
  //   }
  // },[])

  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('/images/Activeimg3.jpg')",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the transparency here
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "2.25rem",
              fontFamily: "Dancing Script, cursive",
            }}
          >
            Welcome to ActiveHub
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
