import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

import Home from "./";
import { productsQuery } from "../../services/graphql/product";

const mockProductId = "1";
const mockProduct = {
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
};

describe("ProductDetailsPage", () => {
  const RootComponent = ({ mockType }: { mockType: MockedResponse[] }) => (
    <MockedProvider mocks={mockType} addTypename={false}>
      <MemoryRouter initialEntries={[`/details/${mockProductId}`]}>
        <Routes>
          <Route path="/details/:id" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );

  const mocks: MockedResponse[] = [
    {
      request: {
        query: productsQuery.GET_ALL_PRODUCTS
      },
      result: {
        data: {
          products: [mockProduct]
        }
      }
    }
  ];

  it("renders loading spinner while fetching data", async () => {
    render(<RootComponent mockType={[{ ...mocks[0], delay: 30 }]} />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it('renders error message and "Go back" button on error', async () => {
    const errorMessage = "Mock error message";
    const errorMocks = [
      {
        request: {
          query: productsQuery.GET_ALL_PRODUCTS
        },
        error: new Error(errorMessage)
      }
    ];

    render(<RootComponent mockType={errorMocks} />);

    expect(
      await screen.findByText(`Error: ${errorMessage}`)
    ).toBeInTheDocument();
  });

  it("renders product details when data is loaded", async () => {
    const { asFragment } = render(<RootComponent mockType={mocks} />);

    expect(
      await screen.findByText("FREE DELIVERY ON ALL ORDERS OVER €35")
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
