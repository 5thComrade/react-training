import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import Layout from "./pages/Layout.page";
import Home from "./pages/Home.page";
import SingleEmail from "./pages/SingleEmail.page";
import BulkEmail from "./pages/BulkEmail.page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singleEmail",
        element: <SingleEmail />,
      },
      {
        path: "/bulkEmail",
        element: <BulkEmail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
