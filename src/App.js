import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalTest from './components/CalTest';
import Navbar from './components/HavBar';
import TrainingProgramsPage from './components/TrainingPrograms';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="bg-lime-600  background-size: 1920px 1080px;}">
      <Router>
        <Navbar />
        <Routes>
          
        <Route exact path='/'  element={<Home />} />

          <Route path="/CalTest" element={<CalTest />} />
          <Route path="/About" element={<About />} />
          {/*<Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />*/}
          <Route path="/TrainingPrograms" element={<TrainingProgramsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
