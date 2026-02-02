import React from "react";

const Stats = () => {
  return (
    <div className="w-full bg-[#FFCC01] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {/* Stat 1 */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">45</h2>
          <p className="mt-2 text-lg md:text-xl font-extrabold text-gray-900 uppercase">
            Different<br />Modules
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">60</h2>
          <p className="mt-2 text-lg md:text-xl font-extrabold text-gray-900 uppercase">
            Minutes<br />Per Class
          </p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">20</h2>
          <p className="mt-2 text-lg md:text-xl font-extrabold text-gray-900 uppercase">
            Classes<br />Per Week
          </p>
        </div>

        {/* Stat 4 */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">1</h2>
          <p className="mt-2 text-lg md:text-xl font-extrabold text-gray-900 uppercase">
            United<br />Goal
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
