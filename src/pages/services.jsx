import React from "react";
import MnE from "../assets/m&e.png";
import certifications from "../assets/certification.jpeg";
import robotics from "../assets/robotics.jpeg";
import research from "../assets/research.png";
import climate from "../assets/climate.jpeg";
import ai from "../assets/ai.png";

function Services() {
  return (
    <div className="text-center px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-950">SERVICES</h2>
      <p className="text-[26px] text-gray-700 font-semibold">What We Do</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <img src={MnE} alt="MandE" className="w-full h-72 object-cover" />

          {/* Content */}
          <div className="p-8 flex flex-col gap-2">
            <h3 className="text-[18px] text-blue-950 font-bold">
              M&E Training
            </h3>

            <p className="text-[16px] text-gray-700 text-center">
              Offer comprehensive training programs on monitoring and evaluation
              (M&E) techniques, equipping individuals and organizations with the
              skills to effectively measure the impact of their projects and
              initiatives.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src={certifications}
            alt="Certifications"
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-8 flex flex-col gap-2">
            <h3 className="text-[18px] text-blue-950 font-bold">
              Certifications
            </h3>

            <p className="text-[16px] text-gray-700 text-center">
              Provide industry-recognized certifications in data science, data
              analytics, and related fields. Our certifications validate your
              skills and expertise, making you stand out in the job market and
              opening doors to new opportunities.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src={robotics}
            alt="Robotics"
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-8 flex flex-col gap-2">
            <h3 className="text-[18px] text-blue-950 font-bold">Robotics</h3>

            <p className="text-[16px] text-gray-700 text-center">
              Offer training and consulting services related to robotics and
              automation. Our experts can help you integrate these technologies
              into your operations, improving efficiency, productivity, and
              safety. We provide guidance on selecting the right robotics
              solutions, implementing them effectively, and maximizing their
              benefits.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src={research}
            alt="Research and Development"
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-8 flex flex-col gap-2">
            <h3 className="text-[18px] text-blue-950 font-bold">
              Research and Development
            </h3>

            <p className="text-[16px] text-gray-700 text-center">
              Engage in cutting-edge research and development projects to stay
              at the forefront of data science and technology. Our research team
              is dedicated to exploring new frontiers in data analysis, machine
              learning, and artificial intelligence, driving innovation and
              pushing the boundaries of what is possible.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src={climate}
            alt="Climate Change"
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-8 flex flex-col gap-2">
            <h3 className="text-[18px] text-blue-950 font-bold">
              Climate Change
            </h3>

            <p className="text-[16px] text-gray-700 text-center">
              Focus on training and research related to climate change and
              sustainability. Our programs equip individuals and organizations
              with the knowledge and skills needed to address environmental
              challenges and contribute to a more sustainable future. We offer
              courses on topics like renewable energy, climate resilience, and
              sustainable practices.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src={ai}
            alt="AI and Machine Learning"
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-8 flex flex-col gap-2">
            <h3 className="text-[18px] text-blue-950 font-bold">
              AI and Machine Learning
            </h3>

            <p className="text-[16px] text-gray-700 text-center">
              Offer training and consulting services in artificial intelligence
              (AI) and machine learning. Our experts can help you develop and
              deploy AI models to automate tasks, make predictions, and gain
              valuable insights from data. We provide guidance on selecting the
              right AI techniques, building effective models, and ensuring
              ethical AI practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
