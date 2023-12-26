import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ProductDetailsPage from "../pages/product";
import { AppLayout } from "../components/common";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Error page</h1>
  },
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <ProductDetailsPage />
      }
    ]
  }
]);
