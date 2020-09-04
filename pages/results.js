import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react'
import Link from 'next/link'

export default class Results extends React.Component {
  componentDidMount () {
    $('#table_id').DataTable({
    });
  }

  render() {
    return (
      <Layout>
        <Head>
          <link href="https://nightly.datatables.net/css/jquery.dataTables.css" rel="stylesheet" type="text/css" />
          <script src="https://nightly.datatables.net/js/jquery.dataTables.js"></script>
        </Head>
        <section className="section pt-12 pt-md-10 pb-8 pb-md-11">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-10 text-center">
              <h1 className="font-weight-bold">
                Search Results for Software Developer
              </h1>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped" id="table_id" >
                  <thead>
                    <tr>
                      <th scope="col">Country</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Visa</th>
                      <th scope="col">Housing</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Singapore</td>
                      <td>S$60,000 - S$120,000</td>
                      <td>S$3,500 - S$6,500</td>
                      <td>Employment Pass</td>
                      <td>S$30,000 - S$42,000</td>
                      <td><Link href="/destination/singapore/role/[roleSlug]" as="/destination/singapore/role/software-developer"><a className="btn btn-xs btn-purple-soft">Explore</a></Link></td>
                    </tr>
                    <tr>
                      <td>Malaysia</td>
                      <td>S$60,000 - S$120,000</td>
                      <td>S$3,500 - S$6,500</td>
                      <td>Employment Pass</td>
                      <td>S$30,000 - S$42,000</td>
                      <td><button type="submit" className="btn btn-xs btn-purple-soft">Explore</button></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}