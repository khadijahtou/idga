import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/home";
import Greenrise from "./components/greenrise";
import About from "./pages/about";
import Services from "./pages/services";
import Project from "./pages/project";
import Testimonials from "./components/testimonials";
import Blogs from "./pages/blogs";
import Newsletter from "./components/newsletter";
import Process from "./components/process";
import Summit from "./components/summit";
import Sanitation from "./components/sanitation";
import Robotics from "./components/robotics";
import ConsultationForm from "./components/consult";
import CourseEnrollmentForm from "./components/enrollement";
import NewsletterForm from "./components/newsletterform";
import ProjectDetails from "./pages/ProjectDetails";

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
        path: "/projects/:slug",
        element: <ProjectDetails />,
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
      {
        path: "/summit",
        element: <Summit />,
      },
      {
        path: "/sanitation",
        element: <Sanitation />,
      },
      {
        path: "/robotics",
        element: <Robotics />,
      },
      {
        path: "/enrollment",
        element: <CourseEnrollmentForm />,
      },
      {
        path: "/consultation",
        element: <ConsultationForm />,
      },
      {
        path: "/newsletterform",
        element: <NewsletterForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
