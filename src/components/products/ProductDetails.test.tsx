import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";

// Mock product
const mockProduct = {
  shortDescription: "mock short des",
  rating: 4,
  options: '[{"text":"option1","value":"option1"}]',
  sizes: '[{"text":"XL","value":"xl"}]',
  id: "1",
  name: "Sample Product",
  imgUrl: "sample-url",
  longDescription: "This is a sample product description.",
  brand: "Sample Brand",
  price: "$19.99"
};

// Mock the useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate
}));

describe("ProductDetails Component", () => {
  test("renders the component with product details", () => {
    render(
      <BrowserRouter>
        <ProductDetails product={mockProduct} />
      </BrowserRouter>
    );

    // Assert that the product details are rendered correctly
    expect(screen.getByTestId("product-details")).toBeInTheDocument();
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(
      screen.getByText("This is a sample product description.")
    ).toBeInTheDocument();
    expect(screen.getByText("Sample Brand")).toBeInTheDocument();
    expect(screen.getByText("Rated:")).toBeInTheDocument();
    expect(screen.getByText("option1")).toBeInTheDocument();
    expect(screen.getByText("XL")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByText("Stock Available")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });

  test("calls navigate(-1) when 'Back' button is clicked", () => {
    render(
      <BrowserRouter>
        <ProductDetails product={mockProduct} />
      </BrowserRouter>
    );

    // Click on the 'Back' button
    fireEvent.click(screen.getByText("Back"));

    // Assert that navigate is called with -1
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
