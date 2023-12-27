import { getLabelText } from "./helpers";
import { labels as starLabels } from "./contants";

describe("getLabelText", () => {
  it("should return the correct label for a given rating value", () => {
    const mockParams = {
      value: 3,
      labels: starLabels
    };

    const result = getLabelText(mockParams);

    expect(result).toEqual("3 Stars, " + starLabels[3]);
  });

  it("should handle singular star correctly", () => {
    const mockParams = {
      value: 1,
      labels: starLabels
    };

    const result = getLabelText(mockParams);

    expect(result).toEqual("1 Star, " + starLabels[1]);
  });
});
