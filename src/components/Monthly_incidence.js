import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Upperbar from './Upperbar'
import Side_nav from './Side_nav';

class Monthly_incidence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incidences: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://18.234.145.70:5000/api/v1/incidences/monthly")
    .then( (res) => res.json())
    .then( (json) => {
      console.log(json)
      this.setState({
        incidences: json,
        DataisLoaded: true
      });
    })
  }
  render() {
    const { DataisLoaded, incidences } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
    return (
      <div class="crm_body_bg">
      {/* <Navbar /> */}
       <Side_nav />
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
           <a class="btn_1">DELETE</a>
           </div>
           </div>
           </div>
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