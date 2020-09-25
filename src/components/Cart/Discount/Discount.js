import React, { useState } from 'react'
import './Discount.scss'

const Discount = ({ setDiscount }) => {
  // setDiscount action is connected to the Redax Store and want a number like 0.2 or 0.3
  // Error for when the discount code was not entered or entered incorrectly
  const [error, setError] = useState(null)

  const onSubmitDiscount = (event) => {
    event.preventDefault()

    const coupons = [
      { code: 'SC0BB6CBD1', discount: 0.2 },
      { code: 'SC464B1608', discount: 0.3 },
    ]

    // Take code from input
    const couponCode = event.target.elements.coupon.value
    // Find coupon in coupons array
    const coupon = coupons.find((coupon) => coupon.code === couponCode)

    try {
      setDiscount(Number(coupon.discount))
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className="discount">
      <form onSubmit={onSubmitDiscount} className="discount-form">
        <input
          type="text"
          name="coupon"
          placeholder="Enter your Coupon code...."
          className={`discount-form-input ${
            error ? 'discount-form-input-error' : null
          }`}
          onChange={() => setError(null)}
        />
        <button type="submit" className="discount-form-button">
          Apply Coupon
        </button>
      </form>

      {error ? (
        <div className="discount-error">Coupon code is not valid</div>
      ) : null}

      <div className="discount-info">
        <strong>SC0BB6CBD1</strong> for <strong>20%</strong> or
        <strong> SC464B1608</strong> for <strong>30%</strong>
      </div>
    </div>
  )
}

export default Discount
