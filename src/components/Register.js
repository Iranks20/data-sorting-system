import React, {useState} from 'react'


function Register() {
    const [incident, setIncident] = useState("");
    const [location, setLocation] = useState("");
    const [cordinates, setCordinates] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [by_who, setBy_who] = useState("");
    const [to_whom, setTo_whom] = useState("");
    const [details, setDetails] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await fetch("http://localhost:5000/api/v1/incidences", {
                method: "POST",
                body: JSON.stringify({
                   incident: incident,
                   location: location,
                   cordinates: cordinates,
                   time: time,
                   date: date,
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
            })
        }  catch (err) {
            console.log('server error');
        }
    };
  return (
    <div className="crm_body_bg">
        <section>
            <div className="main_content_iner ">
            <div className="container-fluid p-0">
            <div className="row justify-content-center">
            <div className="col-lg-12">
            <div className="white_box mb_30">
            <div className="row justify-content-center">
            <div className="col-lg-6">

            <div className="modal-content cs_modal">
            <div className="modal-header">
            <h5 className="modal-title">Fill the form with the incident details</h5>
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}>
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
                    <input type="text" className="form-control" placeholder="Enter your time" value={time} onChange={(e) => setTime (e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter date" value={date} onChange={(e) => setDate (e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="by who" value={by_who} onChange={(e) => setBy_who (e.target.value)}  />
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" placeholder="to whom" value={to_whom} onChange={(e) => setTo_whom (e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter details of the incidenbce" value={details} onChange={(e) => setDetails (e.target.value)} /> 
                </div>
                <div className="cs_check_box">
                <input type="checkbox" id="check_box" className="common_checkbox" />

                </div>
                <input className="btn_1 full_width text-center" type="submit" value="SUBMIT"></input>
                {/* <a href="#" className="btn_1 full_width text-center"> Report incident</a> */}
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
            <p>2020 © Influence - Designed by <a href="#"> <i className="ti-heart"></i> </a><a href="#"> Dashboard</a></p>
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