import Layout from '../../../../components/layout'
import Link from 'next/link'
import { numberWithCommas } from '../../../../lib/helpers'
// import { Markup } from 'interweave';
import Markup from 'react-html-markup';



export default function DestinationPlan({ result, plan_eligibility_details, sources, plan_steps }) {
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
                    <h3 className="card-title text-body font-weight-bolder text-purple">Eligibility Requirements</h3>
                    <Markup htmlString = { result[0].eligibility_details } />
                  </div>
                </div>
                <div className="card card-border border-bleed shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
                  <div className="card-body">
                    <h3 className="card-title text-body font-weight-bolder text-purple">Facts & Figures</h3>
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
                <a href={ result[0].application_link }><button type="button" className="btn btn-purple-soft btn-lg mb-1 btn-block mb-6">
                  <strong>Begin Application</strong>
                </button></a>
                <div className="card card-border border-bleed shadow-light-lg mb-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="card-body">
                        <h3 className="card-title text-body font-weight-bolder text-purple">Steps</h3>
                        <div>
                          <div className="list-group list-group-flush">
                            { plan_steps.map(({ sequence, content, owner, processing_time, deadline, result }) => (
                              <div className="list-group-item d-flex" key={sequence}>
                                <div className="mr-auto" style={{ width: '100%' }}>
                                  <p className="font-weight-bold mb-1">
                                    Step {sequence} <span style={{ float: 'right' }}>{processing_time}</span>
                                  </p>
                                  <p className="text-muted mb-1">{content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                </div>
                <div className="card card-border border-bleed shadow-light-lg mb-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="card-body">
                        <h3 className="card-title text-body font-weight-bolder text-purple">Sources</h3>
                        <div>
                          <div className="list-group list-group-flush">
                            { sources.map(({ name, link, id }) => (
                              <div className="list-group-item d-flex align-items-center" key={id}>
                                <div className="mr-auto">
                                  <a href={ link }>
                                  <p className="font-weight-bold mb-1">
                                    { name } 
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
  const res = await fetch("http://localhost:3000/api/plans")
  const plans = await res.json()

  let paths = []

  plans.forEach(function(plan) {
    let paramsObj = { params: { destinationSlug: plan.name.toLowerCase(), planSlug: plan.slug } }
    paths.push(paramsObj)
  })  

  return {
    paths: paths,
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

  const res3 = await fetch("http://localhost:3000/api/plan-steps/" + params.planSlug)
  const plan_steps = await res3.json()

  return {
    props: { 
      result: result,
      plan_eligibility_details: plan_eligibility_details,
      sources: sources,
      plan_steps: plan_steps
    }
  }
}
