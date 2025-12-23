import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

export default function Login() {
  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract email and password values from the form
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // Send login request to the backend API
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Save token and user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful!");
        window.location.href = "/"; // Redirect to home page
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full gap-12 items-center">

        {/* Login form container */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md">
          {/* Form heading */}
          <h1 className="font-semibold text-3xl mb-6 text-[#003F7D] text-center">
            Log In
          </h1>

          {/* Login form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
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

            {/* Remember me checkbox */}
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
              <span className="text-gray-500">Remember Me</span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-2 px-6 py-2.5 bg-[#003F7D] text-white font-medium rounded-md hover:bg-[#002F5A] focus:outline-none focus:ring-2 focus:ring-[#003F7D] w-full mx-auto block"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social login buttons */}
          <div className="flex flex-col items-center gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition w-80">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition w-80">
              Facebook
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black border border-black rounded-md hover:bg-gray-800 transition w-80">
              Apple
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
