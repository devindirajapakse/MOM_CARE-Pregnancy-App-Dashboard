import React from 'react';
import './App.css';
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import Admin from "./components/pages/admin/Admin";
import Appointmnet from "./components/pages/appointment/Appointment";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Users from "./components/pages/users/Users";
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/admin" element={<Admin/> } />
      <Route path="/appointments" element={<Appointmnet/> } />
      <Route path="/dashboard" element={<Dashboard/> } />
      <Route path="/users" element={<Users/> } />
      <Route path="/login" element={<Login/> } />
      

    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

