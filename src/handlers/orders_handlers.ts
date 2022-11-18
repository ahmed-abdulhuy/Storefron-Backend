import OrderServices from "../models/services/order_services";
import express, { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const storeServices = new OrderServices();

const user_order = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization as string;
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401);
    res.json("Access denied, invaled token");
    return;
  }

  try {
    const user_id = req.params.user_id;
    const product = await storeServices.user_order(user_id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const user_completed_order = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("order");
    const authHeader = req.headers.authorization as string;
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401);
    res.json("Acess denied, invaled token");
    return;
  }

  try {
    const user_id = req.params.user_id;
    const product = await storeServices.user_completed_order(user_id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const order_routes = (app: express.Application) => {
  app.get("/order/:user_id", user_order);
  app.get("/order/:user_id/complete", user_completed_order);
};

export default order_routes;
