import React from "react";
import aboutImg1 from "../assets/aboutus1.png";
import aboutImg2 from "../assets/aboutus2.png";
import aboutImg3 from "../assets/aboutus3.png"; 
import aboutImg4 from "../assets/aboutus4.png"; 
import aboutImg5 from "../assets/aboutus5.png";
import aboutImg6 from "../assets/aboutus6.png";
import aboutImg7 from "../assets/aboutus7.png";
import aboutImg8 from "../assets/aboutus8.png";
import aboutImg9 from "../assets/aboutus9.png";
import aboutImg10 from "../assets/aboutus10.png";

export default function AboutUs() {
  return (
    <div className="space-y-40">

      {/* Hero Section with full background */}
      <section
        className="relative w-full h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImg1})` }}
      >
        <div className="relative z-10 flex-1 px-8 md:px-16 lg:px-32 text-left">
          <p
            className="text-orange-500 font-thin text-lg md:text-xl uppercase"
            style={{ letterSpacing: "0.5em" }}
          >
            ABOUT US
          </p>

          <h1 className="text-white font-bold text-4xl md:text-6xl my-4 leading-snug">
            The Platform <br />
            For The Next <br />
            Billion Learners
          </h1>

          <p className="text-gray-300 text-sm md:text-base max-w-md">
            Transforming tech education for the next generation of students & employees
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 flex flex-col md:flex-row items-center px-8 md:px-16 lg:px-32 gap-10">
        <div className="flex-1">
          <img
            src={aboutImg2}
            alt="Our Story"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 text-left">
          <p
            className="text-[#003F7D] font-bold text-lg md:text-xl uppercase"
            style={{ letterSpacing: "0.5em" }}
          >
            OUR STORY
          </p>

          <h2 className="text-orange-500 font-bold text-3xl md:text-5xl my-4 leading-snug">
            Innovating new <br />
            ways to train <br />
            students
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-md space-y-4">
            We see no limits to what we can achieve by harnessing our individual and collective strengths. 
            We are changing the world with our ideas, insights, and unique perspectives.
          </p>

          <p className="text-gray-500 text-sm md:text-base max-w-md mt-4">
            Our innovation is driven by data, curiosity, and the occasional happy accident. 
            We create an uplifting environment where we learn from our failures and celebrate our successes.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-[#003F7D] py-20">
        <div className="flex flex-col md:flex-row justify-center items-center px-8 md:px-16 lg:px-32 gap-16">

          {/* Mission */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img src={aboutImg3} alt="Mission" className="w-32 h-auto mb-6" />
            <p className="font-bold text-lg md:text-5xl uppercase">
              <span className="text-white">Our</span> <span className="text-orange-500">Mission</span>
            </p>
            <p className="text-white text-sm md:text-base mt-4 max-w-md">
              To provide practice-based skill training using unique teaching methodologies and skill platform to enhance the right skills required in an industry for working professionals, non-Tech professionals, college students, and startups through new skilling, upskilling, and reskilling.
            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img src={aboutImg4} alt="Vision" className="w-32 h-auto mb-6" />
            <p className="font-bold text-lg md:text-5xl uppercase">
              <span className="text-white">Our</span> <span className="text-orange-500">Vision</span>
            </p>
            <p className="text-white text-sm md:text-base mt-4 max-w-md">
              To transform into a right employee by imparting industry-suited IT skills in a corporate office working environment with a holistic approach.
            </p>
          </div>

        </div>
      </section>

      {/* Our Team Section */}
      <section className="relative flex flex-col items-center px-8 md:px-16 lg:px-32 pb-20">
        {/* Navigation buttons for team carousel */}
        <button className="absolute left-28 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
          &lt;
        </button>
        <button className="absolute right-28 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
          &gt;
        </button>

        <h2 className="font-bold text-3xl md:text-5xl uppercase mb-10 text-center">
          <span className="text-[#003F7D]">Our</span> <span className="text-orange-500">Team</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Team Member */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={aboutImg5} alt="Kishore Kumar" className="w-40 h-auto rounded-lg mb-4" />
            <p className="text-[#003F7D] font-bold">KISHORE KUMAR</p>
            <p className="text-gray-700 text-sm text-center">CEO & FOUNDER, CARAMEL IT SERVICES</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={aboutImg9} alt="Suchitra" className="w-40 h-auto rounded-lg mb-4" />
            <p className="text-[#003F7D] font-bold">SUCHITRA</p>
            <p className="text-gray-700 text-sm text-center">DIRECTOR HR & OPERATIONS</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={aboutImg8} alt="Naren M" className="w-40 h-auto rounded-lg mb-4" />
            <p className="text-[#003F7D] font-bold">NAREN M</p>
            <p className="text-gray-700 text-sm text-center">Co-Founder</p>
          </div>
        </div>
      </section>

      {/* Our Advisors Section */}
      <section className="relative flex flex-col items-center px-8 md:px-16 lg:px-32 pb-32">
        {/* Navigation buttons for advisors carousel */}
        <button className="absolute left-28 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
          &lt;
        </button>
        <button className="absolute right-28 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
          &gt;
        </button>

        <h2 className="font-bold text-3xl md:text-5xl uppercase mb-10 text-center">
          <span className="text-[#003F7D]">Our</span> <span className="text-orange-500">Advisors</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Advisor Member */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={aboutImg7} alt="Prasad" className="w-40 h-auto rounded-lg mb-4" />
            <p className="text-[#003F7D] font-bold">PRASAD</p>
            <p className="text-gray-700 text-sm text-center">PHARMA INDUSTRIALIST</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={aboutImg6} alt="Anand Kumar" className="w-40 h-auto rounded-lg mb-4" />
            <p className="text-[#003F7D] font-bold">ANAND KUMAR</p>
            <p className="text-gray-700 text-sm text-center">ANGEL INVESTOR</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={aboutImg10} alt="Chitra" className="w-40 h-auto rounded-lg mb-4" />
            <p className="text-[#003F7D] font-bold">CHITRA</p>
            <p className="text-gray-700 text-sm text-center">SR. EXECUTIVE ADVISOR</p>
          </div>
        </div>
      </section>

    </div>
  );
}
