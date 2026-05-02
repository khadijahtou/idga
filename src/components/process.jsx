import React from "react";

function Process() {
  return (
    <section className="bg-slate-50 py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div
            className="group relative overflow-hidden bg-white p-8 shadow-md border-b-2 border-blue-950
                      transform transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div
              className="absolute inset-x-0 bottom-0 h-0 bg-blue-950
                        transition-all duration-500 ease-in-out
                        group-hover:h-full"
            ></div>

            <div className="relative z-10">
              <h3
                className="text-2xl font-semibold text-gray-900 mb-4
                         transition duration-500 group-hover:text-white"
              >
                Mission
              </h3>
              <p
                className="text-gray-600 leading-relaxed
                        transition duration-500 group-hover:text-gray-200"
              >
                To democratize data science education and empower individuals
                with the tools to make informed decisions.
              </p>
            </div>
          </div>

          <div
            className="group relative overflow-hidden bg-white p-8 shadow-md border-b-2 border-blue-950
                      transform transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div
              className="absolute inset-x-0 bottom-0 h-0 bg-blue-950
                        transition-all duration-500 ease-in-out
                        group-hover:h-full"
            ></div>

            <div className="relative z-10">
              <h3
                className="text-2xl font-semibold text-gray-900 mb-4
                         transition duration-500 group-hover:text-white"
              >
                Vision
              </h3>
              <p
                className="text-gray-600 leading-relaxed
                        transition duration-500 group-hover:text-gray-200"
              >
                To be the global leader in data science training and research.
              </p>
            </div>
          </div>

          <div
            className="group relative overflow-hidden bg-white p-8 shadow-md border-b-2 border-blue-950
                      transform transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div
              className="absolute inset-x-0 bottom-0 h-0 bg-blue-950
                        transition-all duration-500 ease-in-out
                        group-hover:h-full"
            ></div>

            <div className="relative z-10">
              <h3
                className="text-2xl font-semibold text-gray-900 mb-4
                         transition duration-500 group-hover:text-white"
              >
                Values
              </h3>
              <p
                className="text-gray-600 leading-relaxed
                        transition duration-500 group-hover:text-gray-200"
              >
                Innovation, integrity, collaboration, and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
