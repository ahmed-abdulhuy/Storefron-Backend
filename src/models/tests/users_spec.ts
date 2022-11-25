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
    // expect(response.body)
  })
})