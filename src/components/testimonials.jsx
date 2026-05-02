import React from "react";
import { User, Star, Quote } from "lucide-react";

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-0.5 w-16 bg-blue-950"></div>
          <span className="text-blue-950 tracking-widest text-3xl font-bold">
            TESTIMONIALS
          </span>
          <div className="h-0.5 w-16 bg-blue-950"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-20">
          Hear From Our Happy Clients: Their Stories
        </h2>

        {/* Card */}
        <div className="relative bg-white shadow-lg rounded-md pt-20 pb-16 px-10">
          {/* Avatar */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-[6px] border-black bg-white flex items-center justify-center">
              <User size={60} className="text-black" />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 mt-4">Musa Halliru</h3>
          <p className="text-gray-600 mb-4">Impact Summit 2024</p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className="text-orange-500 fill-orange-500"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The IDGA Annual Impact Summit, 2024 is full of inspiration and
            meaningful knowledge sessions. We are truly grateful for attending
            such a gigantic event.
          </p>

          {/* Quote */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <Quote size={90} className="text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
