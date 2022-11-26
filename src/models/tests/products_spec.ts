import { ProductStore } from "../products";
import supertest from "supertest";
import app from "../../server";

const store = new ProductStore();
const request = supertest(app)

describe("Products Model Tests", () => {
  it("should have index method", () => {
    expect(store.index).toBeDefined();
  });
  it("should have show method", () => {
    expect(store.show).toBeDefined();
  });
  it("should have create method", () => {
    expect(store.create).toBeDefined();
  });
});

describe('products Handlers Response', () => {
  it("Post request to create product should return the product object", async () => {
    const query = {
      name: "MAC Air",
      price: 1000,
      category: "Laptop"
    }
    const response = await request.post("/products")
                            .set('Content-type', 'application/json')
                            // .set("authorization", 
                            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")
                            .send({query})
    
    expect(response.status).toBe(401);
    // add laptop hear
    expect(response.body).toEqual("Access denied, invaled token")
  })

  it(" Get request to show all products", async () => {
    // add token her
    const response = await request.get("/products")
                            .set("authorization", 
                              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })

  it(" Get request to show product by ID", async () => {
    // add token her
    const response = await request.get("/products/1")
                            .set("authorization", 
                              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })

  it(" Get resquest to show 5 moste popular products ", async () => {
    const response = await request.get("/products/popular")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    })

    it(" Get request to show products by category", async () => {
    const response = await request.get("/products/category/Laptop")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })
  
})