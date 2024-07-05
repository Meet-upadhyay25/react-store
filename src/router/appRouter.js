import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import ProductDetail from "../components/Feature/Product/ProductDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:"/:productName/:productId",
        element:<ProductDetail />
      }
    ],
  },
]);

export default appRouter;
