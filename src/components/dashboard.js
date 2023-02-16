import React, {Component} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Upperbar from './Upperbar'
import Side_nav from './Side_nav'

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
        fetch("http://18.234.145.70:5000/api/v1/incidences/dailycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            incidences: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/incidences/weeklycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            weeklyCounts: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/incidences/monthlycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            monthlyCounts: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/incidences/countall")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            totalIncidences: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/reporters/dailycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            dailyReportersCount: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/reporters/weeklycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            weeklyReportersCount: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/reporters/monthlycounts")
        .then( (res) => res.json())
        .then( (json) => {
          console.log(json)
          this.setState({
            monthlyReportersCount: json,
            DataisLoaded: true
          });
        })

        fetch("http://18.234.145.70:5000/api/v1/reporters/allreporters")
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
                               
                <Side_nav /> 
                 {/* <Navbar /> */}

                <section class="main_content dashboard_part">

                {/* <Upperbar /> */}

                <div class="main_content_iner ">
                <div class="container-fluid p-0">
                <div class="row justify-content-center">
                <div class="col-lg-12">
                <div class="single_element">
                <div class="quick_activity">
                <div class="row">
                <div class="col-12">
                <div class="quick_activity_wrap">
                  
                {/* counting daily  INCIDENCE begin */}
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
                {/* counting daily INCIDENCE end*/}

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
                <h3 class="mb_25">Reporters Count</h3>
                </div>
                </div>
                <div class="income_servay">
                    
                <div class="row">

                </div>
                </div>
                <div id="bar_wev"></div>
                </div>
                </div>




                <div class="main_content_iner ">
                <div class="container-fluid p-0">
                <div class="row justify-content-center">
                <div class="col-lg-12">
                <div class="single_element">
                <div class="quick_activity">
                <div class="row">
                <div class="col-12">
                <div class="quick_activity_wrap">
                {/* counting daily reporters begin */}
                <div class="single_quick_activity d-flex">{
                    dailyReportersCount.map( (reportee) => (
                        <div class="single_quick_activity d-flex" key={reportee}>
                        <div class="icon">
                        <img src="assets/img/icon/man.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{reportee.countdaily_reporters}</span> </h3>
                        <p>Daily Reporters</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* counting daily reporters end*/}

                {/* counting weekly reporters begin */}
                <div class="single_quick_activity d-flex">{
                    weeklyReportersCount.map( (reporteee) => (
                        <div class="single_quick_activity d-flex" key={reporteee}>
                        <div class="icon">
                        <img src="assets/img/icon/man.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{reporteee.countweekly_reporters}</span> </h3>
                        <p>Weekly Reporters</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* counting weekly reporters end */}

                {/* counting monthly reportes begin */}
                <div class="single_quick_activity d-flex">{
                    monthlyReportersCount.map( (reporteeee) => (
                        <div class="single_quick_activity d-flex" key={reporteeee}>
                        <div class="icon">
                        <img src="assets/img/icon/wheel.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{reporteeee.countmonthly_reporters}</span> </h3>
                        <p>Monthly Reporters</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* monthly reporters count end */}

                {/* counting all reporters begins */}
                <div class="single_quick_activity d-flex">{
                    allReportersCount.map( (reporteeeee) => (
                        <div class="single_quick_activity d-flex" key={reporteeeee}>
                        <div class="icon">
                        <img src="assets/img/icon/wheel.svg" alt="" />
                        </div>
                        <div class="count_content">
                        <h3><span class="counter">{reporteeeee.countall_reporters}</span> </h3>
                        <p>all Reporters</p>
                        </div>
                        </div>
          
                      )) 
                    
                }               
                </div>
                {/* counting all reporters ends */}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>



              
                {/* <div class="col-xl-5 ">
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
                </div> */}
{/*                
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
                </div> */}
                
                </div>
                </div>
                </div>

                {/* <Footer /> */}
                </div>
                </div>
                </div>
                </section>
                </div>
                 
            
        )
    }
}

export default Dashboard