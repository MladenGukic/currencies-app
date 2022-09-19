import { uniqueChecker } from ".";

describe("opis grupe testove", () => {
  it("return true if element is unique", () => {
    expect(
      uniqueChecker(
        [
          { id: "123", currencyCode: "123", currencySymbol: "123" },
          { id: "124", currencyCode: "124", currencySymbol: "124" },
          { id: "125", currencyCode: "125", currencySymbol: "125" },
        ],
        "124",
      ),
    ).toEqual(false);
  });

  it("return false if element is not unique", () => {
    expect(
      uniqueChecker(
        [
          { id: "123", currencyCode: "123", currencySymbol: "123" },
          { id: "124", currencyCode: "124", currencySymbol: "124" },
          { id: "124", currencyCode: "124", currencySymbol: "124" },
          { id: "125", currencyCode: "125", currencySymbol: "125" },
        ],
        "2",
      ),
    ).toEqual(false);
  });
});
