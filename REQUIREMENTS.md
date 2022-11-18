# API Requirements


## API Endpoints
### Products
- Index: 
    - `http:localhost:3000/products` 
- Show: 
    - `http:localhost:3000/products/:id`
- Create [token required]:
    - `http:localhost:3000/products`
- Top 5 most popular products:
    - `http:localhost:3000/products/popular` 
- Products by category (args: product category):
    - `http:localhost:3000/products/category/:category`

### Users
- Index [token required]:
    - `http:localhost:3000/users`
- Show [token required]:
    - `http:localhost:3000/users/:id`
- Create N[token required]:
    - `http:localhost:3000/users`

### Orders
- Current Order by user (args: user id)[token required]:
    - `http:localhost:3000/order/:user_id`
- [OPTIONAL] Completed Orders by user (args: user id)[token required]:
    - `http:localhost:3000/order/:user_id/complete`


## Data Shapes
### Product

|id|-|name varchar|-|price integer|-|category varchar|
|--|-|--------------|-|-------------|-|------------------|

### User

|id|-|firstName varchar|-|lastName varchar|-|password varchar|
|--|-|-------------------|-|------------------|-|------------------|

### Orders

|id|-|user_id bigint|-|status varchar|
|--|-|--------------|-|----------------|

### order_products

|id|-|order_id bigint|-|product_id bigint|-|quantity integer|
|--|-|---------------|-|-----------------|-|----------------|