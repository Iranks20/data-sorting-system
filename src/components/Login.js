import React from 'react'

function Login() {
  
  return (
    <div class="crm_body_bg">
        <section>

            <div class="container-fluid g-0">
            <div class="row">
            <div class="col-lg-12 p-0">
            <div class="header_iner d-flex justify-content-between align-items-center">
            <div class="sidebar_icon d-lg-none">
            <i class="ti-menu"></i>
            </div>
            <div class="serach_field-area">
            <div class="search_inner">

            </div>
            </div>
            <div class="header_right d-flex justify-content-between align-items-center">

            </div>
            </div>
            </div>
            </div>


            <div class="main_content_iner ">
            <div class="container-fluid p-0">
            <div class="row justify-content-center">
            <div class="col-lg-12">
            <div class="white_box mb_30">
            <div class="row justify-content-center">
            <div class="col-lg-6">

            <div class="modal-content cs_modal">
            <div class="modal-header">
            <h5 class="modal-title">Admin Login Page</h5>
            </div>
            <div class="modal-body">
            <form>

            <div class="">
            <input type="text" class="form-control" placeholder="Enter your email" />
            </div>
            <div class="">
            <input type="password" class="form-control" placeholder="Password" />
            </div>
            <a href="/reporting/#/dashboard" class="btn_1 full_width text-center">Log in</a>
            <div class="text-center">
            <a href="forgot_pass.html" data-bs-toggle="modal" data-bs-target="#forgot_password" data-bs-dismiss="modal" class="pass_forget_btn">Forget Password?</a>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div class="footer_part">
            <div class="container">
            <div class="row">
            <div class="col-lg-12">
            <div class="footer_iner text-center">
            <p>2020 © Influence - Designed by <a href="#"> <i class="ti-heart"></i> </a><a href="#"> Dashboard</a></p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
    </div>
  )
}

export default Login