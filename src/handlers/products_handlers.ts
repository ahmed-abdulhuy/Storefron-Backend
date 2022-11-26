import { Product, ProductStore } from "../models/products";
import ProductServices from "../models/services/product_services";
import express, { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const store = new ProductStore();
const storeServices = new ProductServices();

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await store.index();
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const product = await store.show(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
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
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await store.create(product);
    res.json(newProduct)
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const popularProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await storeServices.popularProducts();
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const categoryProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = req.params.category;
    const product = await storeServices.categoryProducts(category);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const product_routes = (app: express.Application) => {
  app.get("/products/category/:category", categoryProducts);
  app.get("/products/popular", popularProducts);
  app.get("/products/:id", show);
  app.post("/products", create);
  app.get("/products", index);
};

export default product_routes;
