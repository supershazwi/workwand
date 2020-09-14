import Layout from '../../../../../components/layout'
import { numberWithCommas } from '../../../../../lib/helpers'
import Link from 'next/link'

export default function AdditionalBuyersStampDuty({ average_salary, industry_salaries }) {
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
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex align-items-center">
                            <div className="mr-auto">
                              <Link href="/destination/singapore/average-salary/role/software-developer"><a>
                              <p className="font-weight-bold mb-1">
                                Average Salary
                              </p>
                              </a></Link>
                            </div>
                            <p className="font-weight-bold mb-1">
                              {numberWithCommas(average_salary)} SGD per year
                            </p>
                          </div>
                        </div>
                        <hr/>
	     	            		<table className="table table-striped" style={{ display: "block", overflow: "auto" }}>

  		                      <tr>
  		                        <th rowspan="2" style={{ backgroundColor: "#2c3e50", color: "white", border: "1px solid #161c2d", verticalAlign: "middle" }}>Industry</th>
  		                        <th scope="col" colSpan="3" style={{ backgroundColor: "#2c3e50", color: "white", textAlign: "center", border: "1px solid #161c2d" }}>Basic Wage (Monthly)</th>
  		                        <th scope="col" colSpan="3" style={{ backgroundColor: "#2c3e50", color: "white", textAlign: "center", border: "1px solid #161c2d" }}>Gross Wage (Monthly)</th>
  		                      </tr>


  		                      <tr>
  		                        <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>25<sup>th</sup> Percentile</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>Median</td>
  		                        <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>75<sup>th</sup> Percentile</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>25<sup>th</sup> Percentile</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>Median</td>
                              <td style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>75<sup>th</sup> Percentile</td>
  		                      </tr>

                            { industry_salaries.map(({ industry, basic_25th, basic_median, basic_75th, gross_25th, gross_median, gross_75th }) => (
                              <tr>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{industry}</td>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{numberWithCommas(basic_25th)}</td>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{numberWithCommas(basic_median)}</td>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{numberWithCommas(basic_75th)}</td>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{numberWithCommas(gross_25th)}</td>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{numberWithCommas(gross_median)}</td>
                              <td className="font-size-sm" style={{ textAlign: "center", border: "1px solid #161c2d", padding: "0.5rem", verticalAlign: "middle" }}>{numberWithCommas(gross_75th)}</td>
                            </tr>
                            ))}

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
                                <a href="https://stats.mom.gov.sg/Pages/Occupational-Wages-Tables2019.aspx">
                                <p className="font-weight-bold mb-1">
                                	Table: Occupational Wages 2019 <sup><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Navigation/Up-right.svg"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><rect fill="#335EEA" opacity=".3" transform="rotate(45 11.646 12.854)" x="10.646" y="5.854" width="2" height="14" rx="1"></rect><path d="M8.11 8.904a1 1 0 110-2h8.486a1 1 0 011 .956l.353 8.132a1 1 0 11-1.998.087l-.312-7.175H8.11z" fill="#335EEA"></path></g></svg></span></sup>
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

export async function getStaticPaths() {
  return {
    paths: [ 
      { params: { destinationSlug: 'singapore', roleSlug: 'software-developer' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const average_salary_and_industry_salaries_fetch = await fetch("http://localhost:3000/api/destination/" + params.destinationSlug + "/average-salary/role/" + params.roleSlug)
  const average_salary_and_industry_salaries = await average_salary_and_industry_salaries_fetch.json()

  const average_salary = average_salary_and_industry_salaries.average_salary
  const industry_salaries = average_salary_and_industry_salaries.industry_salaries

  return {
    props: { 
      average_salary: average_salary,
      industry_salaries: industry_salaries
    }
  }
}
