import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default class Navbar extends React.Component {
	state = {
		destinations: []
	}

	componentDidMount() {
	    fetch('http://localhost:3000/api/destinations')
	      .then(destinationsResponse => destinationsResponse.json())
	      .then((destinations) => {
	        this.setState({
          		destinations
	        })
      	})
  	}

  render() {
  	const { destinations } = this.state

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link href="/"><a className="navbar-brand"><h2 className="font-weight-bolder mb-0" style={{ color: "#5f27cd" }}>Workwand</h2></a></Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fe fe-x"></i>
              </button>
              <div className="dropdown ml-auto">
                  <button className="btn btn-xs btn-purple-soft dropdown-toggle" type="button" id="dropdownMenuExtraSmall" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Your Nationality: <strong>Singapore</strong>
                  </button>
                  <div className="dropdown-menu dropdown-menu-xs" aria-labelledby="dropdownMenuExtraSmall" style={{ width: "100%", textAlign: "center" }}>
                    {destinations.map(({ name, slug, id }) => (
                      <a className="dropdown-item" href="#!" key={id}>{ name }</a>
                    ))}
                  </div>
                  
                </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}