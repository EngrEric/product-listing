import { render, screen, fireEvent } from "@testing-library/react";
import RatingComp from "./Rating";
import { getLabelText } from "../../utils /helpers";

const sampleLabels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

describe("RatingComp Component", () => {
  test("renders the component with default ratings and labels", () => {
    render(<RatingComp getLabelText={getLabelText} labels={sampleLabels} />);

    // Assert that the component is rendered
    expect(screen.getByTestId("rating-component")).toBeInTheDocument();

    // Assert that the default ratings are displayed
    expect(screen.getByText("Poor+")).toBeInTheDocument();
  });

  test("renders the component with specific ratings and labels", () => {
    render(
      <RatingComp
        getLabelText={getLabelText}
        ratings={5}
        labels={sampleLabels}
      />
    );

    // Assert that the component is rendered
    expect(screen.getByTestId("rating-component")).toBeInTheDocument();

    // Assert that the specific ratings are displayed
    expect(screen.getByText("Excellent+")).toBeInTheDocument();
  });

  test("updates the rating on user interaction", () => {
    render(<RatingComp getLabelText={getLabelText} labels={sampleLabels} />);

    // Click on the third star
    fireEvent.click(screen.getAllByRole("radio")[3]);

    // Assert that the updated rating is displayed
    expect(screen.getByText("Poor+")).toBeInTheDocument();
  });

  test("displays the hover label on mouseover", () => {
    render(<RatingComp labels={sampleLabels} />);

    // Hover over the fourth star
    fireEvent.mouseOver(screen.getAllByRole("radio")[3]);

    // Assert that the hover label is displayed
    expect(screen.getByText("Good")).toBeInTheDocument();
  });
});
