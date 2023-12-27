import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";
import { router } from "./routes";
import { productsQuery } from "./services/graphql/product";

describe("index.tsx", () => {
  const mocks = [
    {
      request: {
        query: productsQuery.GET_ALL_PRODUCTS
      },
      result: {
        data: {
          products: [
            {
              imgUrl: "String",
              name: "String",
              price: "String",
              longDescription: "String",
              shortDescription: "substring",
              rating: 4,
              brand: "String",
              options: "String",
              sizes: "String",
              id: "String"
            }
          ]
        }
      }
    }
  ];
  it("renders without crashing", async () => {
    render(
      <React.StrictMode>
        <MockedProvider mocks={mocks}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </MockedProvider>
      </React.StrictMode>
    );

    expect(
      await screen.findByText("FREE DELIVERY ON ALL ORDERS OVER €35")
    ).toBeInTheDocument();
  });
});
