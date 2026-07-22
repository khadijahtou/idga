import React from "react";
import Hero from "../components/hero";
import About from "./about";
import Project from "./project";
import Services from "./services";
import Expertise from "../components/expertise";
import Newsletter from "../components/newsletter";
import Blogs from "./blogs";
import Process from "../components/process";
import Testimonials from "../components/testimonials";
import Team from "./team";

function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Project />
      <Services />

      <Expertise />
      <Team />
      <Testimonials />
      <Blogs />
      <Newsletter />
    </div>
  );
}

export default Home;
