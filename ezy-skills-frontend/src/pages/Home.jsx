import homehero from "../assets/homehero.png";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section: Main introduction */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content: Heading, description, search input, and tags */}
          <div className="text-left">
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#003F7D] leading-tight">
              Skill your way <br />
              up to success <br />
              with us
            </h1>

            {/* Subheading/description */}
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Get the skills you need for <br />
              the future of work.
            </p>

            {/* Search bar and button */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:gap-4">
              <input
                type="text"
                placeholder="Search the course you want"
                className="w-full md:w-[420px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003F7D]"
              />
              <button className="mt-3 md:mt-0 px-6 py-3 rounded-lg bg-[#003F7D] text-white font-semibold hover:bg-[#002f5c] transition">
                Search
              </button>
            </div>

            {/* Popular course tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "Cloud Computing",
                "Cyber Security",
                "DevOps",
                "Data Science",
                "Software Testing",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-full cursor-pointer hover:bg-[#003F7D] hover:text-white transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content: Hero image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={homehero}
              alt="Skills illustration"
              className="w-full max-w-xl"
            />
          </div>

        </div>
      </section>

      {/* Second Section: Imported HeroSection component */}
      <HeroSection />
    </div>
  );
}
