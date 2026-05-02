import React from "react";
import logo from "./assets/idga-bg.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 grid md:grid-cols-3 gap-14">
        {/* <div className="flex items-center gap-3 mb-6">
          <img src={logo} alt="" className="h-13" />
          <h2 className="text-white text-xl font-semibold">
            Ideas & Data Global Academy
          </h2>
          <p className="text-sm leading-7">
            Building capacity in data science, technology, and research through
            world-class training, certification, and consulting services.
          </p>
        </div> */}

        <div>
          <h3 className="text-white font-semibold tracking-wide  text-[18px]md:text-[24px] mb-4">
            CONTACT
          </h3>

          <div className="space-y-5 text-sm">
            <div className="flex gap-4">
              <MapPin className="mt-1 text-slate-400 text-[20px] md:text-[40px]" />
              <span className="md:text-[18px] text-[16px]">
                No. 1A Opp LEA Kofar Sauri Road, Katsina
              </span>
            </div>

            <div className="flex gap-4">
              <Phone className="text-slate-400 text-[20px] md:text-[40px]" />
              <span className="md:text-[18px] text-[16px]">
                +234 809 460 7273
              </span>
            </div>

            <div className="flex gap-4">
              <Mail className="text-slate-400 text-[20px] md:text-[40px]" />
              <span className="md:text-[18px] text-[16px]">
                admin@idga.com.ng
              </span>
            </div>
            <div className="flex gap-5 mt-6 text-slate-400">
              <FaInstagram className="hover:text-white cursor-pointer transition text-[20px] md:text-[40px]" />
              <FaFacebook className="hover:text-white cursor-pointer transition text-[20px] md:text-[40px]" />
              <FaLinkedin className="hover:text-white cursor-pointer transition text-[20px] md:text-[40px] " />
              <FaTwitter className="hover:text-white cursor-pointer transition text-[20px] md:text-[40px] " />
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-white text-sm md:text-[18px] font-medium mb-2">
              Office Hours
            </h4>
            <p className="text-sm md:text-[18px]">Mon – Fri: 8:00am – 5:00pm</p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4 text-[18px] md:text-[24px]">
            COMPANY
          </h3>
          <ul className="space-y-4 text-sm md:text-[18px]">
            {[
              "About Us",
              "Policy",
              "Terms & Conditions",
              "Career",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <h3 className="text-white font-semibold tracking-wide mb-4 text-[18px] md:text-[24px]">
              SERVICES
            </h3>
            <ul className="space-y-4 text-sm md:text-[18px]">
              {[
                "M&E Training",
                "Certifications",
                "Robotics",
                "Research & Development",
                "Climate Change",
                "AI & Machine Learning",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © {new Date().getFullYear()} Ideas & Data Global Academy. All rights
            reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
