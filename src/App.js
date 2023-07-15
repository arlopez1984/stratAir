import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./router/AppRouter"
import AuthContextProvider from "./contexts/AuthContext";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
const fs = require("node:fs/promises");


function App() {
  const data = fs.readFile('../../workersLines.json','utf-8', (err, jsonString)=>{console.log(err)})

  return ( 
    <>
        <BrowserRouter>
           <AuthContextProvider>
             <AppRouter/>             
          </AuthContextProvider>                
        </BrowserRouter> 
    </>
  );
}

export default App;
