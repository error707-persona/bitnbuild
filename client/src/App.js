import React from 'react'
import "./assets/css/style.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing.js"
import Test from "./pages/Test.js"

function App() {
  return (
 
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/testing" element={<Test/>} />
        </Routes>
 
   
  )
}

export default App