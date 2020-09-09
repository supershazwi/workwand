import Layout from '../../../../../components/layout'
import Link from 'next/link'

export default function AdditionalBuyersStampDuty() {
  return (
  	<Layout>
  		<section className="pd-tp-6 pd-bm-1-5">
  		  	<div className="container">
  		    	<div className="row align-items-center">
  		      		<div className="col-12 col-md-12">
  		        		<h6 className="text-uppercase font-weight-bold">Role Details</h6>
  		        		<h2 className="font-weight-bolder"><span style={{ borderBottom: "5px solid #fdcb6e"}}>Average Salary of Software Developers</span> in <span style={{ borderBottom: "5px solid #fdcb6e"}}>Singapore</span></h2>
  		       		</div>
  		       	</div>
  		    </div>
  		</section>
  		<section className="py-8 py-md-5">
  		  	<div className="container">
		       	<div className="row">
     	          	<div className="col-12 col-md-8">
	     	            <div className="card card-border border-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
	     	            	<div className="card-body">
	     	            		<table className="table table-striped" style={{ display: "block", overflow: "auto" }}>

  		                      <tr>
  		                        <th rowspan="2" style={{ backgroundColor: "#2c3e50", color: "white", border: "1px solid #f9fbfd", verticalAlign: "middle" }}>Industry</th>
  		                        <th scope="col" colspan="3" style={{ backgroundColor: "#2c3e50", color: "white", textAlign: "center", border: "1px solid #f9fbfd" }}>Basic Wage</th>
  		                        <th scope="col" colspan="3" style={{ backgroundColor: "#2c3e50", color: "white", textAlign: "center", border: "1px solid #f9fbfd" }}>Gross Wage</th>
  		                      </tr>


  		                      <tr>
  		                        <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #f9fbfd", padding: "0.5rem", verticalAlign: "middle" }}>25<sup>th</sup> Percentile</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #f9fbfd", padding: "0.5rem", verticalAlign: "middle" }}>Median</td>
  		                        <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #f9fbfd", padding: "0.5rem", verticalAlign: "middle" }}>75<sup>th</sup> Percentile</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #f9fbfd", padding: "0.5rem", verticalAlign: "middle" }}>25<sup>th</sup> Percentile</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #f9fbfd", padding: "0.5rem", verticalAlign: "middle" }}>Median</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #f9fbfd", padding: "0.5rem", verticalAlign: "middle" }}>75<sup>th</sup> Percentile</td>
  		                      </tr>

  		                  </table>
	     	            	</div>
	     	            </div>
     	          	</div>
     	          	<div className="col-12 col-md-4">

       	            <div className="card card-border border-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
       	              <div className="card-body">

   	                	   <h3 className="card-title text-body font-weight-bolder">
       	                  <span data-toggle="tooltip" data-placement="top" title="" data-original-title="General/Search.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z" fill="#161c2d" opacity=".3"></path><path d="M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z" fill="#161c2d"></path></g></svg></span> Sources
       	                  </h3>
       	                <div>
       	                  <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center">
                              <div className="mr-auto">
                                <a href="https://www.iras.gov.sg/IRASHome/Other-Taxes/Stamp-Duty-for-Property/Working-out-your-Stamp-Duty/Buying-or-Acquiring-Property/What-is-the-Duty-that-I-Need-to-Pay-as-a-Buyer-or-Transferee-of-Residential-Property/Additional-Buyer-s-Stamp-Duty--ABSD-/">
                                <p className="font-weight-bold mb-1">
                                	IRAS | Additional Buyer's Stamp Duty (BSD) <sup><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Navigation/Up-right.svg"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><rect fill="#335EEA" opacity=".3" transform="rotate(45 11.646 12.854)" x="10.646" y="5.854" width="2" height="14" rx="1"></rect><path d="M8.11 8.904a1 1 0 110-2h8.486a1 1 0 011 .956l.353 8.132a1 1 0 11-1.998.087l-.312-7.175H8.11z" fill="#335EEA"></path></g></svg></span></sup>
                                </p>
                                </a>
                              </div>
                            </div>
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