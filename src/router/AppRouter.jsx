import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Invento from '../pages/Invento';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/Layout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import WorkLines from '../pages/WorkLines';



export default function AppRouter(){
  return ( 
    <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route path="/home" element={<Home/>}/>        
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/worklines" element={<WorkLines/>}/>                
      </Route>
  </Routes> 
  );
}