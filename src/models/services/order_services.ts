import Client from "../../database";
import { Order } from "../orders";

export default class OrderServices {
  async user_order(user_id: string): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE user_id=($1)";
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot read orders: ${err}`);
    }
  }

  async user_completed_order(user_id: string): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE user_id=($1) AND status=($2)";
      const result = await conn.query(sql, [user_id, "complete"]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot read orders: ${err}`);
    }
  }
}
