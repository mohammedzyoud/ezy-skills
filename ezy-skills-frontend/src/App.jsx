import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CourseSelector from "./pages/CourseSelector";
import SuggestCourse from "./pages/SuggestCourse";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import CourseAdmin from "./pages/CourseAdmin";

// Import Course Context
import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
    // Wrap the entire app in the CourseProvider to provide context globally
    <CourseProvider>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar always visible at the top */}
        <Navbar />

        {/* Main content changes based on the route */}
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<CourseSelector />} />
            <Route path="/suggest-course" element={<SuggestCourse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Admin Route */}
            <Route path="/course-admin" element={<CourseAdmin />} />
          </Routes>
        </main>

        {/* Footer always visible at the bottom */}
        <Footer />
      </div>
    </CourseProvider>
  );
}

export default App;
