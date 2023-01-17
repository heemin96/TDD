const ProductService = require("../product_service.js");
const StubProductClient = require("./stub_product_client.js");

describe("ProductSerivce - Stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});

// it("should filter out only available items", async () => {
//   //Arrange, Given
//   const productService = new ProductService(new StubProductClient());

//   //Act, When
//   const items = await productService.fetchAvailableItems();

//   //Assert, Then
//   expect(items.length).toBe(1);
//   expect(items).toEqual([{ item: "🥛", available: true }]);
// });
// });
