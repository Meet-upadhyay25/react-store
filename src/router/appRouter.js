import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import ProductDetail from "../components/Feature/Product/ProductDetail";
import Auth from "../components/Feature/Auth/Auth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/:productName/:productId",
        element: <ProductDetail />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

export default appRouter;
