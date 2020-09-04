import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-10 pb-8 pb-md-11 text-center">
              <h1 className="display-1 font-weight-bolder" data-aos="fade-up" data-aos-delay="50">
                The research you need before you work abroad.
              </h1>
              <p className="lead text-muted mb-6" data-aos="fade-up" data-aos-delay="100">
                Working in a foreign country is a challenging yet rewarding move. Equip yourself with all the information you need before embarking on this journey.
              </p>
              <form className="rounded mb-4" style={{ border: "2px solid #f0ecfb" }}>
                <div className="input-group input-group-lg">

                  <div className="input-group-prepend">
                    <span className="input-group-text border-0 pr-1">
                      <i className="fe fe-search"></i>
                    </span>
                  </div>

                  <input type="text" className="form-control border-0 px-1" aria-label="Enter your role e.g. Software Developer, Business Analyst, etc." placeholder="Enter your role (e.g. Software Developer, Business Analyst, etc.)" />

                  <div className="input-group-append">
                    <span className="input-group-text border-0 py-0 pl-1 pr-3">
                      <button type="submit" className="btn btn-sm btn-purple-soft">
                        Explore
                      </button>
                    </span>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div> 
      </section>
      <section className="py-8 py-md-11 bg-gray-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h2 className="font-weight-bold">
                Carve your own journey to reach your destination.
              </h2>
              <p className="font-size-lg text-muted mb-7 mb-md-9">
                There's no "one size fits all" plan. No matter where you're from or headed to, we can help.
              </p>
            </div>
          </div> 
          <div className="form-row">
            <div className="col-12 col-lg-6 d-lg-flex pb-1 mb-4">
              <div className="card shadow-light-lg overflow-hidden aos-init aos-animate" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-4 position-relative">
                    <img src="/img/illustrations/illustration-4.png" className="h-75 position-absolute right-0 mt-7 mr-n4" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body py-7 py-md-9 text-center">
                      <h4 className="font-weight-bold">
                        Compare Across Datapoints
                      </h4>
                      <p className="text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-lg-flex pb-1 mb-4">
              <div className="card shadow-light-lg overflow-hidden text-center aos-init aos-animate" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card-body py-7 py-md-9">
                      <h4 className="font-weight-bold">
                        Build A Plan
                      </h4>
                      <p className="text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/img/illustrations/illustration-7.png" className="h-75 position-absolute left-0 mt-7" alt="..." />
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

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/destinations')
  const allDestinations = await res.json()

  return {
    props: { allDestinations },
  }
}