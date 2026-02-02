import React from "react";

import yoga from "../../assets/yoga.jpg";
import cardio from "../../assets/cardio.jpg";
import strength from "../../assets/strength.jpg";
import personal from "../../assets/personal.jpg";

const classesData = [
  {
    id: 1,
    title: "YOGA TRAINING",
    image: yoga,
  },
  {
    id: 2,
    title: "CARDIO WORKOUT",
    image: cardio,
  },
  {
    id: 3,
    title: "STRENGTH TRAINING",
    image: strength,
  },
  {
    id: 4,
    title: "PERSONAL COACHING",
    image: personal,
  },
];

const FeatureClasses = () => {
  return (
    <div className="w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">FEATURED CLASSES</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {classesData.map((item) => (
          <div
            key={item.id}
            className="relative h-72 md:h-96  overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6  bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {item.title}
              </h3>

              <button className="w-12 h-12 px-10 bg-yellow-400 text-gray-900 font-bold flex items-center mt-5 justify-center hover:bg-yellow-500 transition">
                Book
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeatureClasses;
