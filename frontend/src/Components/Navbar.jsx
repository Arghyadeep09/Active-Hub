import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = ({ usertoken }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (usertoken) {
      setToken(usertoken);
    } else {
      let timeout = setTimeout(() => {
        const token1 = localStorage.getItem('token');
        setToken(token1);
        console.log(token1);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [usertoken]);

  console.log(token);

  const signout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <>
      <header className="header custom-navbar"> {/* Added a new class custom-navbar */}
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            Active Hub
          </NavLink>

          <div id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  Home
                </NavLink>
              </li>
     
              <li className="nav__item">
                <NavLink to="/about-us" className="nav__link">
                  About Us
                </NavLink>
              </li>
           
       
              {token ? (
                <li className="nav__item" onClick={signout}>
                  <NavLink to="/api/users/login" className="nav__link nav__cta">
                    SignOut
                  </NavLink>
                </li>
              ) : (
                <li className="nav__item">
                  <NavLink to="/api/users/login" className="nav__link nav__cta">
                    SignIn
                  </NavLink>
                </li>
              )}
            </ul>
           
          </div>

         
        </nav>
      </header>
    </>
  );
};

export default Navbar;



