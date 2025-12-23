import { useState } from "react";
import chat1 from "../assets/chat1.png";
import chat2 from "../assets/chat2.png";
import chat3 from "../assets/chat3.png";
import chat4 from "../assets/chat4.png";
import chat5 from "../assets/chat5.png";
import chat6 from "../assets/chat6.png";
import chat7 from "../assets/chat7.png";
import chat8 from "../assets/chat8.png";
import chat9 from "../assets/chat9.png";

export default function SuggestCourse() {
  // State management for steps, user selections, and chat messages
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");
  const [field, setField] = useState("");
  const [coding, setCoding] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome, Prasad. Let us know your current status?" }
  ]);

  // Add a new message to the chat
  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, { type, text }]);
  };

  // Handle user's answer and add bot response
  const handleAnswer = (answer, nextQuestion) => {
    addMessage("user", answer);
    if (nextQuestion) addMessage("bot", nextQuestion);
    setStep(step + 1);
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full flex justify-center px-6 py-10">
        <div className="bg-[#003F7D] rounded-2xl shadow-lg p-8 max-w-6xl flex flex-col gap-6 w-full">

          {/* Chat messages display */}
          <div className="flex flex-col gap-4 mb-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 max-w-xs ${
                  msg.type === "bot" ? "self-start" : "self-end justify-end"
                }`}
              >
                {msg.type === "bot" && (
                  <img src={chat1} alt="Bot" className="w-10 h-10 rounded-full" />
                )}
                <div
                  className={`p-4 rounded-2xl ${
                    msg.type === "bot" ? "bg-white text-black" : "bg-gray-100 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Step-based options */}
          {step === 1 && (
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Status selection */}
              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => { setStatus("Looking For Job"); handleAnswer("Looking For Job", "Great! Let me help you. Choose an option."); }}>
                <img src={chat2} alt="Looking For Job" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">Looking For Job</span>
              </div>

              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => { setStatus("IT to Non-IT Job Shift"); handleAnswer("IT to Non-IT Job Shift", "Great! Let me help you. Choose an option."); }}>
                <img src={chat3} alt="IT to Non-IT Job Shift" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">IT to Non-IT Job Shift</span>
              </div>

              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => { setStatus("Upskill IT Job"); handleAnswer("Upskill IT Job", "Great! Let me help you. Choose an option."); }}>
                <img src={chat4} alt="Upskill IT Job" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">Upskill IT Job</span>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => handleAnswer("Discover Course", "Select the field you're interested in")}
                className="w-full py-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition"
              >
                Discover Course
              </button>
              <button
                onClick={() => handleAnswer("Suggest Course", "Select the field you're interested in")}
                className="w-full py-4 text-lg font-semibold bg-white text-[#003F7D] border-2 border-[#003F7D] rounded-2xl hover:bg-[#003F7D] hover:text-white transition"
              >
                Suggest Course
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => { setField("IT Field"); handleAnswer("IT Field", "IT Field, then what do you prefer now?"); }}
                className="px-6 py-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition"
              >
                IT Field
              </button>
              <button
                onClick={() => { setField("Non-IT Field"); handleAnswer("Non-IT Field", "You chose Non-IT Field. Next step..."); }}
                className="px-6 py-4 text-lg font-semibold bg-white text-[#003F7D] border-2 border-[#003F7D] rounded-2xl hover:bg-[#003F7D] hover:text-white transition"
              >
                Non-IT Field
              </button>
            </div>
          )}

          {step === 4 && field === "IT Field" && (
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => { setCoding("Coding"); handleAnswer("Coding", "Wow, you chose coding. What's next?"); }}>
                <img src={chat5} alt="Coding" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">Coding</span>
              </div>

              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => { setCoding("No Coding"); handleAnswer("No Coding", "You chose no coding. Next step..."); }}>
                <img src={chat6} alt="No Coding" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">No Coding</span>
              </div>
            </div>
          )}

          {step === 5 && coding === "Coding" && (
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Coding specialization options */}
              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => handleAnswer("Front End", "Excellent! Click next to get started")}>
                <img src={chat7} alt="Front End" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">Front End</span>
              </div>

              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => handleAnswer("Back End", "Excellent! Click next to get started")}>
                <img src={chat8} alt="Back End" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">Back End</span>
              </div>

              <div className="flex flex-col items-center cursor-pointer"
                   onClick={() => handleAnswer("Full Stack", "Excellent! Click next to get started")}>
                <img src={chat9} alt="Full Stack" className="w-24 h-24 hover:scale-105 transition-transform" />
                <span className="mt-2 text-white font-semibold">Full Stack</span>
              </div>
            </div>
          )}

          {step === 6 && (
            <button
              onClick={() => handleAnswer("Next", "You are all set!")}
              className="w-full py-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition"
            >
              Next
            </button>
          )}

        </div>
      </div>
    </section>
  );
}
