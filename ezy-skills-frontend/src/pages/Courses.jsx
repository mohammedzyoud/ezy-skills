import { useContext, useState, useMemo } from "react";
import { CourseContext } from "../context/CourseContext";
import { FiDownload, FiPlay, FiCheckCircle, FiSearch } from "react-icons/fi";

export default function Courses() {
  const { courses } = useContext(CourseContext); // ✅ Get courses from context

  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filter, setFilter] = useState("All"); // Filter state: All, Opened, Coming Soon, Archived
  const [sort, setSort] = useState("Popular"); // Sorting state

  // Filter & search courses based on searchQuery, filter, and sort
  const filteredCourses = useMemo(() => {
    return courses
      .filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(course => {
        if (filter === "All") return true;
        return course.status === filter; // assumes each course has a status field
      })
      .sort((a, b) => {
        if (sort === "Popular") return b.popularity - a.popularity; // assumes popularity field
        return 0;
      });
  }, [courses, searchQuery, filter, sort]);

  return (
    <div className="relative bg-slate-50 min-h-screen">

      {/* ================= WHITE HEADER SECTION ================= */}
      <div className="bg-white w-full px-6 pt-16 pb-8">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center text-[#003F7D] mb-6">
          Courses <span className="text-orange-500">List</span>
        </h2>

        {/* Search, Filters, Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-1/3">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search The Course Here"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Filters Buttons */}
          <div className="flex gap-4 flex-wrap">
            {["All", "Opened", "Coming Soon", "Archived"].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1 text-sm font-medium transition ${
                  filter === status
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 border-b-2 border-transparent hover:text-orange-500"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="px-3 py-2 rounded-lg border text-gray-400 border-gray-300 focus:outline-none "
            >
              <option value="Popular">Sort by: Popular</option>
              <option value="Newest">Sort by: Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8"></div>

      {/* ================= COURSES GRID ================= */}
      <div className="px-6 pb-32"> 
        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500">No courses found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-[#003F7D] rounded-3xl shadow-2xl overflow-visible flex flex-col items-center relative text-white"
                style={{ minHeight: '25rem' }}
              >
                {/* Top Image */}
                <div className="px-6 pt-6 flex items-start justify-center w-full">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-62 w-62 object-contain"
                  />
                </div>

                {/* Floating White Card with Title, Description, Actions */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-5/6 bg-white rounded-3xl shadow-md p-4 flex flex-col items-center gap-3"
                  style={{ bottom: '-4rem', zIndex: 10 }}
                >
                  <h3 className="text-lg font-bold text-black">{course.title}</h3>
                  <p className="text-sm text-black">{course.description}</p>

                  <div className="flex justify-center gap-3">
                    <button className="flex items-center gap-2 border-2 border-orange-500 px-3 py-2 rounded-2xl text-black text-sm hover:bg-orange-50 transition whitespace-nowrap">
                      <FiPlay className="text-orange-500 w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 border-2 border-orange-500 px-3 py-2 rounded-2xl text-black text-sm hover:bg-orange-50 transition whitespace-nowrap">
                      <FiCheckCircle className="text-orange-500 w-4 h-4" />
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Download Curriculum Button below Card */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ bottom: '-5.7rem', zIndex: 20 }}
                >
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-orange-500 hover:to-orange-600 transition shadow-md">
                    <FiDownload className="w-4 h-4" />
                    Download Curriculum
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
