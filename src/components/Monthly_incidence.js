import React from 'react'
import Footer from './Footer'
import SideNav from './Side_nav';
import Icon from "react-crud-icons";
// import "react-crud-icons/dist/react-crud-icons.css";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import Modalzz from './Modalzz';

class Monthly_incidence extends React.Component {
  state ={
      openModal : false
  }
  onClickButton = e =>{
      e.preventDefault()
      this.setState({openModal : true})
  }

  onCloseModal = ()=>{
      this.setState({openModal : false})
  }
  
  constructor(props) {
    super(props);
    this.state = {
      incidences: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://54.245.35.168:5000/api/v1/incidences/monthly")
    .then( (res) => res.json())
    .then( (json) => {
      console.log(json)
      this.setState({
        incidences: json,
        DataisLoaded: true
      });
    })
  }
  // handleDelete() {
  //   fetch("http://54.245.35.168:5000/api/v1/incidences/13")
  //   .then( (res) => res.json())
  //   .then( (json => {
  //     console.log(json)
  //     this.setState({
  //       incidences:json,
  //       DataisLoaded:true
  //     });
  //   }))
  // }

  render() {
    const { DataisLoaded, incidences } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
    return (
      <div class="crm_body_bg">
      {/* <Navbar /> */}
       <SideNav />
           <section class="main_content dashboard_part">
           <br></br>
          <br></br>
          <br></br>
           {/* <Upperbar /> */}
   
           <div class="main_content_iner ">
           <div class="container-fluid p-0">
           <div class="row justify-content-center">
           <div class="col-12">
           <div class="QA_section">
           <div class="white_box_tittle list_header">
           <h4>Table</h4>
           <div class="box_right d-flex lms_block">
           <div class="serach_field_2">
           <div class="search_inner">
           <form Active="#">
           <div class="search_field">
           <input type="text" placeholder="Search content here..." />
           </div>
           <button type="submit"> <i class="ti-search"></i> </button>
           </form>
           </div>
           </div>
           <div class="add_button ms-2">
           <a class="btn_1" href="#">EXPORT CSV</a>
           </div>
           </div>
           </div>

           {/* modal begin */}
           <div>
           <Modal open={this.state.openModal} onClose={this.onCloseModal}>
            <Modalzz />
           {/* <section>

            <div className="modal-content cs_modal">
                <div className="modal-header">
                   <h5 className="modal-title">Fill the form with the incident details</h5>
                </div>
            <div className="modal-body">
                <form onSubmit={this.UpdateIncidence}>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="incident-id" value={this.state.id} onChange={this.UpdateIncidencehandleChange} />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter your incidence" value={this.state.incidence} onChange={this.UpdateIncidencehandleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your location" value={this.state.location} onChange={this.UpdateIncidencehandleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="cordinates" value={this.state.cordinates} />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="to whom" value={this.state.to_whom} onChange={this.UpdateIncidencehandleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="by who" value={this.state.by_who} onChange={this.UpdateIncidencehandleChange} /> 
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="details" value={this.state.details} onChange={this.UpdateIncidencehandleChange} /> 
                    </div>
                    
                    <div className="cs_check_box">
                    <input type="checkbox" id="check_box" className="common_checkbox" />

                    </div>
                    <div>	 
                    {
                        this.state.isLoading ? <Button><Spinner animation="border" variant="light" /></Button> : <input className="btn_1 full_width text-center" type="submit" value="SUBMIT"></input>
                    }
                    </div>
                    
                </form>
            </div>
            </div>
        </section>                */}
            </Modal>
            </div>
            {/* modal end */}
           <div class="QA_table mb_30">
   
           <table class="table lms_table_active">
           <thead>
           <tr>
           <th scope="col">Id</th>
           <th scope="col">Incdence</th>
           <th scope="col">Location</th>
           <th scope="col">Cordinates</th>
           {/* <th scope="col">Time</th> */}          
           <th scope="col">To Whom</th>
           <th scope="col">By Who</th>
           <th scope="col">Details</th>
           <th scope="col">Date $ Time</th>
           <th scope="col">Actions</th>
           </tr>
           </thead>
           <tbody> {
            incidences.map( (incid) => (
              <tr key={incid}>
              <td>{incid.id}</td>
              <td>{incid.incident}</td>
              <td>{incid.location}</td>
              <td>{incid.cordinates}</td>
              {/* <td>{incid.time}</td> */}
              <td>{incid.to_whom}</td>
              <td>{incid.by_who}</td>
              <td>{incid.details}</td>
              <td>{incid.datetime}</td>
              <td href=""><Icon name="edit" theme="light" size="tiny" onClick={this.onClickButton} /> <Icon name="delete" theme="light" size="tiny" /> </td>
              </tr>
            )) 
            
            }
           
           </tbody>
           </table>
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
   
           <Footer />
           </section>
   
       </div>
    );
  }
}

export default Monthly_incidence