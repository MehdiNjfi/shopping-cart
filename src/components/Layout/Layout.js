import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.scss'

const Layout = (props) => {
  return (
    <div className="container">
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
