# Database Port: `5432`
# Server Port: `3000`

# Environment Variables

``` sh
POSTGRES_HOST = '127.0.0.1'
POSTGRES_DEV_DB = 'store'
POSTGRES_TEST_DB = 'store_test'
POSTGRES_USER = 'naruto'
POSTGRES_PASSWORD = 'password123'
BCRYPT_PASSWORD = "mangekyou_sharingan"
SALT_ROUNDS = "10"
TOKEN_SECRET = "uchiha_madara"
ENV = 'dev'
```

# Database setup
1. **Sratr Postgress container**
    ``` sh
        $ docker-compose up
    ```
2. **Connect to database container**
    ``` sh
        $ psql -h 127.0.0.1 -U naruto postgres
        password: password123
    ```

# API Requirements

## API Endpoints
### Products
- Index: 
    - **GET** `http:localhost:3000/products` 
- Show: 
    - **GET** `http:localhost:3000/products/:id`
- Create [token required]:
    - **POST** `http:localhost:3000/products`
- Top 5 most popular products:
    - **GET** `http:localhost:3000/products/popular` 
- Products by category (args: product category):
    - **GET** `http:localhost:3000/products/category/:category`

### Users
- Index [token required]:
    - **GET** `http:localhost:3000/users`
- Show [token required]:
    - **GET** `http:localhost:3000/users/:id`
- Create N[token required]:
    - **POST** `http:localhost:3000/users`

### Orders
- Current Order by user (args: user id)[token required]:
    - **GET** `http:localhost:3000/order/:user_id`
- [OPTIONAL] Completed Orders by user (args: user id)[token required]:
    - **GET** `http:localhost:3000/order/:user_id/complete`


## Data schema
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