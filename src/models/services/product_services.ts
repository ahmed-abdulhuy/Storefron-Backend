import Client from "../../database";
import { Product } from "../products";

export default class ProductServices {
  async popularProducts(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products ORDER BY price DESC LIMIT 5";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot read products: ${err}`);
    }
  }

  async categoryProducts(category: string): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = "select * from products where category=$1";
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot read products: ${err}`);
    }
  }
}
