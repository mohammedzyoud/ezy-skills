import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import hero from "../assets/hero.png";

export default function Signup() {
  // Handle form submission for registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form values
    const full_name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Send registration request to backend
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name, email, password, role: "student" })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        window.location.href = "/login"; // Redirect to login page
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full gap-12 items-center">

        {/* Registration form container */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md">
          {/* Form heading */}
          <h1 className="font-semibold text-3xl mb-6 text-center">
            <span style={{ color: "#003F7D" }}>Create</span>
            <span className="text-orange-500"> Account</span>
          </h1>

          {/* Signup form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />

            {/* Remember me checkbox */}
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
              <span className="text-gray-500">Remember Me</span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-2 px-6 py-2.5 bg-[#003F7D] text-white font-medium rounded-md hover:bg-[#002F5A] focus:outline-none focus:ring-2 focus:ring-[#003F7D] w-full"
            >
              Create Account
            </button>
          </form>

          {/* Redirect to login page */}
          <p className="text-gray-400 text-sm mt-4 text-center">
            Already have an account? <Link className="text-orange-500 hover:text-orange-400" to="/login">Login Here</Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social sign-in buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              <FcGoogle className="w-5 h-5" />
              <span className="text-gray-700 font-medium">Google</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition">
              <FaFacebookF className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Facebook</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-black border border-black rounded-md hover:bg-gray-800 transition">
              <FaApple className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Apple</span>
            </button>
          </div>

          {/* Terms and privacy links */}
          <p className="text-gray-400 text-xs mt-6 text-center">
            By continuing, you agree to the{" "}
            <Link className="text-orange-500 hover:text-orange-400">Terms of Service</Link> and{" "}
            <Link className="text-orange-500 hover:text-orange-400">Privacy Policy</Link>
          </p>
        </div>

        {/* Hero image on the right */}
        <img
          src={hero}
          alt="Hero illustration"
          className="md:w-1/2 max-w-full max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
}
