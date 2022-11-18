Storefront Backend

This project is built with technologies:
  * Express
  * Jasmine
  * JWT
  * BCrypt
  * postgress
  * Typescript
### Database container runs on the default port: 5432
### Backend runs on http:localhost:3000

# Install packages
```
$ npm install
```

# Steps to run the backend database server
## 1. Sratr Postgress container
  ```
$ docker-compose up
  ```
## 2. Connect to database container
  ```
$ psql -h 127.0.0.1 -U naruto postgres
  password: password123
  ```
## 3. Create dev and test databases
` In the same previous terminal`
```
$ create database store
$ create database store_test
```

# Available Scripts

From the project directory, you can run
```
$ npm run watch
```
Runs the development server.
```
$ npm run start_production
```
Runs production server
```
$ npm run build
```
Starts building project
```
$ npm run jasmine
```
Runs tests with Jasmine
```
$ npm run test
```
Builds and runs tests with Jasmine test library
```
$ npm run lint
```
Use Eslint on code

```
$ npm run prettier
```
Format the code
