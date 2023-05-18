import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/pages/login/login';
import Home from './components/pages/home/home';
import Admin from './components/pages/admin/admin';
import Midwives from './components/pages/Midwives/midwives';
import Mothers from './components/pages/Mothers/mothers';
import Appointment from './components/pages/appointment/appointment';
import ResponsiveDrawer from './components/common/navbar/navbar';


function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/midwives" element={<Midwives />} />
          <Route path="/mothers" element={<Mothers />} />
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </ResponsiveDrawer>
    </BrowserRouter>
  );
}

export default App;
