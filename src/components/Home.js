
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Spinner } from "react-bootstrap";



// import { Spinner } from "react-bootstrap";

function Home() {

let navigate = useNavigate();
const [isLoading, SetLoading] = useState(false);
const [first_name, setFirst_name] = useState("");
const [last_name, setLast_name] = useState("");
const [email, setEmail] = useState("");
const [sex, setSex] = useState("")
const [phone_number, setPhone_number] = useState("");
const [nationality, setNationality] = useState("");
const [occupation, setOccupation] = useState("");
    
let handleSubmit = async (e) => {
    console.log(email)
    SetLoading(true)
    e.preventDefault();
    try {
    await fetch("http://3.239.32.201:5000/api/v1/reporters", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        sex: sex,
        nationality: nationality,
        occupation: occupation
        }),
    }).then(results => results.json())
    .then((response) => {
        console.log(response)
        if (response.error === false) {
        toast(response.message)
        SetLoading(false)
        navigate("/register");

        } else if (response.status === 403){
        SetLoading(false)
        toast(response.message)
        } else {
        SetLoading(false)
        toast("invalid data types")
        }
    })
    
    } catch (err) {
    console.log(err);
    }
};
  return (
    <div className="crm_body_bg">
        <ToastContainer />
        <section>

            <div className="container-fluid no-gutters">
            <div className="row">
            <div className="text-center">
            <h5 className="modal-title">welcome to incidence reporting forum</h5>
            </div>
            </div>

            <div className="main_content_iner ">
            <div className="container-fluid p-0">
            <div className="row justify-content-center">
            <div className="col-lg-12">
            <div className="white_box mb_30">
            <div className="row justify-content-center">
            <div className="col-lg-6">

            <div className="modal-content cs_modal">
            <div className="modal-header">
            <h5 className="modal-title">Fill in your personal details and proceed to reporting incidence</h5>
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="first name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="last name" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="sex" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="phone number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
            </div>
            <div className="cs_check_box">
            <input type="checkbox" id="check_box" className="common_checkbox" />
            </div>
            {/* <a  className="btn_1 full_width text-center"> continue to reporting</a> */}
            <div>	 
            {
                isLoading ? <Button><Spinner animation="border" variant="light" /></Button> : <input className="btn_1 full_width text-center" type="submit" value="SUBMIT"></input>
            }
            </div>
            <p>Admin? <a href="/reporting/#/login">Log in</a></p>
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
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12">
            <div className="footer_iner text-center">
            <p>2020 © Influence - Designed by <a> <i className="ti-heart"></i> </a><a> Dashboard</a></p>
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