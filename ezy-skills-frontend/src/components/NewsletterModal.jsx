import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function NewsletterModal({ onClose }) {
  const emailContent = `Dear Sir/Madam,

We thank you for your interest in Ezy Skills.

In the meantime, we would like to take this opportunity to congratulate you for initiating the first step towards choosing your career. We wish you the best for your future.

Please feel free to reach out to us for any further concerns or queries.

Cheers,
EzySkill Team`;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Modal background overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal container */}
      <div className="bg-[#FBF9F9] relative z-50 w-[95%] max-w-lg flex flex-col rounded-xl p-4">

        {/* Top logo section */}
        <div className="mb-4 flex items-start">
          <img src={logo} alt="Logo Top" className="w-32" />
        </div>

        {/* Main white content box */}
        <div className="bg-white p-6 rounded-xl w-full text-sm text-gray-700">
          <pre className="whitespace-pre-wrap">{emailContent}</pre>
        </div>

        {/* Footer text outside the white box */}
        <div className="mt-4 text-sm text-gray-700">
          <p>
            This email was sent to{" "}
            <a href="mailto:username@gmail.com" className="text-orange-500 underline">
              username@gmail.com
            </a>
            . If you'd rather not receive this type of email, you can{" "}
            <a href="#" className="text-orange-500 underline">unsubscribe</a> or{" "}
            <a href="#" className="text-orange-500 underline">manage your email preferences</a>.
          </p>
          <p className="mt-2">
            Stripe, 510 Townsend Street, San Francisco, CA 94103
          </p>
        </div>

        {/* Footer section with small logo and social icons */}
        <div className="flex justify-between items-center w-full mt-4">
          <img src={logo} alt="Logo Footer" className="h-8" />
          <div className="flex gap-4 text-orange-500">
            <Twitter className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
