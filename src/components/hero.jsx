import React from "react";

function Hero() {
  return (
    <section
      className="h-175 w-full 
      bg-[url(/hero.jpeg)] bg-cover bg-center relative"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
        <h1 className="text-5xl md:text-6xl text-white flex flex-col leading-tight">
          <span className="font-semibold">IDEAS AND DATA</span>
          <span className="font-black">GLOBAL ACADEMY</span>
        </h1>
        <p className="text-lg text-white mt-4">
          Empowering the next generation of innovators and leaders.
        </p>
      </div>
    </section>
  );
}

export default Hero;
