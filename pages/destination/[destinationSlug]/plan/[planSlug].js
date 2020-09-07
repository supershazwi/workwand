import Layout from '../../../../components/layout'
import Link from 'next/link'
import { numberWithCommas } from '../../../../lib/helpers'
// import { Markup } from 'interweave';
import Markup from 'react-html-markup';



export default function DestinationPlan({ result, plan_eligibility_details, sources }) {
  return (
    <Layout>
      <section className="pd-tp-6 pd-bm-1-5">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-12">
                  <h6 className="text-uppercase font-weight-bold">Plan</h6>
                  <h2 className="font-weight-bolder">Start 
                  <span> { ["A", "E", "I", "O", "U"].includes(result[0].plan_name.charAt(0)) ? "an" : "a" } </span>
                  <span style={{ borderBottom: "5px solid #fdcb6e"}}>{ result[0].plan_name }</span> in <span style={{ borderBottom: "5px solid #fdcb6e"}}>{ result[0].destination_name }</span></h2>
                  <p>{ result[0].remarks } </p>
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
                    <h3 className="card-title text-body font-weight-bold text-purple">
                      <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Navigation/Double-check.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20.738 5.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z" fill="#5f27cd" opacity=".3"></path><path d="M15.738 6.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z" fill="#5f27cd"></path></g></svg></span> Elibility Requirements
                    </h3>
                    <Markup htmlString = { result[0].eligibility_details } />
                  </div>
                </div>
                <div className="card card-border border-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                  <div className="card-body">
                    <h3 className="card-title text-body font-weight-bold text-purple">
                      <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Code/Info-circle.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><circle fill="#5f27cd" opacity=".3" cx="12" cy="12" r="10"></circle><rect fill="#5f27cd" x="11" y="10" width="2" height="7" rx="1"></rect><rect fill="#5f27cd" x="11" y="7" width="2" height="2" rx="1"></rect></g></svg></span> Facts & Figures
                    </h3>
                    <div>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <p className="font-weight-bold mb-1">
                              Costs
                            </p>
                            
                            <ul className="mb-1">
                            { result.map(({ content, id }) => (
                              <li className="text-muted" key={id}>{content}</li>
                            ))}
                            </ul>

                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <p className="font-weight-bold mb-1">
                              Application Duration
                            </p>

                            <p className="text-muted mb-1">
                              Approximately { result[0].application_duration / 7 } weeks
                            </p>

                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          
                          <div className="mr-auto">
                            
                            <p className="font-weight-bold mb-1">
                              Validity Period
                            </p>

                            <p className="text-muted mb-1">
                              { Math.floor(result[0].validity / 30) } months
                            </p>

                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">                          
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Renewable
                            </p>
                            <p className="text-muted mb-1">
                              { (result[0].renewable) ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Passes for Family
                            </p>
                            <p className="text-muted mb-1">
                              { (result[0].passes_for_family) ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Foreign Worker Levy
                            </p>
                            <p className="text-muted mb-1">
                              { (result[0].foreign_worker_levy) ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                          <div className="mr-auto">
                            <p className="font-weight-bold mb-1">
                              Quota
                            </p>
                            <p className="text-muted mb-1">
                              { numberWithCommas(result[0].quota) == -1 ? "No quota" : numberWithCommas(result[0].quota)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <a href={ result[0].application_link } type="button" className="btn btn-purple-soft btn-lg mb-1 btn-block mb-6">
                  <strong>Begin Application</strong>
                </a>
                <div className="card card-border border-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="card-body">

                         <h3 className="card-title text-body font-weight-bold text-purple">
                          <span data-toggle="tooltip" data-placement="top" title="" data-original-title="General/Search.svg"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z" fill="#5f27cd" opacity=".3"></path><path d="M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z" fill="#5f27cd"></path></g></svg></span> Sources
                          </h3>
                        <div>
                          <div className="list-group list-group-flush">
                            { sources.map(({ name, link, id }) => (
                              <div className="list-group-item d-flex align-items-center" key={id}>
                                <div className="mr-auto">
                                  <a href={ link }>
                                  <p className="font-weight-bold mb-1">
                                    { name } <sup><span data-toggle="tooltip" data-placement="top" title="" data-original-title="Navigation/Up-right.svg"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><rect fill="#5f27cd" opacity=".3" transform="rotate(45 11.646 12.854)" x="10.646" y="5.854" width="2" height="14" rx="1"></rect><path d="M8.11 8.904a1 1 0 110-2h8.486a1 1 0 011 .956l.353 8.132a1 1 0 11-1.998.087l-.312-7.175H8.11z" fill="#5f27cd"></path></g></svg></span></sup>
                                  </p>
                                  </a>
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

export async function getStaticPaths() {
  return {
    paths: [ 
      { params: { destinationSlug: 'singapore', planSlug: 'work-holiday-pass-under-work-holiday-programme-singapore' } },
      { params: { destinationSlug: 'singapore', planSlug: 'work-holiday-pass-under-work-and-holiday-visa-programme-singapore' } },
      { params: { destinationSlug: 'singapore', planSlug: 'employment-pass-singapore' } },
      { params: { destinationSlug: 'singapore', planSlug: 'entrepass-singapore' } }  
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const res = await fetch("http://localhost:3000/api/plan/" + params.planSlug)
  const return_array = await res.json()

  const result = return_array.result
  const plan_eligibility_details = return_array.plan_eligibility_details

  const res2 = await fetch("http://localhost:3000/api/source/" + params.planSlug)
  const sources = await res2.json()

  return {
    props: { 
      result: result,
      plan_eligibility_details: plan_eligibility_details,
      sources: sources
    }
  }
}
