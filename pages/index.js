import Head from 'next/head'
import Link from 'next/link'
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
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/></svg>
        </div>
      </div>
      <section className="py-8 py-md-11 bg-light">
        <div className="container">
          <div className="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
              <h1>
                Explore offerings from various countries.
              </h1>
              <p className="font-size-lg text-muted mb-7 mb-md-9">
                We constantly keep you up to date with news on foreign talent policies, costs of living and more.
              </p>
            </div>
          </div> 
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Link href="/destination/[destinationSlug]/role/[roleSlug]" as={"/destination/singapore/role/software-developer"}>
            <a href="#" className="card-anchor" style={{width: "100%"}}>
              <div className="card mb-6 mb-lg-0 pt-11 overlay overlay-black overlay-30 bg-cover shadow-light-lg lift lift-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1499359875449-10bbeb21501e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')"}}>
                <a className="card-body mt-auto text-center pb-11" href="#!">
                  <h2 className="text-white">
                    Singapore
                  </h2>
                </a>
                <a className="card-meta" href="#!">
                  <hr className="card-meta-divider border-white-20" />
                  <p className="h6 text-white-80 mb-0 ml-auto">
                    Last updated: 15<sup>th</sup> Sep 2020
                  </p>

                </a>
              </div>
              </a>
            </Link>
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