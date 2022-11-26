import { UserStore } from "../users";
import app from "../../server";
import supertest from "supertest"

const store = new UserStore();
const request = supertest(app);


describe("Users Model Test Methods Existance", () => {
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

describe('User Handlers Response', () => {
  it("Post request to create user should return JWT as string", async () => {
    const query = {
      firstName: "Naruto",
      lastName: "Uzumaki",
      password: "rasingan"
    }
    const response = await request.post("/users")
                            .set('Content-type', 'application/json')
                            .send({query})
    
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })

  it(" Get request to show all users", async () => {
    const response = await request.get("/users")
                      .set("authorization", 
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })

  it(" Get request to show user by ID", async () => {
    const response = await request.get("/users/1")
                      .set("authorization", 
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRFWnpBcndzRWNhQW8xSHNab0tpTmMuSUg4RGdiNkxwTVd2QUZUSmJ3ajZPbmVtdVBDdmEzNiJ9LCJpYXQiOjE2Njk0MzQ5NjV9.RSv5vn3C6d6W0FI6dc3KH-rMG5tLyOM_pTfegTJjWWw")

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  })
})