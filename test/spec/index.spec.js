//
// unit test for running with mocha
//

const { example } = require("../../lib/");
const { expect } = require("chai");

describe("Example test", function () {
  it("should test file", () => {
    expect(example("test")).equal("hello test from example package");
    expect(example(null)).equal("hello null from example package");
    expect(example()).equal("hello undefined from example package");
    expect(example(5)).equal("hello 5 from example package");
    expect(example(false)).equal("hello false from example package");
  });
});
