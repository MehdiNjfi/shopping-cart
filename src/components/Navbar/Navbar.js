import React from 'react'
import cartIcon from '../../assets/images/icons/cart.svg'
import './Navbar.scss'
import { connect } from 'react-redux'
import { setShowCart } from '../../redux/actions/actions'

const Navbar = ({ setShowCart }) => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="nav-item nav-logo">Shopping Cart</li>
          {/* setShowCart action is connected to the Redax Store for show or hide cart*/}
          <li className="nav-item nav-cart-logo" onClick={setShowCart}>
            <img src={cartIcon} alt="Cart" width="22px" height="22px" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default connect(null, { setShowCart })(Navbar)
