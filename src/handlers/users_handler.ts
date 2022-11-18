import { User, UserStore } from "../models/users";
import express, { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const store = new UserStore();

const index = async (req: Request, res: Response): Promise<void> => {
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
    const users = await store.index();
    res.json(users);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
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
    const id = req.params.id;
    const user = await store.show(id);
    res.json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
  // try {
  //   const authHeader = req.headers.authorization as string
  //   const token = authHeader.split(' ')[1];
  //   Jwt.verify(token, process.env.TOKEN_SECRET as string);
  // } catch(err) {
  //   res.status(401)
  //   res.json("Access denied, invaled token")
  //   return
  // }
  try {
    const user: User = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    };
    const newUser = await store.create(user);
    const token = Jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as string
    );
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const users_routes = (app: express.Application) => {
  app.get("/users", index);
  app.get("/users/:id", show);
  app.post("/users", create);
};

export default users_routes;
