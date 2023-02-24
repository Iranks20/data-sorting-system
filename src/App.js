
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
import DailyIncidence from './components/Daily_incidence';
import WeeklyIncidence from './components/Weekly_incidence';
import MonthlyIncidence from './components/Monthly_incidence';
import DailyReporters from './components/Daily_reporters';
import WeeklyReporters from './components/Weekly_reporters';
import MonthlyReporters from './components/Monthly_reporters';
import SideNav from './components/Side_nav';
import Modalz from './components/Modalz';


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
        <Route path='/daily_incidence' element= {<DailyIncidence />} />
        <Route path='/weekly_incidence' element= {<WeeklyIncidence />} />
        <Route path='/monthly_incidence' element= {<MonthlyIncidence />} />
        <Route path='/daily_reporters' element= {<DailyReporters />} />
        <Route path='/weekly_reporters' element= {<WeeklyReporters />} />
        <Route path='/Monthly_reporters' element= {<MonthlyReporters />} />
        <Route path='/side_nav' element= {<SideNav />} />
        <Route path='/modalz' element= {<Modalz />} />
       
      </Routes>
    </div>
  );
}

export default App;
