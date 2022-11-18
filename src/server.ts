import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import order_routes from "./handlers/orders_handlers";
import product_routes from "./handlers/products_handlers";
import users_routes from "./handlers/users_handler";

const HOST = "localhost",
  PORT = 3000,
  app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

users_routes(app);
product_routes(app);
order_routes(app);

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});

export default app;
