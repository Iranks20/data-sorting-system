import React, {useState} from 'react'
import { Button, Spinner } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Login() {
  let navigate = useNavigate();
  const [isLoading, SetLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    SetLoading(true)
    try{
        await fetch("http://18.234.145.70:8080/api/auth/signin", {
            method: "POST",
            body: JSON.stringify({
               username: username,
               password: password,
            }),
            headers: {
                "content-Type": "application/json",
                
            }
        }).then(results => results.json())
        .then((response) => {
            console.log(response)
            if (response.accessToken === true) {
                toast(response.message)
                SetLoading(false)
                navigate("/dashboard");
        
                } else if (response.accessToken === null){
                SetLoading(false)
                toast(response.message)
                } else {
                SetLoading(false)
                toast(response.message)
                }
        })
    }  catch (err) {
        console.log('server error');
    }
};
  
  return (
    <div class="crm_body_bg">
      <ToastContainer />
        <section>

            <div class="container-fluid g-0">
            <div class="row">
            <div class="col-lg-12 p-0">
            <div class="header_iner d-flex justify-content-between align-items-center">
            <div class="header_right d-flex justify-content-between align-items-center">

            </div>
            </div>
            </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
            <form onSubmit={handleSubmit}>
            <div class="">
            <input type="text" class="form-control" placeholder="Enter your email" value={username} onChange={(e) => setUsername (e.target.value)} />
            </div>
            <div class="">
            <input type="password" class="form-control" placeholder="Password" value={password} onChange={(e) => setPassword (e.target.value)} />
            </div>
            <div>	 
            {
                isLoading ? <Button><Spinner animation="border" variant="light" /></Button> : <input className="btn_1 full_width text-center" type="submit" value="SUBMIT"></input>
            }
            </div>
            {/* <a href="/dashboard" class="btn_1 full_width text-center">Log in</a> */}
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

            {/* <div class="footer_part">
            <div class="container">
            <div class="row">
            <div class="col-lg-12">
            <div class="footer_iner text-center">
            <p>2020 © Influence - Designed by <a href="#"> <i class="ti-heart"></i> </a><a href="#"> Dashboard</a></p>
            </div>
            </div>
            </div>
            </div>
            </div> */}
            </div>
            </div>
            </section>
    </div>
  )
}

export default Login