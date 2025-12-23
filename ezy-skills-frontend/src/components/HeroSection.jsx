import { useContext, useState, useEffect } from "react";
import { CourseContext } from "../context/CourseContext";
import CourseCardItem from "./CourseCardItem";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import heroimg1 from "../assets/heroimg1.png";
import heroimg2 from "../assets/heroimg2.png";
import heroimg3 from "../assets/heroimg3.png";
import heroimg4 from "../assets/heroimg4.png";
import heroimg5 from "../assets/heroimg5.png";
import heroimg6 from "../assets/heroimg6.png";
import heroimg7 from "../assets/heroimg7.png";
import heroimg8 from "../assets/heroimg8.png";
import points from "../assets/points.png";
import circle from "../assets/circle.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";

// HeroSection component handles the main hero slider, featured courses, mentors, certifications, and collaborations
export default function HeroSection() {
  const { courses } = useContext(CourseContext);

  // Hero slider images and state
  const heroImages = [img1, img2, img3, img4];
  const [currentHero, setCurrentHero] = useState(0);

  // Mentors images and state
  const mentors = [img9, img10, img11];
  const [currentMentor, setCurrentMentor] = useState(0);

  // Auto-rotate hero slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate mentors slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMentor((prev) => (prev + 1) % mentors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white overflow-hidden">

      {/* HERO SLIDER SECTION */}
      <div className="min-h-screen container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#003F7D] leading-tight">
            World’s <br /> First AI based
          </h1>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-orange-500">
            Online Learning Platform
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={heroImages[currentHero]}
            alt="Hero Slide"
            className="w-full max-w-4xl object-contain"
          />
          <div className="flex gap-2 mt-4 w-full max-w-4xl">
            {heroImages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`flex-1 h-1 rounded-full cursor-pointer ${
                  currentHero === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* WHO CAN JOIN SECTION */}
      <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">WHO CAN JOIN</h3>
          <h2 className="text-[#003F7D] text-4xl md:text-5xl font-bold mb-8">
            Skill Development Schemes For All
          </h2>
          <img src={img5} alt="" className="w-full max-w-md object-contain" />
        </div>
        <div className="flex justify-end">
          <img src={img6} alt="" className="w-full max-w-md object-contain" />
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="w-full py-24 px-6 relative">
        {/* Decorative Points Background */}
        <img
          src={points}
          alt="Points Background"
          className="absolute bottom-0 left-1/9 transform -translate-x-1/2 w-20 z-20"
        />
        {/* Circle Background */}
        <img
          src={circle}
          alt="Circle Background"
          className="absolute -bottom-5 -right-5 w-56 z-0"
        />
        {/* Floating "How It Works" label */}
        <div className="absolute top-18 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white font-bold px-6 py-2 rounded-xl shadow-lg z-20">
          How It Works
        </div>
        {/* Blue container with steps and images */}
        <div className="relative bg-[#003F7D] rounded-3xl p-12 flex justify-center overflow-hidden z-10">
          <div className="flex items-center gap-8 relative z-10">
            {/* Left Large Image */}
            <img
              src={heroimg1}
              alt="Image Left"
              className="w-48 h-48 object-cover rounded-3xl"
            />
            {/* Steps container */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {[
                { number: "01", text: "Assessment Aptitude Test Interview", img: heroimg2 },
                { number: "02", text: "Hands-on Practice Scenarios, Test Cases", img: heroimg3 },
                { number: "03", text: "Soft Skills & Business Training", img: heroimg4 },
                { number: "04", text: "Daily, Weekly, Monthly Assessments", img: heroimg5 },
                { number: "05", text: "Real-Time Project Hackathons", img: heroimg6 },
                { number: "06", text: "Assessment Guidance & Monitoring", img: heroimg7 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-base mb-1">{item.number}</span>
                    <div className="w-24 h-24 bg-[#003F7D] border-4 border-[#F98149] rounded-3xl flex items-center justify-center p-1">
                      <img src={item.img} alt={`Step ${idx}`} className="w-12 h-12 object-cover" />
                    </div>
                    <span className="text-white text-center text-xs mt-1">{item.text}</span>
                  </div>
                  {idx !== 5 && <span className="text-orange-500 text-2xl mx-2">{'>'}</span>}
                </div>
              ))}
            </div>
            {/* Right Large Image */}
            <img
              src={heroimg8}
              alt="Image Right"
              className="w-48 h-48 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* FEATURED COURSES SECTION */}
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center text-[#003F7D] mb-12">
          Featured Courses
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {courses.slice(0, 3).map((course, index) => (
            <div key={index} className="max-w-sm w-full mx-auto">
              <CourseCardItem course={course} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 bg-[#003F7D] text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition">
            View All Courses
          </button>
        </div>
        <img src={img8} alt="" className="w-screen mt-24 object-cover" />
      </div>

      {/* MENTORS SECTION */}
      <div className="container mx-auto px-6 py-32 text-center">
        <h3 className="text-[#003F7D] text-4xl md:text-5xl font-bold mb-8">
          Meet Our Professional
        </h3>
        <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-20">
          Mentors & Trainers
        </h2>
        <div className="flex justify-center items-end gap-12">
          {mentors.map((mentor, index) => {
            const isCenter = index === currentMentor;
            return (
              <img
                key={index}
                src={mentor}
                alt={`Mentor ${index}`}
                className={`transition-transform duration-500 object-contain ${
                  isCenter ? "scale-125" : "scale-95 opacity-60"
                } w-96`}
              />
            );
          })}
        </div>
      </div>

      {/* CERTIFICATIONS SECTION */}
      <div className="container mx-auto px-6 py-32 text-center">
        <div className="flex justify-center items-center gap-6 mb-16">
          <h3 className="text-[#003F7D] text-4xl md:text-5xl font-bold">Our</h3>
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold">
            Certifications
          </h2>
        </div>
        <img src={img12} alt="Certifications" className="w-full max-w-4xl mx-auto object-contain" />
      </div>

      {/* COLLABORATIONS SECTION */}
      <div className="container mx-auto px-6 py-32 text-center">
        <div className="flex justify-center items-center gap-6 mb-16">
          <h3 className="text-[#003F7D] text-4xl md:text-5xl font-bold">Our</h3>
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold">
            Collaborations
          </h2>
        </div>
        <img src={img13} alt="Collaborations" className="w-full max-w-4xl mx-auto object-contain" />
      </div>

    </section>
  );
}
