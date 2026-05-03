import React from "react";
import about from "../assets/about.jpeg";
import mshehu from "../assets/mshehu.jpeg";
import yusuf from "../assets/yusuf.png";
import ibrahim from "../assets/ibrahim.jpg";

function Greenrise() {
  return (
    <section className="p-6 md:p-12 text-gray-600">
      <div className="bg-[url('/greenrise.jpeg')] w-full h-60 bg-cover bg-center flex  flex-col items-center justify-center py-20">
        <h3 className="text-4xl font-bold text-white mb-6 text-center">
          Green Rising
        </h3>
        <p className="text-white text-2xl font-semibold  text-center">
          Empowering the next generation of climate leaders.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold mt-8 mb-4 ">What is Green Rising?</h2>
        <p className="text-[18px]">
          The Green Rising Initiative is a youth-led movement under Ideas & Data
          Global Academy, in partnership with Generation Unlimited (GenU) and
          UNICEF. The initiative focuses on equipping young people with the
          skills and knowledge to combat climate change and drive environmental
          sustainability in their communities. Through innovative programs like
          tree planting, plastic recycling, and the use of green technologies,
          we aim to raise awareness and take tangible steps toward a sustainable
          future.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-8 mb-4 gap-4">
        <img src={about} alt="About Green Rising" />
        <div className="flex flex-col gap-3">
          <h4 className="md:text-3xl text-[24px] font-semibold">
            OUR MISSION & VISION
          </h4>
          <p className="text-[18px]">
            {" "}
            <span className="font-semibold">Mission:</span> Green Rising is
            dedicated to empowering the next generation of climate leaders. We
            aim to inspire youth to take action against climate change by
            providing them with the tools, education, and platforms to make an
            impact
          </p>
          <p className="text-[18px]">
            {" "}
            <span className="font-semibold">Vision:</span> To create a community
            of environmentally-conscious young Nigerians who will drive
            sustainable practices and advocate for policies that support a
            healthier planet.
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-3">
          <h4 className="md:text-3xl text-[24px] font-semibold">Our Pillar</h4>
          <p className="text-[18px]">
            Green Rising operates on three foundational pillars:
          </p>
          <ol className="flex flex-col gap-2 text-[16px]">
            <li className="list-decimal ">
              {" "}
              <span className="font-semibold">Tree Planting:</span> Combatting
              deforestation and restoring ecosystems by mobilizing young people
              to plant trees and care for green spaces in their communities.
            </li>
            <li className="list-decimal">
              {" "}
              <span className="font-semibold">Plastic Recycling:</span>{" "}
              Addressing waste management challenges through education on
              recycling practices, organizing plastic collection drives, and
              promoting sustainable use of materials..
            </li>
            <li className="list-decimal">
              {" "}
              <span className="font-semibold">Green Technology:</span>{" "}
              Introducing innovative technologies like solar power and
              climate-smart agriculture to drive sustainable practices and
              reduce the carbon footprint in local communities.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="md:text-3xl text-[24px] font-semibold">
            Our Programs
          </h3>
          <p className="text-[18px]">
            Green Rising offers various programs that engage youth in practical,
            impactful activities:
          </p>
          <ol className="flex flex-col gap-3">
            <li className="list-disc">
              {" "}
              <span className="font-semibold">Tree Planting Drives:</span>{" "}
              Mobilizing schools and communities across Kano, Katsina, and
              Jigawa states to plant trees and create green spaces.
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-semibold">
                Plastic Recycling Campaigns:{" "}
              </span>{" "}
              Educating and training young people on the importance of
              recycling, while organizing cleanup and recycling activities in
              local areas.
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-semibold">
                Green Technology Workshops:
              </span>{" "}
              Hosting training sessions on renewable energy, climate-smart
              agriculture, and other green technologies to equip youth with
              hands-on skills for a sustainable future.
            </li>
            <li className="list-disc">
              <span className="font-semibold">
                Environmental Awareness Campaigns:
              </span>{" "}
              Using digital platforms like U-Report and community-based outreach
              to raise awareness about climate action and the importance of
              environmental stewardship.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="md:text-3xl text-[24px] font-semibold  ">IMPACT</h3>
          <p className="text-[18px]">
            Since its inception, Green Rising has made significant strides in
            improving environmental awareness and sustainability practic
          </p>
          <ol className="flex flex-col gap-3">
            <li className="list-disc">
              {" "}
              <span className="font-semibold">Planted over 1,000 trees </span>
              across the 3 focus states in northern Nigeria, restoring local
              ecosystems and reducing desertification
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-semibold">
                Collected and recycled tons of plastic waste{" "}
              </span>{" "}
              through youth-driven campaigns.
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-semibold">
                Trained over 3000 young leaders
              </span>{" "}
              in green technology and sustainable practices online & offline.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="md:text-3xl text-[24px] font-semibold">JOIN US</h3>
          <p className="text-[18px]">
            We welcome everyone to join the Green Rising movement! Whether
            you’re a young person looking to make a difference, a community
            leader, or a partner organization, there are many ways to get
            involved:
          </p>
          <ol className="flex flex-col gap-3 text-[16px]">
            <li className="list-disc">
              {" "}
              <span className="font-semibold">Volunteer:</span> Participate in
              our tree planting and recycling campaigns.
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-semibold">Partner with Us:</span>{" "}
              Collaborate on programs or sponsor initiatives to support climate
              action.
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-semibold">Donate:</span> Follow our blog and
              social media channels to stay updated on our work.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-[24px]  md:text-3xl font-semibold">
            MEET THE TEAM
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-3">
            <div className="shadow-md bg-gray-100 rounded md:p-6 p-2 flex flex-col items-left gap-2">
              <img
                src={mshehu}
                alt="Mustapha Shehu"
                className="md:h-80 h-67 w-full"
              />
              <h4 className="font-semibold text-[20px]">Mustapha Shehu</h4>
              <h5 className="font-medium text-[16px]">Team Lead</h5>
            </div>
            <div className="shadow-md bg-gray-100 rounded md:p-6 p-2 flex flex-col gap-2">
              <img
                src={yusuf}
                alt="Yusuf Umar Usman"
                className="md:h-80 h-67 w-full bg-white pt-3"
              />
              <h4 className="font-semibold text-[20px]">Yusuf Umar Usman</h4>
              <h5 className="font-medium text-[16px]">Admin Lead</h5>
            </div>
            <div className="shadow-md bg-gray-100 rounded p-2 md:p-6 flex flex-col items-left gap-2  ">
              <img
                src={ibrahim}
                alt="Ibrahim Hamisu"
                className="md:h-80  h-67 bg-white pt-3 w-full"
              />
              <h4 className="text-[20px] font-semibold">Ibrahim Hamisu </h4>
              <h5 className="text-[16px] font-medium">Technical Lead</h5>
            </div>
          </div>
        </div>
        <div className="flex  flex-col gap-3 mt-4">
          <h3 className="text-[24px]  md:text-3xl font-semibold">PARTNERS</h3>
          <p className="text-[18px]">
            We are proud to partner with global organizations and local
            stakeholders from Katsina, Kano & Jigawa State to drive impactful
            climate action:
          </p>
          <ol className="flex flex-col gap-1 text-[16px]">
            <li className="list-disc text-[16px]">
              Generation Unlimited (GenU)
            </li>
            <li className="list-disc text-[16px]">UNICEF</li>
            <li className="list-disc text-[16px]">
              White Heart Development Initiative
            </li>
            <li className="list-disc text-[16px]">
              Friends Of The Community Initiative
            </li>
            <li className="list-disc text-[16px]">
              Mufarka Youth Development Initiative
            </li>
            <li className="list-disc text-[16px]">LUMILAB</li>
            <li className="list-disc text-[16px]">
              Al-huda Health and Youth Development Organization
            </li>
            <li className="list-disc text-[16px]">
              Network for Environmental Safety and Society Development
              Organizational
            </li>
            <li className="list-disc text-[16px]">
              Humanity Kindness and Peace Initiative
            </li>
            <li className="list-disc text-[16px]">Panacea Foundation</li>
            <li className="list-disc text-[16px]">
              RESCUE THE WOMEN FOUNDATION
            </li>
            <li className="list-disc text-[16px]">
              Kano State Children’s Parliament{" "}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Greenrise;
