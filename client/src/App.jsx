import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import React from 'react';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
  <BrowserRouter>
  <Header /> 
  {/* we need the above header to show on all pages */}
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route element={<PrivateRoute/>}>
       <Route path='/profile' element={<Profile />} />
      </Route> 
    </Routes>
  </BrowserRouter>
  )
}
