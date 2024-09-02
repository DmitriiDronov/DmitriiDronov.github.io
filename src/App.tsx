import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import NavigationBar from './components/NavigationBar';
import CV from './pages/CV';
import Home from './pages/Home';
function App() {
    return (
        <>
            <div className="App">
                <NavigationBar></NavigationBar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/CV' element={<CV />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
