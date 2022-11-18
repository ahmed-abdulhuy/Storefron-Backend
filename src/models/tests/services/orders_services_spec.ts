import OrderServices from "../../services/order_services";

const storeServices = new OrderServices()

describe("Orders Services Model Tests", () => {
  it("should have user_completed_order method", () => {
    expect(storeServices.user_completed_order).toBeDefined();
  });
  it("should have user_order method", () => {
    expect(storeServices.user_order).toBeDefined();
  });
});
