import React from "react";

const teamMembers = [
  { id: 1, name: "Alice Johnson", position: "Coach", image: "/men1.jpg" },
  { id: 2, name: "Bob Smith", position: "Coach", image: "/men2.jpg" },
  { id: 3, name: "Carol Lee", position: "Coach", image: "/w1.jpg" },
  { id: 4, name: "David Kim", position: "Coach", image: "/men3.jpg" },
  { id: 5, name: "Emma Brown", position: "Coach", image: "/w2.jpg" },
  { id: 6, name: "Frank Wilson", position: "Coach", image: "/men4.jpg" },
  { id: 7, name: "Grace Liu", position: "Coach", image: "/w3.jpg" },
  { id: 8, name: "Martina Watson", position: "Coach", image: "/w4.jpg" },
];

const Team = () => {
  return (
    <div className="w-full py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">
          MEET OUR TEAM
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden cursor-pointer group bg-white shadow-lg transition active:scale-95"
            >
              {/* IMAGE */}
              <div className="h-40 sm:h-48 md:h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-110"
                />
              </div>

              {/* MOBILE INFO (always visible on small) */}
              <div className="block md:hidden p-3 text-center bg-[#FFCC01]">
                <h3 className="text-base font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-800">
                  {member.position}
                </p>
              </div>

              {/* DESKTOP HOVER OVERLAY */}
              <div
                className="
                  hidden md:flex
                  absolute inset-0 
                  bg-[#FFCC01] bg-opacity-90 
                  flex-col justify-center items-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <div className="w-12 h-[2px] bg-gray-800 my-2"></div>
                <p className="text-gray-800">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;