import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/home";
import Greenrise from "./components/greenrise";
import About from "./pages/about";
import Services from "./pages/services";
import Project from "./pages/project";
import Testimonials from "./components/testimonials";
import Blogs from "./components/blogs";
import Newsletter from "./components/newsletter";
import Process from "./components/process";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/greenrise",
        element: <Greenrise />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/process",
        element: <Process />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
