import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/appRouter";
import { Provider } from "react-redux";
import appStore from "./appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
