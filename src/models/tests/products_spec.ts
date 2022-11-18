import { ProductStore } from "../products";

const store = new ProductStore();

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