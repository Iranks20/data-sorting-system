import React from 'react'

function Register() {
  return (
    <div class="crm_body_bg">
        <section>
            <div class="main_content_iner ">
            <div class="container-fluid p-0">
            <div class="row justify-content-center">
            <div class="col-lg-12">
            <div class="white_box mb_30">
            <div class="row justify-content-center">
            <div class="col-lg-6">

            <div class="modal-content cs_modal">
            <div class="modal-header">
            <h5 class="modal-title">Fill the form with the incidence details</h5>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="incidence" />
                </div>
                <div class="mb-3">
                <input type="text" class="form-control" placeholder="Enter your location" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter your cordinates" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter your time" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter date" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="by who" />
                </div>
                <div class="mb-3">
                <input type="password" class="form-control" placeholder="to whom" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter details of the incidenbce" />
                </div>
                <div class="cs_check_box">
                <input type="checkbox" id="check_box" class="common_checkbox" />

                </div>
                <a href="#" class="btn_1 full_width text-center"> Report incidence</a>
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
        </section>
    </div>
  )
}

export default Register