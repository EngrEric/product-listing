import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";

const mockProduct = {
  id: "1",
  imgUrl: "sample-url",
  productName: "Sample Product",
  price: "$20.99",
  shortDescription: "This is a sample product",
  rating: 4.5
};

describe("ProductCard Component", () => {
  test("renders the component with product details", () => {
    render(<ProductCard {...mockProduct} onAddToCart={() => {}} />);

    // Assert that the product card is rendered with the correct details
    const productCardElement = screen.getByTestId("product-card");
    expect(productCardElement).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.productName)).toBeInTheDocument();
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("$20.99")).toBeInTheDocument();
    expect(screen.getByText("This is a sample product...")).toBeInTheDocument();
  });

  test("calls onAddToCart when the card is clicked or 'Buy now' button is clicked", () => {
    const mockOnAddToCart = jest.fn();
    render(<ProductCard {...mockProduct} onAddToCart={mockOnAddToCart} />);

    // Click on the card
    fireEvent.click(screen.getByAltText(mockProduct.productName));
    // Assert that onAddToCart is called with the correct argument
    expect(mockOnAddToCart).toHaveBeenCalledWith("1");

    // Click on the 'Buy now' button
    fireEvent.click(screen.getByText("Buy now"));
    // Assert that onAddToCart is called again with the correct argument
    expect(mockOnAddToCart).toHaveBeenCalledWith("1");
  });
});
