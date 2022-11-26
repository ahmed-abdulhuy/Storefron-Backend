import OrderServices from "../../services/order_services";
import supertest from "supertest";
import app from "../../../server";

const storeServices = new OrderServices();
const request = supertest(app);

describe("Orders Services Model Tests", () => {
  it("should have user_completed_order method", () => {
    expect(storeServices.user_completed_order).toBeDefined();
  });
  it("should have user_order method", () => {
    expect(storeServices.user_order).toBeDefined();
  });
});

describe('Orders Handlers Response', () => {
  
  it(" Get request to show orders by user id ", async () => {
    // add token her
    const response = await request.get("/order/1")
                            .set("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })

  it(" Get request to show completed orders by user id", async () => {
    // add token her
    const response = await request.get("/order/1/complete")
                            .set("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })
})