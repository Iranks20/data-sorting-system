
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Upperbar from './components/Upperbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Daily_incidence from './components/Daily_incidence';
import Weekly_incidence from './components/Weekly_incidence';
import Monthly_incidence from './components/Monthly_incidence';
import Daily_reporters from './components/Daily_reporters';
import Weekly_reporters from './components/Weekly_reporters';
import Monthly_reporters from './components/Monthly_reporters';
import Side_nav from './components/Side_nav';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/dashboard' element= {<Dashboard />} />
        <Route path='/navbar' element= {<Navbar />} />
        <Route path='/footer' element= {<Footer />} />
        {/* <Route path='/upperbar' element= {<upperbar />} /> */}
        <Route path='/home' element= {<Home />} />
        <Route path='/register' element= {<Register />} />
        <Route path='/' element= {<Login />} />
        <Route path='/daily_incidence' element= {<Daily_incidence />} />
        <Route path='/weekly_incidence' element= {<Weekly_incidence />} />
        <Route path='/monthly_incidence' element= {<Monthly_incidence />} />
        <Route path='/daily_reporters' element= {<Daily_reporters />} />
        <Route path='/weekly_reporters' element= {<Weekly_reporters />} />
        <Route path='/Monthly_reporters' element= {<Monthly_reporters />} />
        <Route path='/side_nav' element= {<Side_nav />} />
       
      </Routes>
    </div>
  );
}

export default App;
