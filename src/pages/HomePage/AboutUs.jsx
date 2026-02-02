import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5">
        
        {/* LEFT SIDE: Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            At Fitness Pro, we are dedicated to transforming the way businesses and individuals approach their goals. Our team of experts is passionate about delivering innovative solutions that drive growth, efficiency, and meaningful results. We believe in collaboration, creativity, and a customer-first mindset, ensuring that every project we undertake is not only successful but also impactful. 
          </p>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="flex-1">
          <img
            src="/fitness.jpg"
            alt="About Us"
            className="w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
