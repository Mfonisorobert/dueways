import React from "react";

const services = [
  {
    title: "Creative Design",
    description: "Logos, flyers, business cards, and custom graphics tailored to your brand identity.",
    icon: "🎨",
  },
  {
    title: "DI Printing",
    description: "Direct imaging for crisp, professional-quality prints on demand.",
    icon: "🖨️",
  },
  {
    title: "Large Format Printing",
    description: "Posters, banners, and large signage for impactful visual communication.",
    icon: "📐",
  },
  {
    title: "T-Shirt Printing",
    description: "Custom apparel printing for events, brands, and promotions.",
    icon: "👕",
  },
  {
    title: "Monogramming",
    description: "Personalize clothing, bags, and other items with embroidered initials or logos.",
    icon: "🧵",
  },
  {
    title: "Vehicle Branding",
    description: "Turn your car, van, or truck into a mobile advert with full or partial wraps.",
    icon: "🚐",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Note */}
         <div className="mt-20 text-center">
           <p className="text-lg text-gray-600">
             At <span className="font-bold text-blue-600">Dueways Limited</span>, we combine creativity, professionalism, and technology to deliver unmatched quality. Your brand deserves the best!
           </p>
         </div>

    </div>
  );
};

export default Services;