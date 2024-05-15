import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./component/Loader/Loader";
import NotFound from "./component/NotFound/NotFound";



const About = lazy(() => import("./component/About/About"));
const Movies = lazy(() => import("./component/Movies/Movies"));
const MovieDetails = lazy(() => import("./component/MovieDetails/MovieDetails"));
const Home = lazy(() => import("./component/Home/Home"));

function AppEntrypoint() {
  return (
    <Provider store={store}>
        <App />
      </Provider>
  );
}


const routes = [
  {
    path: "/",
    element: <AppEntrypoint />,
    errorElement:<NotFound/>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "movies",
        element: (
          <Suspense fallback={<Loader />}>
            <Movies />
          </Suspense>
        ),
      },
      {
        path: "movies/:movieId",
        element: (
          <Suspense fallback={<Loader />}>
            <MovieDetails />
          </Suspense>
        ),
      },

    ],
  },
];
// @ts-ignore
const router = createBrowserRouter(routes, { basename: "/movies-db" });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
 
 <React.StrictMode>
    <RouterProvider router={router} />
 </React.StrictMode>

);

reportWebVitals();
