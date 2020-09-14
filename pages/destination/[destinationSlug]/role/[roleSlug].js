import Layout from '../../../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

var Chart = require('chart.js')

export default class Role extends React.Component {

  static async getInitialProps(ctx) {
    const res = await fetch("http://localhost:3000/api/plans/1")
    const results = await res.json()

    let plans = {}

    results.forEach(function(item) {
      if(plans[item.category] == undefined) {
        plans[item.category] = []
      }
      plans[item.category].push(item)
    })  

    return { plans: plans }
  }

  componentDidMount() {
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
                        min: 20, 
                        max: 36 
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

    var ctx = document.getElementById('racialBreakdownChart');
    var racialBreakdownChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Chinese', 'Malay', 'Indian', 'Others'],
            datasets: [{
                label: 'Race',
                data: [65, 20, 10, 5],
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
  }

  render() {
    return (
        <Layout>
          <section className="pd-tp-6 pd-bm-1-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <h6 className="text-uppercase font-weight-bold">Destination</h6>
                  <h2 className="font-weight-bolder">Become a <span style={{ borderBottom: "5px solid #fdcb6e"}}>Software Developer</span> in <span style={{ borderBottom: "5px solid #fdcb6e"}}>Singapore</span></h2>
                </div>
                <div className="col-12 col-md-6">
                  <img src="/img/illustrations/illustration-3.png" className="img-fluid" alt="..." />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-8">

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Shopping/Dollar.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><rect fill="#5f27cd" opacity=".3" x="11.5" y="2" width="2" height="4" rx="1"></rect><rect fill="#5f27cd" opacity=".3" x="11.5" y="16" width="2" height="5" rx="1"></rect><path d="M15.493 8.044a2.933 2.933 0 00-1.093-.846c-.45-.209-.883-.313-1.301-.313-.215 0-.434.019-.655.057-.222.038-.422.11-.599.218a1.48 1.48 0 00-.447.418c-.12.172-.18.39-.18.656 0 .228.047.418.143.57.095.152.234.285.417.399.184.114.403.218.656.314.253.095.538.193.855.294.456.152.931.32 1.425.504a5.33 5.33 0 011.349.731c.405.304.741.68 1.007 1.13.266.45.399 1.01.399 1.682 0 .773-.142 1.44-.428 2.005a3.997 3.997 0 01-1.149 1.396 4.926 4.926 0 01-1.653.817 6.95 6.95 0 01-1.919.266 7.924 7.924 0 01-2.793-.503c-.9-.336-1.647-.814-2.242-1.435l2.128-2.166c.33.405.763.744 1.301 1.017.539.272 1.074.408 1.606.408.24 0 .475-.025.703-.076.228-.05.427-.133.598-.247.172-.114.308-.266.409-.456.101-.19.152-.418.152-.684 0-.253-.063-.469-.19-.646a1.856 1.856 0 00-.542-.485 4.362 4.362 0 00-.873-.399 44.91 44.91 0 00-1.188-.389c-.43-.14-.852-.304-1.263-.494a4.229 4.229 0 01-1.102-.732 3.388 3.388 0 01-.78-1.082c-.196-.425-.294-.941-.294-1.549 0-.747.152-1.387.456-1.919a3.964 3.964 0 011.197-1.311 5.142 5.142 0 011.672-.75 7.581 7.581 0 011.881-.238c.76 0 1.536.14 2.327.418.792.279 1.486.69 2.081 1.235l-2.071 2.185z" fill="#5f27cd"></path></g></svg></span> Role Details</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Average Salary
                            </p>
                          </div>
                          <a href="https://stats.mom.gov.sg/Pages/Occupational-Wages-Tables2019.aspx">
                          <p className="font-weight-bold mb-1">
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
                          <p className="font-weight-bold mb-1">
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
                          <p className="font-weight-bold mb-1">
                            + 2.56%
                          </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Home/Home-heart.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M3.957 8.415L11.48 3.82a1 1 0 011.042 0l7.522 4.596A2 2 0 0121 10.122V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-8.878a2 2 0 01.957-1.707z" fill="#5f27cd" opacity=".3"></path><path d="M13.8 12c-.644 0-1.397.73-1.8 1.2-.403-.47-1.156-1.2-1.8-1.2-1.14 0-1.8.889-1.8 2.02 0 1.253 1.2 2.58 3.6 3.98 2.4-1.4 3.6-2.7 3.6-3.9 0-1.131-.66-2.1-1.8-2.1z" fill="#5f27cd" opacity=".3"></path></g></svg></span> Accommodation</h3>
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
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            ~ 13,000 SGD per month @ 46.64 SGD psm
                          </p>
                          </a>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Heartland Locations
                            </p>
                          </div>
                          <a href="https://www.ura.gov.sg/realEstateIIWeb/rental/search.action">
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            ~ 3,500 SGD per month @ 29.55 SGD psm
                          </p>
                          </a>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Private Apartment Rental
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1" style={{float: "right"}}>
                            3,000 SGD - 4,000 SGD per month
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Minimum Occupancy Period
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            6 months
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Condominium Purchase
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1">
                            800,000 SGD - 2,500,000 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <Link href="/destination/singapore/accommodation/buyers-stamp-duty"><a style={{ fontSize: "0.9375rem"}}>
                            <p className="font-weight-bold mb-1">
                              Buyer's Stamp Duty
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            1% - 3%
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <Link href="/destination/singapore/accommodation/additional-buyers-stamp-duty"><a style={{ fontSize: "0.9375rem"}}>
                            <p className="font-weight-bold mb-1">
                              Additional Buyer's Stamp Duty
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            15%
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Landed Property Purchase
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1">
                            800,000 SGD - 2,500,000 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <Link href="/"><a style={{ fontSize: "0.9375rem"}}>
                            <p className="font-weight-bold mb-1">
                              Requires Approval
                            </p>
                            </a></Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="General/Heart.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16.5 4.5c-1.61 0-3.492 1.825-4.5 3-1.008-1.175-2.89-3-4.5-3C4.651 4.5 3 6.722 3 9.55c0 3.133 3 6.45 9 9.95 6-3.5 9-6.75 9-9.75 0-2.828-1.651-5.25-4.5-5.25z" fill="#5f27cd"></path></g></svg></span> Insurance </h3>
                      <div className="list-group list-group-flush">

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <Link href="/destination/singapore/accommodation/condominium-rental/"><a>
                            <p className="font-weight-bold mb-1">
                              Term Life 
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-weight-bold mb-1">
                            6.5 SGD - 13.7 SGD per month
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Persona
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            30-year old female non-smoker
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Sum Assured
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            200,000 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Coverage Term
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            20 years
                          </p>
                        </div>
                        
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <Link href="/destination/singapore/accommodation/condominium-rental/"><a>
                            <p className="font-weight-bold mb-1">
                              Whole Life 
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-weight-bold mb-1">
                            193 SGD - 260 SGD per month
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Persona
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            30-year old female non-smoker
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Sum Assured
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            200,000 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Coverage Term
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            Till 85
                          </p>
                        </div>

                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <Link href="/destination/singapore/accommodation/condominium-rental/"><a>
                            <p className="font-weight-bold mb-1">
                              Critical Illness
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-weight-bold mb-1">
                            63.80 SGD - 69.10 SGD per month
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Persona
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            30-year old female non-smoker
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Sum Assured
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            200,000 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Coverage Term
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            Till 70
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="General/User.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 11a4 4 0 110-8 4 4 0 010 8z" fill="#5f27cd" opacity=".3"></path><path d="M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z" fill="#5f27cd"></path></g></svg></span> Family</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Legally Married Spouse
                            </p>
                          </div>
                          <Link href="/"><a>
                          <p className="font-weight-bold mb-1">
                            Dependant's Pass
                          </p>
                          </a></Link>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
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
                              Unmarried Children Under 21, Including Those Legally Adopted
                            </p>
                          </div>
                          <Link href="/"><a>
                          <p className="font-weight-bold mb-1">
                            Dependant's Pass
                          </p>
                          </a></Link>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
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
                          <Link href="/"><a>
                          <p className="font-weight-bold mb-1">
                            Long Term Visit Pass
                          </p>
                          </a></Link>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px", borderBottom: "0px", paddingBottom: "0px"}}>
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

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Food/Carrot.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12.886 11.478c-1.601-5.836-.611-9.529 2.97-11.08 2.204 3.101 1.215 6.795-2.97 11.08z" fill="#5f27cd" opacity=".3"></path><path d="M23.06 7.669c-5.836-1.601-9.53-.612-11.08 2.969 3.1 2.205 6.794 1.215 11.08-2.969z" fill="#5f27cd" opacity=".3"></path><path d="M20.005 3.495c-5.854 1.53-8.558 4.234-8.11 8.11 3.787.36 6.49-2.344 8.11-8.11z" fill="#5f27cd" opacity=".3"></path><path d="M2.578 17.513l.29.29a1 1 0 101.414-1.414l-.69-.691 1.012-1.816 1.093 1.093A1 1 0 007.11 13.56l-1.414-1.415a1.011 1.011 0 00-.083-.074l1.016-1.82 1.895 1.894a1 1 0 101.414-1.414L7.818 8.611a1.002 1.002 0 00-.19-.15l.245-.437a2 2 0 013.16-.44l4.883 4.883a2 2 0 01-.44 3.16l-12.007 6.7a1.687 1.687 0 01-2.295-2.296l1.404-2.518z" fill="#5f27cd"></path></g></svg></span> Food & Beverages</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <Link href="/"><a>
                            <p className="font-weight-bold mb-1">
                              Meal At Hawker Centres
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-weight-bold mb-1">
                            8 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <Link href="/"><a>
                            <p className="font-weight-bold mb-1">
                              Dine At Restaurants/Cafes
                            </p>
                            </a></Link>
                          </div>
                          <p className="font-weight-bold mb-1">
                            25 SGD - 40 SGD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Map/Marker#1.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5 10.5C5 6 8 3 12.5 3S20 6.75 20 10.5c0 2.333-2.176 5.536-6.529 9.61a1.5 1.5 0 01-1.994.05C7.16 16.507 5 13.287 5 10.5zm7.5 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#5f27cd"></path></g></svg></span> Transportation</h3>

                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Public Bus
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1">
                            0.92 SGD - 1.50 SGD per trip
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Concession Pass - Unlimited Rides on Buses & Trains
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            128 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Public Train
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1">
                            0.95 SGD - 2.17 SGD per trip
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{paddingTop: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-size-sm text-muted mb-1">
                              Concession Pass - Unlimited Rides on Buses & Trains
                            </p>
                          </div>
                          <p className="font-size-sm text-muted mb-1" style={{float: "right"}}>
                            128 SGD
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Taxi/Ride-hailing
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1">
                            8 SGD - 32 SGD per Transportation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Weather/Cloud-sun.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M13 16a4 4 0 110-8 4 4 0 010 8zm7.5-5.5H22a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010-3zm-3.44-4.629l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 11-2.121-2.12zM13 1.5A1.5 1.5 0 0114.5 3v1.5a1.5 1.5 0 01-3 0V3A1.5 1.5 0 0113 1.5zM5.81 4.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L5.81 6.932a1.5 1.5 0 010-2.121z" fill="#5f27cd" opacity=".3"></path><path d="M4.747 20.043a6 6 0 119.064-6.543h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z" fill="#5f27cd"></path></g></svg></span> Climate</h3>

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
                        <div className="list-group-item d-flex align-items-center">
                          <canvas id="temperatureChart" width="400" height="400"></canvas>
                        </div>
                        <div className="list-group-item d-flex align-items-center" style={{borderBottom: "0px", paddingBottom: "0px"}}>
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Rainfall
                            </p>
                          </div>
                          <p className="font-weight-bold mb-1">
                            100.8mm to 297.9mm
                          </p>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <canvas id="rainfallChart" width="400" height="400"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                    <div className="card-body">

                      <h3 className="card-title text-body font-weight-bold text-purple"><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Shopping/Chart-pie.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z" fill="#5f27cd" opacity=".3"></path><path d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z" fill="#5f27cd"></path></g></svg></span> Racial Breakdown</h3>

                      <div className="list-group-item d-flex align-items-center" style={{border: "0px"}}>
                        <canvas id="racialBreakdownChart" width="400" height="400"></canvas>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-12 col-md-4">

                  <div className="card card-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body">

                       <h3 className="card-title text-body font-weight-bold text-purple">
                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Communication/Clipboard-list.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z" fill="#5f27cd" opacity=".3"></path><path d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z" fill="#5f27cd"></path><rect fill="#5f27cd" opacity=".3" x="10" y="9" width="7" height="2" rx="1"></rect><rect fill="#5f27cd" opacity=".3" x="7" y="9" width="2" height="2" rx="1"></rect><rect fill="#5f27cd" opacity=".3" x="7" y="13" width="2" height="2" rx="1"></rect><rect fill="#5f27cd" opacity=".3" x="10" y="13" width="7" height="2" rx="1"></rect><rect fill="#5f27cd" opacity=".3" x="7" y="17" width="2" height="2" rx="1"></rect><rect fill="#5f27cd" opacity=".3" x="10" y="17" width="7" height="2" rx="1"></rect></g></svg></span> Plans To Get Here
                        </h3>

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

                </div>
              </div>
            </div>
          </section>
        </Layout>
      )
  }
}