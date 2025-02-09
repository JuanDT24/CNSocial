import React from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/login/Login.css';
import './pages/home/Home.css';
function App() {
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
    )
}
export default App;
