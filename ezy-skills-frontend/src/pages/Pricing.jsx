import PricingCard from "./PricingCard";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png"; 

export default function Pricing() {
  return (
    <div className="relative min-h-screen bg-[#003F7D] px-4 py-8 flex flex-col items-center">

      {/* Page heading */}
      <div className="text-center mt-15 mb-24">
        <h1 className="text-4xl md:text-4xl font-bold">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Pricing</span>
        </h1>
      </div>

      {/* Pricing cards container */}
      <div className="flex flex-row gap-6 justify-center z-10 relative mt-20">

        {/* Left Card: College Program */}
        <div className="transform scale-85">
          <PricingCard
            title="College Program"
            price="₹20,000"
            taxText="+ Tax"
            description1="(Exclusive of GST & Taxes)"
            cardImages={[
              { img: card4, text: "For Colleges, Universities & Groups of Students" },
              { img: card2, text: "Common Timings" },
            ]}
            buttonText="Choose Plan"
            bottomImage={card3}
          />
        </div>

        {/* Middle Card: Employee Program */}
        <PricingCard
          title="Employee Program"
          price="₹50,000"
          taxText="+ Tax"
          description1="(Exclusive of GST & Taxes)"
          cardImages={[
            { img: card1, text: "1-1 Individuals" },
            { img: card2, text: "Choose Timings" },
          ]}
          buttonText="Choose Plan"
          bottomImage={card3}
        />

        {/* Right Card: Complete Transformation Program */}
        <div className="transform scale-85">
          <PricingCard
            title="Complete Transformation Program"
            price="₹75,000"
            taxText="+ Tax"
            description1="(Exclusive of GST & Taxes)"
            cardImages={[
              { img: card1, text: "1-1 Individuals" },
              { img: card2, text: "Flexible Timings" },
            ]}
            buttonText="Choose Plan"
            bottomImage={card3}
          />
        </div>

      </div>

      {/* Footer background image */}
      <img
        src={card5}
        alt="Footer Background"
        className="absolute bottom-0 left-0 w-full object-contain z-0"
      />

    </div>
  );
}
