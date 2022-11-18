import { UserStore } from "../users";

const store = new UserStore();

describe("Users Model Tests", () => {
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
