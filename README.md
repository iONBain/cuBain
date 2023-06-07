## cUBain - da'Cube WebApp
<div align="center">
<img src="https://github.com/iONBain/cuBain/blob/master/public/productListing.png" />
 
# [Visit cUBain](https://cubain.netlify.app)

</div>

## Install and run locally
```
$ git clone https://github.com/ionbain/cubain.git
$ cd cUBain
$ npm i
$ npm start
```


## **Pages and Features**

- Home Page
    - It lists down the top recommended cubes to buy as a carousel component
    - Also has a component to select from various categories of cube skill levels
    ---

- Product Listing Page 
    - Showcases all the cubes which matches the filter selection
    - Multi filters functionality
    ---

- Filters by
    - Skill Level 
    - Price
    - Rating 
    - Discount
    - Cube Type
    - Sort by [Price,Rating,Popularity,Discount]
    ---
- Single Product Page
    - This page enlists the details of a single cube
    - We can either add the cube to cart or to favourites
    ---
- Search
    - Feature which enables the user to  search by cube name
    - If user is in any page other than main product gallery, then user is redirected to the Listing page where he/she can view the desired cubes, which were searched
    ---
- Favourites Management
    - This page has all the cubes which are marked as favourites either from the product listing page or the cart page
    ---
- Cart Management
    - Here, the logged in user can view all cubes present in cart
    - Also, the user can go through the order details, total buying cost and even apply coupons before checkout
    ---
- Loading & Alerts (Toasts)
    - Leveraged toastify library for all kinds of alerts. Some of them are:
        - cube added to cart/favourites
        - cube removed from cart/favourites 
        - Please login to continue
        - Logged in successfully
        - Coupon applied successfully
        - Delivery address updated
    - Loading spinner build from basic CSS and animations. Applicable on:
        - Home page
        - Product listing
        - Order placement
    ---
- Authentication and Private pages:
  - Sign-up
  - Login
  - Logout
  ---

- Address Management
    - User can add a new address
    - User can update an existing address
    - User may also delete any saved address 
    ---
- Checkout 
    - Shows the final order details before placing an order
    - User can select a delivery address
    ---

- Order Summary
    - A confirmation page which notifies user that his/her order was placed successfully
    - After few seconds, user is redirected to the order history page
    --- 
- Order History
    - Enlists all the orders placed by the user 
    ---

## **Tech/ Lib(s) Built with-**
- React JS
- React Context API 
- React Reducer
- React Router v6
- React Toastify
- React Responsive Carousel
- Vanilla CSS
- MockBee (uses MirageJS) for Backend

## **WebApp in Action-**
[Click Here](https://www.loom.com/share/3a25658b1de64cbc8144c27c61fe1e3c)

