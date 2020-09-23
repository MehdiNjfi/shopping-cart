import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setProducts } from '../../redux/actions/actions'
import { getVisibleProducts } from '../../redux/reducers/products'
import ProductList from '../../components/Products/ProductList/ProductList'

const ProductsContainer = ({ products, setProducts }) => {
  useEffect(() => {
    fetch(
      'https://jsonblob.com/api/jsonblob/ab70f01d-fc06-11ea-a8f0-e15d461afba2'
    )
      .then((res) => res.json())
      // Set products in redux store
      .then((data) => setProducts(data))
      .catch((err) =>
        alert('متاسفانه مشکلی پیش آمده است لطفا صفحه را رفرش کنید.')
      )
  }, [setProducts])

  return (
    <section className="productsContainer">
      <ProductList products={products} />
    </section>
  )
}

const mapStateToProps = (state) => {
  return { products: getVisibleProducts(state.products) }
}

export default connect(mapStateToProps, { setProducts })(ProductsContainer)
