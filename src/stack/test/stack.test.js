const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("banana");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });
  });
});
