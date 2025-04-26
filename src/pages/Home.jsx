import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Dueways Innovations
            </h1>
            <p className="text-lg mb-6">
              Your one-stop solution for Professional Designs, World-Class Printing, and Branding.
            </p>
            <div className="space-x-4 md:flex lg-flex-col sm:flex">
              <Link to="/submit-work" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
                Submit a Work
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                View Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
            src="/largeformat.png" alt="Printing" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">About Dueways Limited</h2>
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto">
            At Dueways Innovations, we specialize in delivering top-notch designs, printing (DI, Large Format, Monogramming, T-Shirt, and more), and outstanding branding services like vehicle branding. We combine creativity with technology to give your brand the standout visibility it deserves.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-950 p-6 rounded-lg  shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-white">Design</h3>
              <p className="text-white">Create stunning visual identities for businesses, products, and events.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-950 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-white">Printing</h3>
              <p className="text-white">DI Printing, Large Format, T-Shirts, Monogramming, Flyers, Banners, and much more!</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-950 p-6 rounded-lg  shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-white">Branding</h3>
              <p className="text-white">We handle corporate branding, vehicle branding, and promotional items for businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-lg mb-8">Send us your work today or browse our services to get started.</p>
          <Link to="/submit-work" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100">
            Submit Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
