import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DEV_DB,
  POSTGRES_TEST_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
} = process.env;

const Client = new Pool({
  host: POSTGRES_HOST,
  database: ENV === "test" ? POSTGRES_TEST_DB : POSTGRES_DEV_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export default Client;
