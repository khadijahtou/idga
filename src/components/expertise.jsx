import React from "react";

function Expertise() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/cta_bg.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      {/* Centered content */}
      <div className="relative z-10  flex flex-col  gap-6 text-center px-6 max-w-3xl">
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Need Expert Data Science Solutions for Your Organization?
        </h3>
        <div className="flex gap-4 items-center justify-center">
          {" "}
          <button className="bg-white text-blue-950 hover:bg-blue-200 focus:ring-2 h-15 focus:ring-blue-500 focus:outline-none py-2 px-4 transition duration-300">
            Enroll in a Course
          </button>
          <button className="bg-blue-950 text-white hover:bg-blue-700 focus:ring-2 h-15 focus:ring-blue-500 focus:outline-none py-2 px-4  transition duration-300 text-[18px">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
// absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/70 to-transparent
