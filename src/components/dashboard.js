import React, {Component} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Upperbar from './Upperbar'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          incidences: [],
          weeklyCounts:[],
          monthlyCounts: [],
          totalIncidences: [],
          dailyReportersCount: [],
          weeklyReportersCount: [],
          monthlyReportersCount: [],
          allReportersCount: [],
          DataisLoaded: false
        };
      }
      componentDidMount() {
        fetch("http://3.239.32.201:5000/api/v1/incidences/dailycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            incidences: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/incidences/weeklycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            weeklyCounts: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/incidences/monthlycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            monthlyCounts: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/incidences/countall")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            totalIncidences: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/reporters/dailycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            dailyReportersCount: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/reporters/weeklycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            weeklyReportersCount: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/reporters/monthlycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            monthlyReportersCount: json,
            DataisLoaded: true
          });
        })

        fetch("http://3.239.32.201:5000/api/v1/reporters/allreporters")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            allReportersCount: json,
            DataisLoaded: true
          });
        })
      }
    render(){
        const { DataisLoaded, incidences, weeklyCounts, monthlyCounts, totalIncidences, dailyReportersCount, weeklyReportersCount, monthlyReportersCount, allReportersCount } = this.state;
        if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
        return(
            <div class="crm_body_bg">
                               
                 <Navbar />

                <section class="main_content dashboard_part">

                <Upperbar />

                <div class="main_content_iner ">
                <div class="container-fluid p-0">
                <div class="row justify-content-center">
                <div class="col-lg-12">
                <div class="single_element">
                <div class="quick_activity">
                <div class="row">
                <div class="col-12">
                <div class="quick_activity_wrap">
                {/* counting daily begin */}
                <div class="single_quick_activity d-flex">{
                    incidences.map( (incid) => (
                        <div class="single_quick_activity d-flex" key={incid}>
                        <div class="icon">
                        <img src="assets/img/icon/man.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{incid.dailyincident_count}</span> </h3>
                        <p>Daily Incidences</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* counting daily end*/}

                {/* counting weekly incidences begin */}
                <div class="single_quick_activity d-flex">{
                    weeklyCounts.map( (incide) => (
                        <div class="single_quick_activity d-flex" key={incide}>
                        <div class="icon">
                        <img src="assets/img/icon/man.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{incide.weeklyincident_count}</span> </h3>
                        <p>Weekly Incidences</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* counting weekly incidences end */}

                {/* counting monthly incident begin */}
                <div class="single_quick_activity d-flex">{
                    monthlyCounts.map( (incidee) => (
                        <div class="single_quick_activity d-flex" key={incidee}>
                        <div class="icon">
                        <img src="assets/img/icon/wheel.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{incidee.monthlyincident_count}</span> </h3>
                        <p>Monthly Incidences</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* monthly incident count end */}

                {/* counting all incidences begins */}
                <div class="single_quick_activity d-flex">{
                    totalIncidences.map( (incideee) => (
                        <div class="single_quick_activity d-flex" key={incideee}>
                        <div class="icon">
                        <img src="assets/img/icon/wheel.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{incideee.allincident_count}</span> </h3>
                        <p>all Incidences</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* counting ll inidences ends */}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-lg-12 col-xl-12">
                <div class="white_box mb_30 ">
                <div class="box_header border_bottom_1px  ">
                <div class="main-title">
                <h3 class="mb_25">Reporters Dashboard</h3>
                </div>
                </div>
                <div class="income_servay">
                    
                <div class="row">
                {/* daily reporters count*/}
                <div class="col-md-3">{
                dailyReportersCount.map( (reportee) => (
                <div class="count_content">
                <h3><span class="counter">{reportee.countdaily_reporters}</span> </h3>
                <p>Today's Reporters</p>
                </div>
                    ))
                }
                </div>
                {/* daily reorters count */}

                {/* count weekly reporters begin */}
                <div class="col-md-3">{
                weeklyReportersCount.map( (reporteee) => (
                <div class="count_content">
                <h3><span class="counter">{reporteee.countweekly_reporters}</span> </h3>
                <p>week's Reporters</p>
                </div>
                    ))
                }
                </div>
                {/* count weekly reporters end */}
                
                {/* count monthly reporters begin*/}
                <div class="col-md-3">{
                monthlyReportersCount.map( (reporteeee) => (
                <div class="count_content">
                <h3><span class="counter">{reporteeee.countmonthly_reporters}</span> </h3>
                <p>month's Reporters</p>
                </div>
                    ))
                }
                </div>
                {/* count monthly reporters end */}

                {/* alll reporters count begin */}
                <div class="col-md-3">{
                allReportersCount.map( (reporteeeee) => (
                <div class="count_content">
                <h3><span class="counter">{reporteeeee.countall_reporters}</span> </h3>
                <p>all Reporters</p>
                </div>
                    ))
                }
                </div>
                {/* all reporters count end */}
                </div>
                </div>
                <div id="bar_wev"></div>
                </div>
                </div>
                {/* <div class="col-xl-7">
                <div class="white_box QA_section card_height_100">
                <div class="white_box_tittle list_header m-0 align-items-center">
                <div class="main-title mb-sm-15">
                <h3 class="m-0 nowrap">Patients</h3>
                </div>
                <div class="box_right d-flex lms_block">
                <div class="serach_field-area2">
                <div class="search_inner">
                <form Active="#">
                <div class="search_field">
                <input type="text" placeholder="Search here..." />
                </div>
                <button type="submit"> <i class="ti-search"></i> </button>
                </form>
                </div>
                </div>
                </div>
                </div>
                <div class="QA_table ">

                <table class="table lms_table_active2">
                <thead>
                <tr>
                <th scope="col">Patients Name</th>
                <th scope="col">department</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Serial Number</th>
                <th scope="col">Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/pataint.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/2.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/3.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/4.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/5.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/6.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                <tr>
                <th scope="row">
                <div class="patient_thumb d-flex align-items-center">
                <div class="student_list_img mr_20">
                <img src="assets/img/patient/6.png" alt="" srcset="" />
                </div>
                <p>Jhon Kural</p>
                </div>
                </th>
                <td>Monte Carlo</td>
                <td>11/03/2020</td>
                <td>MDC65454</td>
                <td>
                <div class="amoutn_action d-flex align-items-center">
                $29,192
                <div class="dropdown ms-4">
                <a class=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                </div>
                </div>
                </div> </td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
                </div> */}




                <div class="col-xl-5 ">
                <div class="white_box card_height_50 mb_30">
                <div class="box_header border_bottom_1px  ">
                <div class="main-title">
                <h3 class="mb_25">Total Number of incidences</h3>
                </div>
                </div>
                <div id="chart-7"></div>
                <div class="row text-center mt-3">
                <div class="col-sm-6">
                <h6 class="heading_6 d-block">Last Month</h6>
                <p class="m-0">6</p>
                </div>
                <div class="col-sm-6">
                <h6 class="heading_6 d-block">Current Year</h6>
                <p class="m-0">8</p>
                </div>
                </div>
                </div>
                <div class="white_box card_height_50 mb_30">
                <div class="box_header border_bottom_1px  ">
                <div class="main-title">
                <h3 class="mb_25">Total Number of reporters</h3>
                </div>
                </div>
                <div id="chart-8"></div>
                <div class="row text-center mt-3">
                <div class="col-sm-6">
                <h6 class="heading_6 d-block">Last Month</h6>
                <p class="m-0">358</p>
                </div>
                <div class="col-sm-6">
                <h6 class="heading_6 d-block"> Current Year</h6>
                <p class="m-0">194</p>
                </div>
                </div>
                </div>
                </div>

                
                {/* <div class="col-xl-12">
                <div class="white_box card_height_100">
                <div class="box_header border_bottom_1px  ">
                <div class="main-title">
                <h3 class="mb_25">Hospital Staff</h3>
                </div>
                </div>
                <div class="staf_list_wrapper sraf_active owl-carousel">

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/1.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/2.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/3.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/4.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/5.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/1.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/2.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>

                <div class="single_staf">
                <div class="staf_thumb">
                <img src="assets/img/staf/3.png" alt="" />
                </div>
                <h4>Dr. Sysla J Smith</h4>
                <p>Doctor</p>
                </div>
                </div>
                </div>
                </div> */}


                
                <div class="col-xl-6">
                <div class="white_box card_height_100">
                <div class="box_header border_bottom_1px  ">
                <div class="main-title">
                <h3 class="mb_25">Recent Activity</h3>
                </div>
                </div>
                <div class="Activity_timeline">
                <ul>
                <li>
                <div class="activity_bell"></div>
                <div class="activity_wrap">
                <h6>5 min ago</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                </p>
                </div>
                </li>
                <li>
                <div class="activity_bell"></div>
                <div class="activity_wrap">
                <h6>5 min ago</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                </p>
                </div>
                </li>
                <li>
                <div class="activity_bell"></div>
                <div class="activity_wrap">
                <h6>5 min ago</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                </p>
                </div>
                </li>
                <li>
                <div class="activity_bell"></div>
                <div class="activity_wrap">
                <h6>5 min ago</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                </p>
                </div>
                </li>
                </ul>
                </div>
                </div>
                </div>
                
                </div>
                </div>
                </div>

                <Footer />
                </section>
                </div>
                 
            
        )
    }
}

export default Dashboard