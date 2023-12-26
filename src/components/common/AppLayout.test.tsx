import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

describe("AppLayout Component", () => {
  test("renders the component with the Outlet", () => {
    render(
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );

    // Assert that the component is rendered
    expect(screen.getByTestId("app-layout")).toBeInTheDocument();
  });
});
