import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Crown, Hourglass, Moon } from "lucide-react";

const plans = [
  {
    title: "Flexi",
    price: "£ 99.99 / month",
    icon: Hourglass,
    features: ["12 Classes Per Month", "3 Classes Per Week", "No joining fees"],
  },
  {
    title: "All Access",
    price: "£ 199.99 / month",
    icon: Crown,
    features: ["Unlimited Classes", "3 Classes Per Day", "No joining fees"],
  },
  {
    title: "Off-Peak",
    price: "£ 149.99 / month",
    icon: Moon,
    features: ["20 Classes Per Month", "5 Classes Per Week", "No joining fees"],
  },
];

const Memberships = () => {
  return (
    <div className="w-full bg-black py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
        MEMBERSHIPS PLANS
      </h2>

      <Swiper
        modules={[Pagination]}
        initialSlide={1}
        centeredSlides={true}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="max-w-4xl mx-auto"
      >
        {plans.map((plan, index) => {
          const Icon = plan.icon;

          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`
                    transition-all duration-300
                     p-10 text-center
                    ${
                      isActive
                        ? "bg-[#FFCC01] scale-105 shadow-2xl"
                        : "bg-gray-400 opacity-60 scale-95"
                    }
                  `}
                >
                  <h3 className="text-2xl font-bold uppercase mb-6">
                    {plan.title}
                  </h3>

                  <div className="flex justify-center mb-6">
                    <Icon className="w-20 h-20" />
                  </div>

                  <p className="text-2xl font-extrabold mb-8">
                    {plan.price}
                  </p>

                  <div className="flex flex-col gap-3 mb-10">
                    {plan.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="font-bold">✔</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className= {`w-full py-3 mb-5 font-bold uppercase  transition ${
                    isActive ? "bg-black text-white" : "bg-[#FFCC01] text-black"
                  }`}>
                    Join Today
                  </button>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Memberships;
