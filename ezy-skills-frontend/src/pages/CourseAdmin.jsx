import { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

export default function CourseAdmin() {
  const { addCourse } = useContext(CourseContext); // ✅ Access the addCourse function from context
  const [title, setTitle] = useState("");          // State for course title
  const [description, setDescription] = useState(""); // State for course description
  const [image, setImage] = useState("");          // State for course image URL

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && image) {
      addCourse({ title, description, image }); // Add new course to context
      setTitle("");        // Reset title field
      setDescription("");  // Reset description field
      setImage("");        // Reset image field
    }
  };

  return (
    <div className="p-8">
      {/* Page Heading */}
      <h2 className="text-2xl font-bold mb-4">Create New Course</h2>

      {/* Course Creation Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        
        {/* Course Title Input */}
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Course Description Input */}
        <input
          type="text"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Course Image URL Input */}
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
