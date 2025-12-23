import { createContext, useContext, useState } from "react";

// Create a context for courses
export const CourseContext = createContext();

// Provider component to wrap the app and provide course state
export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);

  // Function to add a new course
  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

// Custom hook for easier context consumption
export const useCourse = () => useContext(CourseContext);
