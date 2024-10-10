import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./errorpage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import BillEstimatePage from "./pages/BillEstimatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/admin-page",
        element: <AdminPage />,
      },
      {
        path: "/bill-estimate",
        element: <BillEstimatePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
