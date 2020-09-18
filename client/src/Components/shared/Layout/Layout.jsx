import React from 'react'

import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

import './Layout.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='layout'>
        {children}
      </div>
      <Footer />
    </>
  )
}