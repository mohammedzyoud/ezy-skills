export default function PricingCard({
  title,
  price,
  taxText,
  description1,
  description2,
  buttonText,
  cardImages,
  bottomImage,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl w-[360px] h-[400px] flex flex-col">

      {/* Header section with gradient background */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 h-36 relative flex flex-col items-center justify-end pb-4 rounded-t-3xl">
        {/* Floating title box */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-5/6 bg-white rounded-xl py-3 shadow-md text-center z-10">
          <h3 className="text-orange-500 font-bold leading-tight">{title}</h3>
        </div>

        {/* Price and description */}
        <div className="mt-16 w-5/6 text-center mx-auto">
          <div className="flex items-end justify-center gap-2">
            <p className="text-white text-6xl font-bold">{price}</p>
            <p className="text-white text-xl font-semibold">{taxText}</p>
          </div>
          <p className="text-white text-xl opacity-90 mt-1">{description1}</p>
        </div>
      </div>

      {/* Content section */}
      <div className="px-6 py-4 flex flex-col justify-between flex-1">

        {/* Features list */}
        <div className="flex flex-col items-start gap-6">
          {cardImages.map((item, index) => (
            <div key={index} className="flex items-center gap-3 flex-shrink-0">
              <img src={item.img} alt={`Card ${index + 1}`} className="h-6 w-6 object-contain" />
              <p className="text-gray-600 text-xl font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Action button and optional bottom image */}
        <div className="flex flex-col items-center">
          <button className="mt-6 px-8 py-3 border-2 border-orange-400 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 hover:border-orange-500 transition">
            {buttonText}
          </button>
          {bottomImage && <img src={bottomImage} alt="Bottom" className="mt-4 h-4 object-contain" />}
        </div>

      </div>
    </div>
  );
}
