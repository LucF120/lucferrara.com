import { useEffect } from 'react';
import './App.css'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing";
import Chess from "./Chess";
function App() {
  useEffect(() => {
    document.title = "Coming Soon 🚀"; 
    return () => {
      document.title = "Coming Soon 🚀"; 
    };
  }, []);
  
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landing" />} />
          <Route path="/Landing/*" element={<Landing />} />
          <Route path="/Chess/*" element={<Chess />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
export default App
