import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";

import { Provider } from "react-redux";
import store from "./store";
import Movies from "./component/Movies/Movies";
import MovieDetails from "./component/MovieDetails/MovieDetails";

const routes = [
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
];
// @ts-ignore
const router = createBrowserRouter(routes, { basename: "/" });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/movie-db" > */}
    <RouterProvider router={router} />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
