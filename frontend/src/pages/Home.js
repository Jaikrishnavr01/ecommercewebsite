import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return  <>
    <h1 id="products_heading">Latest Products</h1>

    <section id="products" class="container mt-5">
      
      <div class="row">
        <ProductCard/>
      </div>

    </section>
  </>
}
