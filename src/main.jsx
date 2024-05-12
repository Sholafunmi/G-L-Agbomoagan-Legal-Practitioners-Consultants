import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Practice_Areas from "./components/Home/Practice_Areas.jsx";
import Contact from "./pages/Contact.jsx";
import Appointment from "./pages/Appointment.jsx";

// react roter dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },

  {
    path: "practice_Areas",
    element: <Practice_Areas />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "appointment",
    element: <Appointment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
