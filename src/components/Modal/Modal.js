import React from 'react'
import './Modal.scss'

const Modal = (props) => {
  return (
    <React.Fragment>
      {/* Black card background and the card is hidden when clicked on this background */}
      {/* setShowCart action is connected to the Redax Store */}
      {props.showCart ? (
        <div className="dark-overlay" onClick={props.setShowCart}></div>
      ) : null}
      <div
        className="container modal"
        // When showCart is false hide cart
        style={{
          transform: props.showCart ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.showCart ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Modal
