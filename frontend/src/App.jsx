import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import EasyRepoButton from './Components/EasyRepoButton.jsx';
import EasyRepoPage from './Pages/EasyRepoPage.jsx';
import MediumRepoButton from './Components/MediumRepoButton.jsx';
import MediumRepoPage from './Pages/MediumRepoPage.jsx';
import HardRepoButton from './Components/HardRepoButton.jsx';
import HardRepoPage from './Pages/HardRepoPage.jsx';
import Signup from './Components/SignUp.jsx';
import Home from './Pages/Home.jsx';
import Login from './Components/Login.jsx';
import UserProvider from './Components/UserProvider.jsx';
import LogosMarquee from './Components/LogosMarquee.jsx';
import AboutUs from './Components/AboutUs.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const shouldShowComponents =
    location.pathname !== '/api/users/signup' &&
    location.pathname !== '/api/users/login';

  return (
    <>
      {shouldShowComponents && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '100px',
              margin: '20px 0',
            }}
          >
            <EasyRepoButton />
            <MediumRepoButton />
            <HardRepoButton />
          </div>
        </>
      )}
      {children}
    </>
  );
};

const App = () => {
  const [usertoken, setUsertoken] = useState('');
  console.log(usertoken);

  return (
    <>
    <UserProvider>
      <Router>
        <Navbar usertoken={usertoken} />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/about-us"element={<AboutUs/>}/>
            <Route path="/easyrepositories" element={<EasyRepoPage />} />
            <Route path="/mediumrepositories" element={<MediumRepoPage />} />
            <Route path="/hardrepositories" element={<HardRepoPage />} />
            <Route path="/api/users/login" element={<Login setUsertoken={setUsertoken} />} />
            <Route path="/api/users/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
    </>
  );
};

export default App;
