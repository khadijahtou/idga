import React from "react";
import about from "../assets/about.jpeg";

function About() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 text-gray-700 md:p-6 p-2">
      <div>
        <img src={about} alt="" className="object-cover  h-full w-full" />
      </div>
      <div className="flex flex-col gap-3 mb-6 px-2">
        <div className="flex items-center justify-center gap-4 ">
          <div className="h-0.5 w-16 bg-blue-950"></div>
          <span className="text-blue-950 tracking-widest text-3xl font-bold">
            ABOUT US
          </span>
          <div className="h-0.5 w-16 bg-blue-950"></div>
        </div>

        <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 ">
          Empowering youth through affordable tech education!
        </h3>
        <p className="text-[16px]">
          Ideas & Data Global Academy is a leading institution dedicated to
          nurturing data science talent and driving positive societal impact. We
          offer comprehensive training programs, certifications, and consulting
          services to equip individuals and organizations with the skills needed
          to thrive in the data-driven world.
        </p>
        <p className="[text-16px]">
          Our commitment to sustainable development is reflected in our focus on
          achieving <span className="font-semibold"> SDGs 4 and 13.</span> We
          strive to provide accessible and inclusive education to foster a
          skilled workforce and promote climate action.
        </p>
        <p className="text-[16px]">
          IDGA is proud to be implementing the Green Rising Initiative{" "}
          <span className="font-semibold">
            by UNICEF’s Generation Unlimited{" "}
          </span>{" "}
          in Katsina, Kano, and Jigawa States. This initiative aims to empower
          young people with the knowledge and skills necessary to address
          climate change and build sustainable communities.
        </p>
      </div>
    </div>
  );
}

export default About;
