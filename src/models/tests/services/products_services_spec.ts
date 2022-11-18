import ProductServices from "../../services/product_services";

const storeServices = new ProductServices();

describe("Products Services Model Tests", () => {
  it("should have popularProducts method", () => {
    expect(storeServices.popularProducts).toBeDefined();
  });

  it("should have categoryProducts method", () => {
    expect(storeServices.categoryProducts).toBeDefined();
  });
});
