import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./routes/Posts";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import { loader as postsloader} from "./routes/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsloader,
        children: [{ path: "/create-post", element: <NewPost />,
        action: () => {}
      }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
