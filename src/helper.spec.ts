import { describe, it, expect } from "@jest/globals";
import { printSomething } from "./helper";
import config from "./config";

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

describe("config", () => {
  it("have secret messages", () => {
    // arange
    const msg = config.SECRET_MESSAGE;

    // act
    expect(msg).toBeTruthy();
  });
});
