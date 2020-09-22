import React from 'react'
import cartIcon from '../../assets/images/icons/cart.svg'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="nav-item nav-logo">Shopping Cart</li>
          <li className="nav-item nav-cart-logo">
            <img src={cartIcon} alt="Cart" width="22px" height="22px" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
