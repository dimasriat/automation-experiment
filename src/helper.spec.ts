import { describe, it, expect } from "@jest/globals";
import { printSomething } from "./helper";

describe("printSomething", () => {
  it("prints text", () => {
    // arange
    const text = "dimas riatmodjo";
    const sut = printSomething;

    // act
    const actual = sut(text);

    // assert
    expect(
      actual
        .split(" ")
        .filter((_, i) => i > 2)
        .join(" ")
    ).toBe(text);
  });
});
