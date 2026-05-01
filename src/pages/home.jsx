import React from "react";
import Hero from "../components/hero";
import About from "./about";
import Project from "./project";
import Services from "./services";
import Expertise from "../components/expertise";
import Newsletter from "../components/newsletter";
import Blogs from "../components/blogs";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Services />
      <Expertise />
      <Blogs />
      <Newsletter />
    </div>
  );
}

export default Home;
