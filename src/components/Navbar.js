import React from 'react'

function Navbar() {
  return (
    <div class="crm_body_bg">
        <nav class="sidebar">
            <div class="logo d-flex justify-content-between">
            <a href="index.html"><img src="img/logo.png" alt="" /></a>
            <div class="sidebar_close_icon d-lg-none">
            <i class="ti-close"></i>
            </div>
            </div>
            <ul id="sidebar_menu">
            <li class="side_menu_title">
            <span>Dashboard</span>
            </li>
            <li class="mm-active">
            <a class="has-arrow" href="#" aria-expanded="false">

            <img src="img/menu-icon/1.svg" alt="" />
            <span>Dashboard</span>
            </a>
            <ul>
            <li><a class="active" href="/dashboard">Dashboard</a></li>
            </ul>

            <li class="side_menu_title">
            <span>Pages</span>
            </li>
            <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
            <img src="img/menu-icon/6.svg" alt="" />
            <span>Forms</span>
            </a>
            <ul>
            <li><a href="#">Incidences</a>
            <ul>
            <li><a href="/daily_incidence">daily incidence</a></li>
            <li><a href="/weekly_incidence">weekly incidence</a></li>
            <li><a href="/monthly_incidence">monthly incidence</a></li>
            </ul>
            </li>
            <li><a href="#">Reporters</a>
            <ul>
            <li><a href="/daily_reporters">Daily Reporters</a></li>
            <li><a href="/weekly_reporters">Weekly Reporters</a></li>
            <li><a href="/monthly_reporters">monthly Reporters</a></li>
            </ul>
            </li>
            </ul>
            </li>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar