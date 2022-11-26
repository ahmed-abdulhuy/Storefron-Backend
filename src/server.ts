import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import order_routes from "./handlers/orders_handlers";
import product_routes from "./handlers/products_handlers";
import users_routes from "./handlers/users_handler";

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

users_routes(app);
product_routes(app);
order_routes(app);

app.get("/", (req, res) => {
  res.send("Hello World!")
})

export default app;
