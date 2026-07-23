import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/home";

import About from "./pages/about";
import Services from "./pages/services";
import Project from "./pages/project";
import Testimonials from "./components/testimonials";
import Blogs from "./pages/blogs";
import Newsletter from "./components/newsletter";
import Process from "./components/process";

import ConsultationForm from "./components/consult";
import CourseEnrollmentForm from "./components/enrollement";
import NewsletterForm from "./components/newsletterform";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetails from "./pages/BlogDetails";
import AllBlogs from "./pages/AllBlogs";
import PrivacyPolicy from "./pages/policy";
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
        path: "/blogs/:slug",
        element: <BlogDetails />,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs />,
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
      {
        path: "/policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
