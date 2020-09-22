import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setProducts } from '../../redux/actions/actions'
import { getVisibleProducts } from '../../redux/reducers/products'

const ProductsContainer = ({ products, setProducts }) => {
  useEffect(() => {
    fetch(
      'https://jsonblob.com/api/jsonblob/ab70f01d-fc06-11ea-a8f0-e15d461afba2'
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [setProducts])

  return <section>ProductsContainer</section>
}

const mapStateToProps = (state) => {
  return { products: getVisibleProducts(state.products) }
}

export default connect(mapStateToProps, { setProducts })(ProductsContainer)
