import React from 'react'
import {Nav,FooterBanner,Footer} from "../components";
import Head from 'next/head';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <header>
        <Nav/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout