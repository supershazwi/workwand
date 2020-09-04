import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'

export const siteTitle = 'Workwand - Find the best countries to work at'

export default function Layout({ children, home }) {
	return (
		<div>
	      <Head>
	        <link rel="icon" href="/favicon.ico" />
	        <meta
	          name="description"
	          content="Find the best countries to work at"
	        />
	        <meta
	          property="og:image"
	          content={`https://og-image.now.sh/${encodeURI(
	            siteTitle
	          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
	        />
	        <meta name="og:title" content={siteTitle} />
	        <meta name="twitter:card" content="summary_large_image" />
	      </Head>
	      <body className="bg-light">
	      	<Navbar />
	      	<main>{children}</main>
	      	<Footer />
	      </body>
	    </div>
	)
}