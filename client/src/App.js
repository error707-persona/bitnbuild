import React from 'react'
import "./assets/styles/globals.css"
import "./assets/styles/styles.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing.js"
import QrReader from "./pages/QrReader"

import Dashboard from './pages/Dashboard';
import DoughnutChart from './components/charts/DoughnutChart';

function App() {
  return (
    <>
    {/* <Dashboard/> */}
    {/* <Landing/> */}
    {/* <DoughnutChart /> */}
    <QrReader/>
      
    </>
        
        // <Routes>
        //     <Route path="/" element={<Landing/>} />
        //     <Route path="/testing" element={<Test/>} />
        //     <Route path="/dashboard" element={<Dashboard/>} />
        // </Routes>
 
   
  )
}

export default App