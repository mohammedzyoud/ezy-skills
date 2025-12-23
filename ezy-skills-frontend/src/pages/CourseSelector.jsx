import { useNavigate } from "react-router-dom";
import img14 from "../assets/img14.png";

export default function CourseSelector() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6">

        {/* Center Title */}
        <div className="mb-16 pt-20 text-center">
          <h3 className="text-[#003F7D] text-4xl md:text-5xl font-bold inline-block mr-2">
            Choose The
          </h3>
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold inline-block">
            Course
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-70 gap-12">

          {/* Left Buttons */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-10 order-2 md:order-1 flex flex-col items-center">
            <h4 className="text-2xl font-semibold text-[#003F7D] mb-8 text-center">
              Okay, let me help you
            </h4>

            <div className="flex gap-6 justify-center">
              <button
                type="button"
                onClick={() => navigate("/courses")} // ← ينقلك لصفحة الكورسات
                className="px-6 py-35 text-xl font-semibold bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition"
              >
                Discover Course
              </button>

              <button
                type="button"
                onClick={() => navigate("/suggest-course")}
                className="px-6 py-10 text-xl font-semibold bg-white text-[#003F7D] border-2 border-[#003F7D] rounded-2xl hover:bg-[#003F7D] hover:text-white transition"
              >
                Suggest Course
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={img14}
              alt="Course selector illustration"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
