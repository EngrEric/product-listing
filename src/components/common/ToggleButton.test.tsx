import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomToggleButton from "./ToggleButton";

const sampleOptions = [
  { value: "option1", text: "Option 1" },
  { value: "option2", text: "Option 2" },
  { value: "option3", text: "Option 3" }
];

describe("CustomToggleButton Component", () => {
  test("renders the component with options", () => {
    render(<CustomToggleButton options={sampleOptions} onClick={() => {}} />);

    // Assert that the component is rendered
    expect(screen.getByRole("group")).toBeInTheDocument();

    // Assert that each option is rendered
    sampleOptions.forEach((option) => {
      const optionElement = screen.getByText(option.text);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test("calls onClick when an option is selected", () => {
    const mockOnClick = jest.fn();
    render(
      <CustomToggleButton options={sampleOptions} onClick={mockOnClick} />
    );

    // Click on the second option
    fireEvent.click(screen.getByText("Option 2"));

    // Assert that onClick is called with the correct argument
    expect(mockOnClick).toHaveBeenCalledWith("option2");
  });

  test("handles disabled state correctly", () => {
    const mockOnClick = jest.fn();
    render(
      <CustomToggleButton
        options={sampleOptions}
        onClick={mockOnClick}
        disabled
      />
    );

    // Attempt to click on an option
    fireEvent.click(screen.getByText("Option 1"));

    // Assert that onClick is not called when the component is disabled
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
