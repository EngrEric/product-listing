import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductList from "./ProductList";

// Mock the ProductCard component
jest.mock(
  "./ProductCard",
  () =>
    ({
      imgUrl,
      price,
      name,
      shortDescription,
      onAddToCart
    }: {
      imgUrl: string;
      name: string;
      price: string;
      shortDescription: string;
      onAddToCart: () => void;
    }) =>
      (
        <div>
          <img src={imgUrl} alt={name} />
          <div>{name}</div>
          <div>{shortDescription}</div>
          <div>{price}</div>
          <button onClick={onAddToCart}>Buy now</button>
        </div>
      )
);

// Mock the useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate
}));

// Mock product
const mockProduct = [
  {
    imgUrl: "mock url",
    name: "Mock product",
    price: "mock price",
    longDescription: "mock long des",
    shortDescription: "mock short des",
    rating: 4,
    brand: "mock brnad",
    options: '[{"text":"option1","value":"option1"}]',
    sizes: '[{"text":"XL","value":"xl"}]',
    id: "1"
  }
];

describe("ProductList Component", () => {
  test("renders the component with product cards", () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProduct} />
      </BrowserRouter>
    );

    const productListElement = screen.getByTestId("product-list");
    expect(productListElement).toBeInTheDocument();

    mockProduct.forEach(async (product) => {
      const productCardElement = await screen.findByText(product.name);
      expect(productCardElement).toBeInTheDocument();
    });
  });

  test("calls onAddToCart when a product is clicked", () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProduct} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Buy now"));

    expect(mockNavigate).toHaveBeenCalledWith("/details/1");
  });
});
