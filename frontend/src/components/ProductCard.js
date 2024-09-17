import React from 'react'

export default function ProductCard() {
  return <div class="col-sm-12 col-md-6 col-lg-3 my-3">
  <div class="card p-3 rounded">
    <img
      class="card-img-top mx-auto"
      src="./images/products/1.jpg"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">
        <a href="">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a>
      </h5>
      <div class="ratings mt-auto">
        <div class="rating-outer">
          <div class="rating-inner"></div>
        </div>
      </div>
      <p class="card-text">$245.67</p>
      <a href="#" id="view_btn" class="btn btn-block">View Details</a>
    </div>
  </div>
</div>
}
