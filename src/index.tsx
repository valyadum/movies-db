import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";

import { Provider } from "react-redux";
import store from "./store";
import Movies from "./component/Movies/Movies";
import MovieDetails from "./component/MovieDetails/MovieDetails";


const routes=
  [
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
const router = createBrowserRouter(routes, { basename: "/movie-db"});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
 {/* <BrowserRouter basename="/movie-db" > */}
      <RouterProvider router={router}/>
{/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
