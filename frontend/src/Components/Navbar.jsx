import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = ({ usertoken }) => {
  const [token, setToken] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (usertoken) {
      setToken(usertoken);
    } else {
      const timeout = setTimeout(() => {
        const token1 = localStorage.getItem('token');
        setToken(token1);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [usertoken]);

  const signout = () => {
    localStorage.removeItem('token');
    setToken('');
    setIsMenuOpen(false); // Close menu on signout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            Active Hub
          </NavLink>

          <div id="nav-menu" className={isMenuOpen ? "nav__list show" : "nav__list"}>
            <ul>
              <li className="nav__item">
                <NavLink to="/" className="nav__link" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about-us" className="nav__link" onClick={toggleMenu}>
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
                  <NavLink to="/api/users/login" className="nav__link nav__cta" onClick={toggleMenu}>
                    SignIn
                  </NavLink>
                </li>
              )}
            </ul>
            {isMenuOpen && (
              <IoClose className="nav__toggle" onClick={toggleMenu} />
            )}
          </div>

          {!isMenuOpen && (
            <IoMenu className="nav__toggle" onClick={toggleMenu} />
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
