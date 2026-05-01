import React from "react";

function Newsletter() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4">
      {/* Centered background container */}
      <div className="relative w-full max-w-5xl h-[450px] rounded-xl overflow-hidden bg-[url('/newsletter_bg.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 text-center p-8 max-w-2xl">
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Subscribe to Our Newsletter
          </h3>

          <p className="text-gray-200 text-[18px]">
            Renovation projects can range from minor upgrades, like repainting
            or installing new fixtures.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-blue-950 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none py-3 px-6 text-[18px] font-semibold rounded-md">
              Sign Up With Your Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
