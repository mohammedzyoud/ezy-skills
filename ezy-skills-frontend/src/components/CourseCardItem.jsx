import { FiDownload, FiPlay, FiCheckCircle } from "react-icons/fi";

// Component to display a single course card with image, title, description, and action buttons
export default function CourseCardItem({ course }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center relative">
      
      {/* Course Image Section */}
      <div className="px-6 py-6 flex items-center justify-center min-h-48">
        <img
          src={course.image}
          alt={course.title}
          className="h-32 w-32 object-contain"
        />
      </div>

      {/* Course Title and Description */}
      <div className="px-6 py-4 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
        <p className="text-sm mb-4">{course.description}</p>
      </div>

      {/* Action Buttons (Live Demo & Enroll) positioned above download button */}
      <div className="absolute bottom-16 w-5/6 flex justify-center gap-3">
        <button className="flex items-center gap-2 border-2 border-orange-500 px-3 py-2 rounded-2xl text-black text-sm hover:bg-orange-50 transition whitespace-nowrap">
          <FiPlay className="text-orange-500 w-4 h-4" />
          Live Demo
        </button>
        <button className="flex items-center gap-2 border-2 border-orange-500 px-3 py-2 rounded-2xl text-black text-sm hover:bg-orange-50 transition whitespace-nowrap">
          <FiCheckCircle className="text-orange-500 w-4 h-4" />
          Enroll Now
        </button>
      </div>

      {/* Download Curriculum Button */}
      <div className="absolute bottom-4 w-5/6 flex justify-center">
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-3xl font-medium text-sm transition shadow-md">
          <FiDownload className="w-4 h-4" />
          Download Curriculum
        </button>
      </div>
    </div>
  );
}
