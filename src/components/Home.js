import React from 'react'

function Home() {
  return (
    <div class="crm_body_bg">
        <section>

            <div class="container-fluid no-gutters">
            <div class="row">
            <div class="text-center">
            <h10 class="modal-title">welcome to incidence reporting forum</h10>
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
            <h5 class="modal-title">Fill in your personal details and proceed to reporting incidence</h5>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
            <input type="text" class="form-control" placeholder="first name" />
            </div>
            <div class="mb-3">
            <input type="text" class="form-control" placeholder="last name"  />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="email" />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="sex" />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="phone number" />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="nationality" />
            </div>
            <div class="mb-3">
            <input type="password" class="form-control" placeholder="occupation" />
            </div>
            <div class="cs_check_box">
            <input type="checkbox" id="check_box" class="common_checkbox" />
            </div>
            <a href="register.html" class="btn_1 full_width text-center"> continue to reporting</a>
            <p>Admin? <a href="login.html">Log in</a></p>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div>
            <div class="container-fluid">
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

export default Home