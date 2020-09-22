import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import CartContainer from '../CartContainer/CartContainer'

const Shopping = () => {
  return (
    <Layout>
      <main>
        <ProductsContainer />
        <CartContainer />
      </main>
    </Layout>
  )
}

export default Shopping
