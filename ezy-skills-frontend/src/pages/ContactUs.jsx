import React from "react";
import contactImg1 from "../assets/ContactUs1.png";
import contactImg2 from "../assets/ContactUs2.png";
import bgImage from "../assets/faq.png";
import circleImg from "../assets/circle.png"; 

export default function ContactUs() {
  return (
    <section
      className="min-h-screen relative flex flex-col items-center py-12 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-white mb-12 text-center">
        Contact Our Team
      </h1>

      {/* Contact Form */}
      <form className="w-full max-w-6xl bg-white p-12 rounded-3xl shadow-lg mb-16 relative z-10">
        
        {/* Name & Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[#003F7D] font-semibold mb-2">
              Your name*
            </label>
            <input
              type="text"
              placeholder="Julia William"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>

          <div>
            <label className="block text-[#003F7D] font-semibold mb-2">
              Contact email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
        </div>

        {/* Phone & Issue Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[#003F7D] font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+962 7 1234 5678"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>

          <div>
            <label className="block text-[#003F7D] font-semibold mb-2">
              Issue Related to
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-300"
            >
              <option>Course Structure</option>
              <option>Payment Failure</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-[#003F7D] font-semibold mb-2">
            Your message*
          </label>
          <textarea
            placeholder="Type your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-40 resize-none focus:outline-none focus:ring-0 focus:border-gray-300"
          />
        </div>

        {/* Terms & Conditions */}
        <p className="text-gray-500 text-sm mb-6">
          By submitting this form you agree to our terms and conditions and our
          Privacy Policy which explains how we may collect, use and disclose
          your personal information.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#003F7D] text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-900 transition"
        >
          Send
        </button>
      </form>

      {/* Contact Information */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 text-center relative z-10">
        
        {/* Email Info */}
        <div className="flex flex-col items-center">
          <img src={contactImg1} className="w-20 h-20 mb-4" alt="Email" />
          <h3 className="text-orange-500 font-bold text-xl mb-2">Email us</h3>
          <p className="text-gray-600 mb-3 px-4">
            Email us for general queries, including marketing and partnership opportunities.
          </p>
          <p className="text-[#003F7D] font-semibold text-lg">
            hello@ezyskills.com
          </p>
        </div>

        {/* Phone Info */}
        <div className="flex flex-col items-center">
          <img src={contactImg2} className="w-20 h-20 mb-4" alt="Call" />
          <h3 className="text-orange-500 font-bold text-xl mb-2">Call us</h3>
          <p className="text-gray-600 mb-3 px-4">
            Call us to speak to a member of our team. We are always happy to help.
          </p>
          <p className="text-[#003F7D] font-semibold text-lg">
            +91 88888 99999
          </p>
        </div>
      </div>

      {/* Decorative Circle */}
      <img
        src={circleImg}
        alt="Decorative Circle"
        className="absolute"
        style={{
          bottom: '250px', 
          right: '100px',   
          width: '160px',  
          height: '160px', 
          objectFit: 'contain' 
        }}
      />
    </section>
  );
}
