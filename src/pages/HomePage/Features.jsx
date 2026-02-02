import React from "react";
import { Navigate } from "react-router";

const featureData = [
  {
    id: 1,
    image: "/workout plan.jpg", // replace with real images
    slogan: "Your Fitness, Your Way",
    header: "Custom Workouts for Your Goals",
    description:
      "Whether you’re a beginner taking your first steps toward fitness or an experienced athlete aiming for peak performance, our platform creates personalized workout routines tailored specifically to your body type, schedule, and fitness goals. ",
    link: "/learn-more-1",
  },
  {
    id: 2,
    image: "/nutition.jpg",
    slogan: "Fuel Your Body, Fuel Your Life",
    header: "Nutrition Plans Tailored to Your Goals",
    description:
      "Proper nutrition is the backbone of any successful fitness journey. Our website provides detailed meal plans, nutritional insights, and recipes designed to maximize energy, improve recovery, and support your unique goals. From macronutrient tracking to weekly grocery guides, we simplify the often-complicated world of healthy eating.",
    link: "/learn-more-2",
  },
  {
    id: 3,
    image: "/community.jpg",
    slogan: "Stronger Together",
    header: "Connect, Inspire, Achieve",
    description:
      "Fitness isn’t just about workouts—it’s about connection, encouragement, and shared achievement. Our platform offers a vibrant community where members can share progress, celebrate milestones, and motivate one another through challenges and group events. ",
    link: "/learn-more-3",
  },
];

const Features = () => {
  return (
    <div className="w-full flex flex-col gap-20 px-6 py-10">
      {featureData.map((feature, idx) => (
        <div
          key={feature.id}
          className={`flex flex-col md:flex-row items-center gap-12 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="flex-1">
            <img
              src={feature.image}
              alt={feature.header}
              className="w-full h-auto shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-4">
            <span className="text-gray-800 font-semibold uppercase">
              {feature.slogan}
            </span>
            <h2 className="text-4xl font-extrabold uppercase text-gray-800">{feature.header}</h2>
            <p className="text-gray-600 text-sm font-light">{feature.description}</p>
           <button
            onClick={() => Navigate(feature.link)}
            className="btn btn-outline w-32 text-left">Learn more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
