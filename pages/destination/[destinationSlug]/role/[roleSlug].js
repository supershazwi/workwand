import Layout from '../../../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

import Unsplash, { toJson } from 'unsplash-js'

var Chart = require('chart.js')

const unsplash = new Unsplash({ accessKey: "fBhbW3OH3YFqttxLXQSYI_JAYs94ZxTEtQQVNsP3lnQ" });

export default class Role extends React.Component {

  constructor(props) {
    super(props);
    this.state = { imageArray: [], destinationSlug: "" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = this.state.imageArray;

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        shareEl: false,
        zoomEl: false,
        fullscreenEl: false,
        index: index // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }

  static async getInitialProps(ctx) {

    const destinationSlug = ctx.query.destinationSlug
    const res = await fetch("http://localhost:3000/api/plans/1")
    const results = await res.json()

    let plans = {}

    results.forEach(function(item) {
      if(plans[item.category] == undefined) {
        plans[item.category] = []
      }
      plans[item.category].push(item)
    })  

    return { plans: plans, destinationSlug: destinationSlug }
  }

  async componentDidMount() {
    var ctx = document.getElementById('temperatureChart');
    var temperatureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Highest Temperature',
                data: [31, 31, 32, 32, 32, 32, 31, 31, 31, 32, 31, 31],
                backgroundColor: [
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                    'rgba(255, 118, 117, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'Lowest Temperature',
                data: [24, 25, 25, 26, 26, 26, 26, 26, 25, 25, 25, 25],
                backgroundColor: [
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                    'rgba(116, 185, 255, 1.0)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 22, 
                        max: 34 
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('rainfallChart');
    var rainfallChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Rainfall',
                data: [211.4, 100.8, 155.2, 163.4, 154.9, 131.7, 181.6, 169.9, 169.1, 174.9, 219.9, 297.9],
                backgroundColor: [
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(0, 184, 148, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('crimeChart');
    var crimeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Overall Crime Rate Per 100,000 Population',
                data: [608, 584, 555, 591, 611, 590, 582, 587, 616],
                backgroundColor: [
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                ],
                borderColor: [
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 400, 
                        max: 700
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('literacyChart');
    var literacyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Literacy Rate (%)',
                data: [96.2, 96.4, 96.6, 96.7, 96.8, 97, 97.2, 97.3, 97.5],
                backgroundColor: [
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                ],
                borderColor: [
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [
                    {
                      ticks: {
                        min: 0,
                        max: this.max,// Your absolute max value
                        callback: function (value) {
                          return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                        },
                      },
                    },
                  ],
            }
        }
    });

    var ctx = document.getElementById('racialBreakdownChart');
    var racialBreakdownChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Chinese', 'Malay', 'Indian', 'Others'],
            datasets: [{
                label: 'Race',
                data: [2993708, 540783, 362637, 129081],
                backgroundColor: [
                    'rgba(243, 156, 18, 0.2)',
                    'rgba(0, 184, 148, 0.2)',
                    'rgba(155, 89, 182, 0.2)',
                    'rgba(52, 152, 219, 0.2)',
                ],
                borderColor: [
                    'rgba(243, 156, 18, 1)',
                    'rgba(0, 184, 148, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(52, 152, 219, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
        }
    });

    var ctx = document.getElementById('genderBreakdownChart');
    var genderBreakdownChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                label: 'Gender',
                data: [1969382, 2056827],
                backgroundColor: [
                    'rgba(116, 185, 255, 0.2)',
                    'rgba(255, 118, 117, 0.2)',
                ],
                borderColor: [
                    'rgba(116, 185, 255, 1)',
                    'rgba(255, 118, 117, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('humidityChart');
    var humidityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Humidity',
                data: [84.7, 82.8, 83.8, 84.8, 84.4, 83, 82.8, 83, 83.4, 84.1, 86.4, 86.9],
                backgroundColor: [
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                    'rgba(39, 60, 117, 0.2)',
                ],
                borderColor: [
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                    'rgba(39, 60, 117, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 80, 
                        max: 89 
                    }
                }]
            }
        }
    });

    const res = await fetch("https://api.unsplash.com/search/photos?client_id=fBhbW3OH3YFqttxLXQSYI_JAYs94ZxTEtQQVNsP3lnQ&page=1&query=" + this.props.destinationSlug)
    const return_array = await res.json()

    let imageArray = []

    return_array.results.forEach(function(imageObject) {
      imageArray.push({
        src: imageObject.urls.full,
        title: imageObject.description,
        w: imageObject.width,
        h: imageObject.height
      })
    })

    this.setState({ imageArray: imageArray })
  }

  render() {
    return (
        <Layout>
          <Head>
            <link href="/css/photoswipe.css" rel="stylesheet" type="text/css" />
            <link href="/css/default-skin.css" rel="stylesheet" type="text/css" />
            <script src="/js/photoswipe.min.js"></script> 
            <script src="/js/photoswipe-ui-default.min.js"></script> 
          </Head>
          <section className="pd-tp-6 pd-bm-1-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <h6 className="text-uppercase font-weight-bold">Destination</h6>
                  <h2 className="font-weight-bolder">Become a <span style={{ borderBottom: "5px solid #fdcb6e"}}>Software Developer</span> in <span style={{ borderBottom: "5px solid #fdcb6e", textTransform: "capitalize"}}>{this.props.destinationSlug}</span></h2>
                </div>
                <div className="col-12 col-md-6">
                  <img src="/img/illustrations/illustration-3.png" className="img-fluid" alt="..." />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-8">

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Role Details</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Average Salary
                            </p>
                          </div>
                          <a href="https://stats.mom.gov.sg/Pages/Occupational-Wages-Tables2019.aspx">
                          <p className="font-size-sm mb-1">
                            61,236 SGD per year
                          </p>
                          </a>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Job Vacancy
                            </p>
                          </div>
                          <a href="https://stats.mom.gov.sg/Pages/JobVacancyTimeSeries.aspx">
                          <p className="font-size-sm mb-1">
                            1,220
                          </p>
                          </a>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Industry Growth
                            </p>
                          </div>
                          <a href="https://stats.mom.gov.sg/Pages/JobVacancyTimeSeries.aspx">
                          <p className="font-size-sm mb-1">
                            + 2.56%
                          </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Accommodation</h3>
                      <div className="list-group list-group-flush">

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Condominium Rental
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Prime Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 13,000 SGD per month @ 4.51 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Heartland Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 3,500 SGD per month @ 3.16 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Condominium Purchase
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Prime Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 9,200,000 SGD @ 3,189 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Heartland Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 1,250,000 SGD @ 1,117 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Landed Property Rental
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Prime Locations
                            </p>
                          </div>
                          
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 9,500 SGD per month @ 4.24 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Heartland Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 5,500 SGD per month @ 1.38 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Landed Property Purchase
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Prime Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 7,500,000 SGD @ 2,381 SGD psf
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Heartland Locations
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                            ~ 4,000,000 SGD @ 1,408 SGD psf
                          </a>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Insurance</h3>
                      <div className="list-group list-group-flush">

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Term Life
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              30-yo female non-smoker, 200,000 SGD for 20 years
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            6.5 SGD - 13.7 SGD per month
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Whole Life
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              30-yo female non-smoker, 200,000 SGD till 85
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            193 SGD - 260 SGD per month
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Critical Illness
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              30-yo female non-smoker, 200,000 SGD till 70
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            63.80 SGD - 69.10 SGD per month
                            </a>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Banks</h3>
                      <div className="list-group list-group-flush">

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Development Bank of Singapore (DBS)
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              DBS Multiplier
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            0.7% - 2% per year
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              United Overseas Bank (UOB)
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              UOB One 
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            0.25% - 0.75% per year
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Oversea-Chinese Banking Corporation (OCBC)  
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              OCBC 360
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            0.4% - 1.2% per year
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Standard Chartered 
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              BonusSaver
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            2.38% per year
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Post Office Savings Bank (POSB)
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              POSB Save As You Earn (SAYE)
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            2% per year
                            </a>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                    <h3 className="card-title text-body font-weight-bolder text-purple">Family</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Legally Married Spouse
                            </p>
                          </div>
                          <p className="font-size-sm mb-1">
                          <a href="/">
                            Dependant's Pass
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Your Minimum Salary Required
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            6,000 SGD per month
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto" style={{ width: "65%" }}>
                            <p className="font-weight-bold mb-1">
                              Unmarried Children Under 21
                            </p>
                          </div>
                          <p className="font-size-sm mb-1">
                          <a href="/">
                            Dependant's Pass
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Your Minimum Salary Required
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            6,000 SGD per month
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto" style={{ width: "65%" }}>
                            <p className="font-weight-bold mb-1">
                              Parents
                            </p>
                          </div>
                          <p className="font-size-sm mb-1">
                          <a href="/">
                            Long Term Visit Pass
                          </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Your Minimum Salary Required
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            12,000 SGD per month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Food & Beverages</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Hawker Centres
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Chicken Rice
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            4.00 SGD
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Nasi Lemak
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            4.50 SGD
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Economy Rice
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            3.50 SGD
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Restaurants/Cafes
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Cheeseburger
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            15.00 SGD
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Steak with Mashed Potatoes
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            26.00 SGD
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Grilled Norwegian Salmon
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            24.00 SGD
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Leisure</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Hiking
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Bukit Timah Nature Reserve
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            Elevation: 164 metres, Trail: 1.2 kilometres
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Mount Faber
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            Elevation: 106 metres, Trail: 3 kilometres
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Southern Ridges
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            Elevation: 78 metres, Trail: 10 kilometres
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Water Activities
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Paddle Boarding
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            60 SGD - 80 SGD per hour
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Kayaking
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            7.50 SGD - 9 SGD per hour
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Prawning
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            10.50 SGD per hour
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Picnic
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Marina Barrage
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Botanic Gardens
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              HortPark
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Transportation</h3>

                      <h3 className="card-title text-body font-weight-bold text-purple">Domestic</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Public Bus
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Card Fare
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="https://www.sbstransit.com.sg/fares-and-concessions">
                            0.92 SGD - 2.17 SGD per trip
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Cash Fare
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="https://www.sbstransit.com.sg/fares-and-concessions">
                            1.70 SGD - 2.80 SGD per trip
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Concession Pass 
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="https://www.sbstransit.com.sg/fares-and-concessions">
                            128 SGD
                            </a>
                          </p>
                        </div>
                        
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Public Train
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Card Fare
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="https://www.sbstransit.com.sg/fares-and-concessions">
                            0.42 SGD - 1.67 SGD per trip
                            </a>
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Concession Pass 
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="https://www.sbstransit.com.sg/fares-and-concessions">
                            128 SGD
                            </a>
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Taxi/Ride-hailing
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Fare 
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            <a href="#">
                            8 SGD - 32 SGD per trip
                            </a>
                          </p>
                        </div>

                      </div>

                      <h3 className="card-title text-body font-weight-bold text-purple" style={{ marginTop: "1.5rem" }}>International</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              International Flights
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Regional Ferries
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Climate</h3>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Temperature
                                </p>
                              </div>
                              <p className="font-weight-bold mb-1">
                                24°C - 32°C 
                              </p>
                            </div>
                            <div className="list-group-item d-flex align-items-center" style={{border: "0px"}}>
                              <canvas id="temperatureChart" width="400" height="400"></canvas>
                            </div>
                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Rainfall
                                </p>
                              </div>
                              <p className="font-weight-bold mb-1">
                                100.8mm - 297.9mm
                              </p>
                            </div>
                            <div className="list-group-item d-flex align-items-center">
                              <canvas id="rainfallChart" width="400" height="400"></canvas>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Humidity
                                </p>
                              </div>
                              <p className="font-weight-bold mb-1">
                                82.8% - 86.9%
                              </p>
                            </div>
                            <div className="list-group-item d-flex align-items-center">
                              <canvas id="humidityChart" width="400" height="400"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">Other Stats</h3>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Racial Breakdown
                                </p>
                              </div>
                            </div>
                            <div className="list-group-item d-flex align-items-center" style={{border: "0px"}}>
                              <canvas id="racialBreakdownChart" width="400" height="400"></canvas>
                            </div>

                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Crime Rate
                                </p>
                              </div>
                            </div>
                            <div className="list-group-item d-flex align-items-center">
                              <canvas id="crimeChart" width="400" height="400"></canvas>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Gender Breakdown
                                </p>
                              </div>
                            </div>
                            <div className="list-group-item d-flex align-items-center" style={{border: "0px"}}>
                              <canvas id="genderBreakdownChart" width="400" height="400"></canvas>
                            </div>

                            <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                              <div className="mr-auto">
                                <p className="font-weight-bold mb-1">
                                  Literacy Rate
                                </p>
                              </div>
                            </div>
                            <div className="list-group-item d-flex align-items-center">
                              <canvas id="literacyChart" width="400" height="400"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-12 col-md-4">

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body">
                      <h3 className="card-title text-body font-weight-bolder text-purple">Plans To Get Here</h3>

                      <div>
                        <div className="list-group list-group-flush">
                          <div className="mb-3">
                            <span className="badge badge-pill badge-purple-soft" style={{ display: "block" }}>
                              <span className="h6 text-uppercase">Professionals</span>
                            </span>
                          </div>

                          { this.props.plans['Professionals'].map(({ name, slug, remarks }, index, array) => (
                            <div className="list-group-item d-flex align-items-center" style={{ borderBottomColor: "transparent" }}>
                              <div className="mr-auto">
                                <Link href="/destination/[destinationSlug]/plan/[planSlug]" as={"/destination/singapore/plan/" + slug}><a>
                                <p className="font-weight-bold mb-1">
                                  { name }
                                </p>
                                </a></Link>
                                <p className="font-size-sm text-muted mb-1">
                                  { remarks }
                                </p>
                              </div>
                            </div>
                          ))}

                          <div className="mb-3 mt-3">
                            <span className="badge badge-pill badge-purple-soft" style={{ display: "block" }}>
                              <span className="h6 text-uppercase">Skilled & Semi-skilled</span>
                            </span>
                          </div>

                          { this.props.plans['Skilled & Semi-skilled Workers'].map(({ name, slug, remarks }, index, array) => (
                            <div className="list-group-item d-flex align-items-center" style={{ borderBottomColor: "transparent" }}>
                              <div className="mr-auto">
                                <Link href="/destination/[destinationSlug]/plan/[planSlug]" as={"/destination/singapore/plan/" + slug}><a>
                                <p className="font-weight-bold mb-1">
                                  { name }
                                </p>
                                </a></Link>
                                <p className="font-size-sm text-muted mb-1">
                                  { remarks }
                                </p>
                              </div>
                            </div>
                          ))}

                          <div className="mb-3 mt-3">
                            <span className="badge badge-pill badge-purple-soft" style={{ display: "block" }}>
                              <span className="h6 text-uppercase">Trainees & Students</span>
                            </span>
                          </div>
                          
                          { this.props.plans['Trainees & Students'].map(({ name, slug, remarks }) => (
                            <div className="list-group-item d-flex align-items-center" style={{ borderBottom: "0px" }}>
                              <div className="mr-auto">
                                <Link href="/destination/[destinationSlug]/plan/[planSlug]" as={"/destination/singapore/plan/" + slug}><a>
                                <p className="font-weight-bold mb-1">
                                  { name }
                                </p>
                                </a></Link>
                                <p className="font-size-sm text-muted mb-1">
                                  { remarks }
                                </p>
                              </div>
                            </div>
                          ))}

                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bolder text-purple">News</h3>

                      <div className="list-group list-group-flush">

                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <a href="https://www.mom.gov.sg/newsroom/press-releases/2020/0827-tightening-of-work-pass-requirements">
                            <p className="font-weight-bold mb-1">
                              Tightening of Work Pass Requirements
                            </p>
                            </a>

                            <p className="font-size-sm text-muted mb-0">
                              Ministry of Manpower, 27<sup>th</sup> August 2020
                            </p>

                          </div>

                        </div>

                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <a href="https://www.mom.gov.sg/newsroom/press-releases/2020/0801-fwl-waiver-and-rebates-extended-for-the-cmp-sectors">
                            <p className="font-weight-bold mb-1">
                              Foreign Worker Levy Waiver and Rebates Extended for Construction, Marine Shipyard and Process Sectors
                            </p>
                            </a>

                            <p className="font-size-sm text-muted mb-0">
                              Ministry of Manpower, 1<sup>st</sup> August 2020
                            </p>

                          </div>

                        </div>

                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <a href="https://www.mom.gov.sg/newsroom/press-releases/2020/0627-foreign-worker-levy-rebates-extended-for-construction-marine-shipyard-and-process-sector">
                            <p className="font-weight-bold mb-1">
                              Foreign Worker Levy Rebates Extended for Construction, Marine Shipyard and Process Sectors
                            </p>
                            </a>

                            <p className="font-size-sm text-muted mb-0">
                              Ministry of Manpower, 27<sup>th</sup> June 2020
                            </p>

                          </div>

                        </div>

                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <a href="https://www.mom.gov.sg/newsroom/press-releases/2020/0625-140-work-passes-revoked-for-breach-of-circuit-breaker-measures-shn-qo">
                            <p className="font-weight-bold mb-1">
                              140 Work Passes Revoked for Breach of Circuit Breaker Measures, Stay-Home Notices or Quarantine Orders
                            </p>
                            </a>

                            <p className="font-size-sm text-muted mb-0">
                              Ministry of Manpower, 25<sup>th</sup> June 2020
                            </p>

                          </div>

                        </div>

                        <div className="list-group-item align-items-center" style={{ textAlign: "center", marginTop: "1rem" }}>
                            
                            <a href="https://www.mom.gov.sg/newsroom/press-releases?category=Work+passes+and+permits&page=1">
                            <p className="font-weight-bold mb-1">
                              Read More
                            </p>
                            </a>

                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body" style={{paddingBottom: "0.75rem"}}>

                      <h3 className="card-title text-body font-weight-bolder text-purple">Gallery</h3>

                      <div className="row">
                        { this.state.imageArray.map(({id, src}, index, array) => (
                          <div className="col-lg-4" style={{padding: "2px"}}><img src={src} alt="..." className="card-img" onClick={() => this.handleClick(index)} style={{ height: "5rem" }} key={id} /></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                      <div className="pswp__bg"></div>
                      <div className="pswp__scroll-wrap">
                          <div className="pswp__container">
                              <div className="pswp__item"></div>
                              <div className="pswp__item"></div>
                              <div className="pswp__item"></div>
                          </div>
                          <div className="pswp__ui pswp__ui--hidden">

                              <div className="pswp__top-bar">

                                  <div className="pswp__counter"></div>

                                  <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

                                  <button className="pswp__button pswp__button--share" title="Share"></button>

                                  <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                                  <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                  <div className="pswp__preloader">
                                      <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                          <div className="pswp__preloader__donut"></div>
                                        </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                  <div className="pswp__share-tooltip"></div> 
                              </div>

                              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                              </button>

                              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                              </button>

                              <div className="pswp__caption">
                                  <div className="pswp__caption__center"></div>
                              </div>

                          </div>

                      </div>

                  </div>

                </div>
              </div>
            </div>
          </section>
        </Layout>
      )
  }
}