import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalTest from './components/CalTest';
import Navbar from './components/HavBar';
import TrainingProgramsPage from './components/TrainingPrograms';
import Home from './components/Home';
import About from './components/About';
import Tools from  './components/Tools';
import BMI from './components/calculators/BMI';
import TDEE from './components/calculators/TDEE';
import CalCalorisBurn from './components/calculators/CalCalorisBurn';


function App() {
  return (
    <div className="bg-lime-600  background-size: 1920px 1080px;}">
      <Router>
        <Navbar />
        <Routes>
          {/* Home*/}
        <Route exact path='/'  element={<Home />} />

            {/*Walking Goal */}

            {/* */}
            <Route path="/TrainingPrograms" element={<TrainingProgramsPage />} />


          <Route path="/Walking-Calculator" element={<CalTest />} />
            {/* Tools*/}
          <Route path="/Tools" element={<Tools />} />
          <Route path="/BMI" element={<BMI />} />
          <Route path="/TDEE" element={<TDEE />} />
          <Route path="/CalorieBurn" element={<CalCalorisBurn />} />

            {/*/About */}
          <Route path="/About" element={<About />} />

          
         </Routes>
      </Router>
    </div>
  );
}

export default App;
