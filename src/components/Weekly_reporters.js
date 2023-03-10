import React from 'react'
import Footer from './Footer'
import SideNav from  './Side_nav'

class Weekly_reporters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reporters: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://54.245.35.168:5000/api/v1/reporters/weekly")
    .then( (res) => res.json())
    .then( (json) => {
      console.log(json)
      this.setState({
        reporters: json,
        DataisLoaded: true
      });
    })
  }
  render() {
    const { DataisLoaded, reporters } = this.state;
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
           <a class="btn_1" href="#">DELETE</a>
           </div>
           </div>
           </div>
           <div class="QA_table mb_30">
   
           <table class="table lms_table_active">
           <thead>
           <tr>
           <th scope="col">Id</th>
           <th scope="col">First Name</th>
           <th scope="col">Last Name</th>
           <th scope="col">Email</th>
           <th scope="col">Sex</th>
           <th scope="col">Phone Number</th>
           <th scope="col">Date & Time</th>
           </tr>
           </thead>
           <tbody> {
            reporters.map( (rep) => (
              <tr key={rep}>
              <td>{rep.id}</td>
              <td>{rep.first_name}</td>
              <td>{rep.last_name}</td>
              <td>{rep.email}</td>
              <td>{rep.sex}</td>
              <td>{rep.phone_number}</td>
              <td>{rep.datetime}</td>
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

export default Weekly_reporters