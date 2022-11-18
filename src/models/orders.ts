export type Order = {
  id: string;
  user_id: string;
  status: string;
  products_ids: string[];
  products_amount: number;
};
