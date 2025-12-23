import { useState } from "react";
import faqImg from "../assets/faq.png";
import circleImg from "../assets/circle.png";

// FAQ data array: each object contains a question and its corresponding answer
const faqs = [
  { question: "Who is eligible for this program?", answer: "Any Degree/Btech/BE/MTech final year, passed graduates, individuals, employees are eligible for this program." },
  { question: "What is the duration of the program?", answer: "The program duration depends on the specific course. Typically, it ranges from 3 to 6 months." },
  { question: "Do I get the assured placement?", answer: "Placement assistance is provided, but assured placement depends on performance and company requirements." },
  { question: "What is the basic academic percentage required to enroll for the course?", answer: "Generally, a minimum of 50% in academics is required, but it may vary by program." },
  { question: "What is the execution plan of the program?", answer: "The program is executed through a combination of live sessions, assignments, and projects." },
  { question: "Can we take this course online?", answer: "Yes, the course is available online for remote learners." },
  { question: "I am already employed, will I be eligible for the program?", answer: "Yes, the program is designed to accommodate working professionals." },
  { question: "What if I miss the session due to an emergency?", answer: "Sessions are recorded, so you can catch up later without missing content." },
  { question: "Do you provide any certificate after the program?", answer: "Yes, a certificate is provided upon successful completion of the program." },
  { question: "Do you have any suggestions for us?", answer: "Stay consistent, complete all assignments, and actively participate in sessions to maximize learning." },
  { question: "Have suggestions for us?", answer: "Yes, we welcome any feedback or suggestions to improve our programs." }
];

export default function Faq() {
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open/close state of a FAQ item
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex flex-col items-center justify-start px-4 py-12 min-h-screen">

      {/* Background image for the FAQ section */}
      <img 
        src={faqImg} 
        alt="FAQ Background" 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Section heading */}
      <h2 className="text-4xl font-bold text-white mb-10 z-10">
        Frequently Asked Questions
      </h2>

      {/* FAQ container */}
      <div className="w-full max-w-6xl rounded-3xl shadow-xl p-8 z-10 bg-white mb-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${index !== 0 ? "border-t border-gray-300" : ""}`}
            >
              {/* FAQ question button */}
              <button
                className="w-full text-left px-6 py-4 flex items-center focus:outline-none hover:bg-gray-50 transition"
                onClick={() => toggleFaq(index)}
              >
                {/* Toggle symbol: + for closed, - for open */}
                <span className="text-2xl text-orange-500 mr-4">
                  {openIndex === index ? "-" : "+"}
                </span>

                {/* Question text, changes color when open */}
                <span className={`font-medium text-lg transition-colors ${openIndex === index ? "text-orange-500" : "text-gray-900"}`}>
                  {faq.question}
                </span>
              </button>

              {/* FAQ answer displayed when the item is open */}
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative circle image */}
      <div className="relative w-full mt-12">
        <img
          src={circleImg}
          alt="Decorative Circle"
          className="absolute"
          style={{
            width: '160px',
            height: '160px',
            objectFit: 'contain',
            bottom: '80px',  
            right: '80px',   
          }}
        />
      </div>

    </section>
  );
}
