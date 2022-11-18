import Client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const peper = process.env.BCRYPT_PASSWORD,
  saltRound = process.env.SALT_ROUNDS;

export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`connot get Data: ${err}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE id= $1";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Cannot show user data: ${err}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const hash = bcrypt.hashSync(
        u.password + peper,
        parseInt(saltRound as string)
      );
      const sql =
        "INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [u.firstName, u.lastName, hash]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Cannot create user: ${err}`);
    }
  }
}
