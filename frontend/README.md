# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# create react app 

## - > to install react ----> npx create-react-app .

# project setup
 ## public folder --> index.html
 * <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" >

 * <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" >


## app.css

/* mini ecommerce custom css */

html,
body {
  font-family: 'Amazon Ember';
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

/* Scroll Bar */

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(66, 66, 66, 0.2);
  border: 0px;
  background-clip: padding-box;
  border-radius: 5px;
}

nav {
  background-color: #232f3e;
  padding: 1rem 1rem;
}

#search_btn {
  background-color: #febd69;
}

.input-group {
  width: 90%;
  margin-right: 35%;
}

#search_field {
  height: 2.4rem;
  padding: 1rem;
}

#login_btn,
#view_btn {
  background-color: #febd69;
  padding: 0.4rem 1.8rem;
  font-family: calibri;
}

#cart {
  font-size: 1rem;
  color: white;
}

#cart_count {
  background-color: #febd69;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: black;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Home page */
#products_heading {
  margin-top: 1.8rem;
}

.card {
  height: 100%;
}

.card-title a {
  color: #2e2e2e;
}

.card-title a:hover {
  color: #fa9c23;
  text-decoration: none;
}

.card-body {
  padding-left: 0;
}

.card-text {
  font-size: 1.4rem;
}

#view_btn {
  background-color: #fa9c23;
  color: white;
}

.card-img-top {
  width: 200px;
  height: 150px;
}

.ratings {
  font-size: 1.2rem;
  color: #fdcc0d;
}

#no_of_reviews {
  font-size: 0.85rem;
  color: grey;
  margin-left: 0.5rem;
}

/* Footer */
footer {
  margin-top: 8rem;
  color: grey;
  bottom: 0;
  width: 100%;
}

/* Ratings */

.rating-outer {
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
  color: #fdcc0d;
}

.rating-outer::before {
  content: '\f006 \f006 \f006 \f006 \f006';
}

.rating-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.rating-inner::before {
  content: '\f005 \f005 \f005 \f005 \f005';
  color: #f8ce0b;
}

/* Product Details Page */
#product_id {
  color: grey;
  font-size: 0.8rem;
}

#product_price {
  font-size: 2rem;
  font-weight: bold;
}

#cart_btn,
#review_btn {
  border-radius: 2rem;
  background-color: #fa9c23;
  border: none;
  padding: 0.5rem 2rem;
}

#product_seller {
  color: grey;
  font-size: 0.9rem;
}

#stock_status {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 0.3rem;
}

.redColor {
  color: red;
}

.greenColor {
  color: green;
}

#product_image {
  margin-top: 9rem;
}

/* Loader */
.loader {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  width: 80px;
  height: 80px;
  padding-left: 0;
}
.loader:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fa9c23;
  border-color: #fa9c23 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Cart */

.cart-item {
  margin: 1.8rem 0rem;
  padding: 0rem 0.7rem;
}

.cart-item a {
  color: grey;
}

#delete_cart_item {
  color: red;
  background: white;
  padding: 0.3rem 0.5rem;
  font-size: 1.1rem;
  border: none;
}

#card_item_price {
  color: #febd69;
  font-weight: bold;
  font-size: 1.4rem;
}

#checkout_btn,
.review-btn {
  background-color: #fa9c23;
  border-color: #fa9c23;
  margin-top: 2rem;
  border-radius: 5rem;
}

#view_order_details {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

#order_summary {
  border: 1px solid #e3e3e3;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
}

.order-summary-values {
  float: right;
  font-weight: bold;
}

.stockCounter input {
  border: none;
  width: 3rem;
  text-align: center;
}

.plus,
.minus {
  padding: 0.1rem 0.5rem;
}

.stockCounter input::-webkit-outer-spin-button,
.stockCounter input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: white;
}

/* Login & Register */

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  font-weight: 700;
}

.wrapper form {
  padding: 2.5rem 3rem;
}

.wrapper form .btn {
  background-color: #fa9c23;
  border-color: #fa9c23;
  color: white;
  margin-top: 2.5rem;
}

.wrapper form a {
  font-size: 0.9rem;
  color: grey;
}

/* Avatar */
.avatar {
  display: inline-block;
  margin-bottom: 0;
  height: 3rem;
  width: 3rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50% !important;
}

.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: none;
}

/* Header User Profile */

.avatar-nav {
  margin-right: 0.6rem;
  height: 2.2rem;
  width: 2.2rem;
}

/* Checkout Steps */

.checkout-progress div {
  box-sizing: border-box;
}

.checkout-progress {
  display: block;
  clear: both;
  margin: 20px auto;
  width: auto;
  font-family: sans-serif;
  overflow: auto;
}

.step {
  margin: 0;
  border: 0;
  letter-spacing: 1px;
  line-height: 30px;
  padding: 5px 10px 5px 15px;
  color: grey;
  text-decoration: none;
  cursor: default;
  font-weight: bold;
  float: left;
  height: auto;
}

.incomplete {
  background: #eeeeee;
}

.active-step {
  background: #fa9c23;
  color: #fff;
}

.triangle-active {
  float: left;
  width: 0;
  border-top: 20px solid transparent;
  border-left: 15px solid #fa9c23;
  border-bottom: 20px solid transparent;
  margin-left: -1px;
}

.triangle2-active {
  width: 0;
  float: left;
  border-top: 20px solid #fa9c23;
  border-left: 15px solid #fff;
  border-bottom: 20px solid #fa9c23;
  margin-right: -1px;
}

.triangle-incomplete {
  float: left;
  width: 0;
  border-top: 20px solid transparent;
  border-left: 15px solid #eeeeee;
  border-bottom: 20px solid transparent;
  margin-left: -1px;
}

.triangle2-incomplete {
  width: 0;
  float: left;
  border-top: 20px solid #eeeeee;
  border-left: 15px solid #fff;
  border-bottom: 20px solid #eeeeee;
  margin-right: -1px;
}

/* User Profile */

.avatar-profile {
  height: 16rem;
  width: 16rem;
}

.user-info h4 {
  font-weight: 800;
  color: grey;
  margin-top: 2rem;
}

.user-info p {
  font-size: 1.1rem;
}

#edit_profile {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

/* Confirm Order */

.order-confirm p,
.order-details p {
  margin-left: 1.5rem;
}

.update-btn {
  background-color: #fa9c23;
  border-color: #fa9c23;
  color: white;
}

.update-btn:hover {
  color: white;
}

/* Pagination */
.page-item.active .page-link {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

.page-link {
  color: #fa9c23;
}

.page-link:hover {
  color: #fa9c23;
}

/* Admin Sidebar */

.sidebar-wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
  min-height: 100vh;
  font-weight: normal;

  margin-top: 0;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
}
#sidebar {
  min-width: 100%;
  max-width: 100%;
  background: #232f3e;
  color: #fff;
  transition: all 0.3s;
}
#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #232f3e;
}
#sidebar ul.components {
  padding: 5px 0px;
  border-bottom: 1px solid #232f3e;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
  color: white;
  text-decoration: none;
}
#sidebar ul li a:hover {
  color: #232f3e;
  background: #fff;
}

#sidebar ul li a i {
  margin-right: 0.3rem;
}

#sidebar ul li.active > a,
a[aria-expanded='true'] {
  color: #fff;
  background: #232f3e;
}
a[data-toggle='collapse'] {
  position: relative;
}
.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 1rem !important;
  padding-left: 30px !important;
  background: #232f3e;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

/* Products List Admin */
#products_table .btn {
  padding: 0.2rem 0.5rem;
  margin-left: 0.4rem;
}

/* Dashboard */

.card-font-size {
  font-size: 1.5rem;
}

/* Reviews */

.rating {
  margin-top: 10rem;
}

.stars {
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 0;
}

.star {
  display: inline;
  list-style: none;
  font-size: 3rem;
  padding-left: 0.9rem;
  color: #e3e3e3;
}

.star:first-child {
  padding-left: 0;
}

.orange {
  color: #fa9c23;
}

.yellow {
  color: #fdcc0d;
}

.review_user {
  font-size: 0.8rem;
  color: grey;
}


## app.js

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;

# creating home page 

import React from 'react'

export default function Home() {
  return  <>
   <nav class="navbar row">
      <div class="col-12 col-md-3">
        <div class="navbar-brand">
          <img width="150px" src="/images/logo.png" />
        </div>
      </div>

      <div class="col-12 col-md-6 mt-2 mt-md-0">
        <div class="input-group">
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder="Enter Product Name ..."
          />
          <div class="input-group-append">
            <button id="search_btn" class="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="cart" class="ml-3">Cart</span>
        <span class="ml-1" id="cart_count">2</span>
      </div>
    </nav>

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" class="container mt-5">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
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

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/2.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href=""
                  >WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant</a>
              </h5>
              <div class="ratings mt-auto">
               <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$150.32</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/3.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href=""
                  >Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</a>
              </h5>
              <div class="ratings mt-auto">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$440.57</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/4.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">PTron Newly Launched Tangent Sports, 60Hrs Playtime</a>
              </h5>
              <div class="ratings mt-auto">
               <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$15.46</p>

              <a type="button" href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/5.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">Campus Men's Maxico Running Shoes</a>
              </h5>
              <div class="ratings mt-auto">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$10.12</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-1 bg-dark">
      <p class="text-center text-white mt-1 ">
        JVLcart - 2024-2025, All Rights Reserved
      </p>
    </footer>
  </>
}


# creating header & footer components
  
 ## footer.js

    <footer class="py-1 bg-dark">
      <p class="text-center text-white mt-1 ">
        JVLcart - 2024-2025, All Rights Reserved
      </p>
    </footer>


 ## header.js

<nav class="navbar row">
  <div class="col-12 col-md-3">
    <div class="navbar-brand">
      <img width="150px" src="/images/logo.png" />
    </div>
  </div>

  <div class="col-12 col-md-6 mt-2 mt-md-0">
    <div class="input-group">
      <input
        type="text"
        id="search_field"
        class="form-control"
        placeholder="Enter Product Name ..."
      />
      <div class="input-group-append">
        <button id="search_btn" class="btn">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
    <span id="cart" class="ml-3">Cart</span>
    <span class="ml-1" id="cart_count">2</span>
  </div>
</nav>


# Breaking page to components

## home.js 
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

## components --> ProductCard.js
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

