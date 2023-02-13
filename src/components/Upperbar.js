import React from 'react'

function Upperbar() {
  return (
    <div class="crm_body_bg">
        <div class="container-fluid g-0">
            <div class="row">
            <div class="col-lg-12 p-0">
            <div class="header_iner d-flex justify-content-between align-items-center">
            <div class="sidebar_icon d-lg-none">
            <i class="ti-menu"></i>
            </div>
            <div class="serach_field-area">
            <div class="search_inner">
            <form action="#">
            <div class="search_field">
            <input type="text" placeholder="Search here..." />
            </div>
            <button type="submit"> <img src="img/icon/icon_search.svg" alt="" /> </button>
            </form>
            </div>
            </div>
            <div class="header_right d-flex justify-content-between align-items-center">
            <div class="header_notification_warp d-flex align-items-center">
            <li>
            <a> <img src="assets/img/icon/bell.svg" alt="" /> </a>
            </li>
            <li>
            <a> <img src="assets/img/icon/msg.svg" alt="" /> </a>
            </li>
            </div>
            <div class="profile_info">
            <img src="img/client_img.png" alt="#" />
            <div class="profile_info_iner">
            <p>Neurologist </p>
            <h5>Dr. Robar Smith</h5>
            <div class="profile_info_details">
            <a>My Profile <i class="ti-user"></i></a>
            <a>Settings <i class="ti-settings"></i></a>
            <a>Log Out <i class="ti-shift-left"></i></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Upperbar