import React from "react";
import projectImage from "../assets/project.jpeg";
import { Link } from "react-router";

function Project() {
  return (
    <div className="bg-blue-950 p-10">
      <h3 className="text-3xl font-bold text-white mb-6">Latest Projects</h3>

      {/* Center container */}
      <div className="flex justify-center">
        <div className="bg-white lg:px-24 w-full rounded-lg">
          <div className="relative h-96 overflow-hidden group ">
            {/* Image */}
            <img
              src={projectImage}
              alt="project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-blue-900/90 text-white flex flex-col justify-end p-6
                         opacity-0 group-hover:opacity-70 transition duration-500"
            >
              <h3 className="text-2xl font-bold mb-3">Green Rising</h3>

              <p className="mb-6 text-[16px] max-w-xl">
                Through Green Rising, Ideas & Data Global Academy aims to
                address environmental challenges and create a sustainable
                future.
              </p>
              <Link to="/greenrise">
                <button className="border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition h-12 w-46">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
