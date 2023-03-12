import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Modalzz() {
    let navigate = useNavigate();
    const [id, setId] = useState("")
    const [isLoading, SetLoading] = useState(false);
    const [incident, setIncident] = useState("");
    const [location, setLocation] = useState("");
    const [cordinates, setCordinates] = useState("");
    const [by_who, setBy_who] = useState("");
    const [to_whom, setTo_whom] = useState("");
    const [details, setDetails] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        SetLoading(true)
        try{
            console.log('fresh inno')
            await fetch(`http://54.245.35.168:5000/api/v1/incidences/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    id: id,
                   incident: incident,
                   location: location,
                   cordinates: cordinates,
                   by_who: by_who,
                   to_whom: to_whom,
                   details: details
                }),
                headers: {
                    "content-Type": "application/json",
                    
                }
            }).then(results => results.json())
            .then((response) => {
                console.log(response)
                if (response.error === false) {
                    toast(response.message)
                    SetLoading(false)
                    toast("incident updated successfully")
                    navigate("/dashboard");
            
                    } else if (response.status === 403){
                    SetLoading(false)
                    toast(response.message)
                    } else {
                    SetLoading(false)
                    toast("invalid data types")
                    }
            })
        }  catch (err) {
            console.log('server error');
        }
    };

  return (
    <div>
     <section>
<ToastContainer />
<div className="modal-content cs_modal">
    <div className="modal-header">
       <h5 className="modal-title">Fill the form with the incident to update details</h5>
    </div>
<div className="modal-body">
<form onSubmit={handleSubmit}>
    <div className="mb-3">
    <input type="text" className="form-control" placeholder=" Enter incident id" value={id} onChange={(e) => setId (e.target.value)} />
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" placeholder="incident" value={incident} onChange={(e) => setIncident (e.target.value)} />
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter your location" value={location} onChange={(e) => setLocation (e.target.value)} />
    </div>
    <div className="mb-3">
        <input type="text" className="form-control" placeholder="Enter your cordinates" value={cordinates} onChange={(e) => setCordinates (e.target.value)} />
    </div>
    <div className="mb-3">
        <input type="text" className="form-control" placeholder="by who" value={by_who} onChange={(e) => setBy_who (e.target.value)}  />
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" placeholder="to whom" value={to_whom} onChange={(e) => setTo_whom (e.target.value)} />
    </div>
    <div className="mb-3">
        <input type="text" className="form-control" placeholder="Enter details of the incidenbce" value={details} onChange={(e) => setDetails (e.target.value)} /> 
    </div>
    <div className="cs_check_box">
    <input type="checkbox" id="check_box" className="common_checkbox" />

    </div>
    <div>	 
    {
        isLoading ? <Button><Spinner animation="border" variant="light" /></Button> : <input className="btn_1 full_width text-center" type="submit" value="SUBMIT"></input>
    }
    </div>
    {/* <input className="btn_1 full_width text-center" type="submit" value="SUBMIT"></input> */}
    {/* <a href="#" className="btn_1 full_width text-center"> Report incident</a> */}
    </form>
</div>
</div>
</section>   
    </div>
  )
}

export default Modalzz