import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import footerimage from "../assets/footerimage.png";
import NewsletterModal from "./NewsletterModal"; // Modal component for newsletter subscription

// Footer component with company info, quick links, contact info, and newsletter subscription
export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#003F7D] text-white relative">
      <div className="container mx-auto px-4 py-12 pb-1">

        {/* Top Section: Image, Description and Newsletter Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

          {/* Company Image and Newsletter Subscription */}
          <div className="md:col-span-7 flex flex-col items-start">
            <img src={footerimage} alt="footerimage" className="w-35 h-auto mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Let us build your career together. Be the first person to transform<br/>
              yourself with our unique and world-class corporate-level trainings.
            </p>

            <h3 className="font-semibold text-lg mb-3">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-3 py-2 text-white bg-[#003F7D] placeholder-white outline-none rounded-l-xl"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white font-bold bg-orange-500 hover:bg-orange-600 transition rounded-r-xl"
              >
                &gt;
              </button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-3 pl-6">
            <h3 className="font-semibold text-lg mb-4">
              Quick <span className="text-orange-500">Links</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/courses" className="hover:text-white">Best Courses</Link></li>
              <li><Link to="/faq" className="hover:text-white">Your FAQs</Link></li>
              <li><Link to="/refund" className="hover:text-white">Cancellation & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="md:col-span-2 flex flex-col ml-auto">
            <h3 className="font-semibold text-lg mb-4">
              Contact<span className="text-orange-500"> Us</span>
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-2 items-start">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <p>
                  Navakethan Complex, 6th Floor, 605, 606 A&P opposite Clock Tower,
                  SD Road, Secunderabad, Telangana 500003
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@ezyskills.in</span>
              </div>
              <div className="flex gap-2 items-start">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+91 842 844 8903</span>
                  <span>+91 9475 484 959</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Terms, Privacy and Social Media Icons */}
        <div className="pt-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>

          <div className="flex items-center gap-4">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Render Newsletter Modal when triggered */}
      {isModalOpen && <NewsletterModal onClose={() => setIsModalOpen(false)} />}
    </footer>
  );
}
