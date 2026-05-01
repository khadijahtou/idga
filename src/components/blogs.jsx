import React from "react";
import summit from "../assets/summit.jpeg";
import outreach from "../assets/outreach.jpeg";
import { Link } from "react-router";

function Blogs() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <h2 className="text-3xl font-bold text-center text-blue-950">
        LATEST BLOGS AND INSIGHTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-4">
        <div className="bg-gray-100 shadow-md rounded-lg ">
          <img
            src={summit}
            alt=""
            className="object-cover w-full h-72 rounded"
          />
          <div className="p-3 flex flex-col gap-2">
            <h4 className="text-sm text-gray-500 flex gap-4">
              {" "}
              Summit <span> December 28, 2024</span>
            </h4>{" "}
            <Link
              to="/impactSummit"
              className="text-sm text-blue-950 font-bold"
            >
              IDGA Impact Summit 2024: celebrating Impact, Inspiring Growth
            </Link>
            <button className=" border border-gray-400 text-gray-400  w-25 rounded bg-white hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none py-3  text font-semibold">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 shadow-md rounded-lg ">
          <img
            src={outreach}
            alt=""
            className="object-cover w-full h-72 rounded"
          />
          <div className="p-3 flex flex-col gap-2">
            <h4 className="text-sm text-gray-500 flex gap-4">
              {" "}
              Summit <span> December 28, 2024</span>
            </h4>{" "}
            <Link
              to="/impactSummit"
              className="text-sm text-blue-950 font-bold"
            >
              IDGA & Lumicilicate Leads Community Sanitation and Hygiene
              Sensitization Outreach in Katsina
            </Link>
            <button className=" border border-gray-400 text-gray-400  w-25 rounded bg-white hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none py-3  text font-semibold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
