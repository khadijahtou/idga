import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/home";
import Greenrise from "./components/greenrise";

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
        path: "/greenrise",
        element: <Greenrise />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
