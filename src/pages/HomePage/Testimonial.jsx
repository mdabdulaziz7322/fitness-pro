import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Fitness Enthusiast",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "This platform completely changed how I train. The classes are intense!",
    },
    {
        name: "Michael Brown",
        role: "Personal Trainer",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "Amazing coaches and great atmosphere. I feel stronger .",
    },
    {
        name: "Emily Davis",
        role: "Yoga Instructor",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "The best decision I made for my fitness journey.",
    },
    {
        name: "James Wilson",
        role: "Athlete",
        img: "https://randomuser.me/api/portraits/men/41.jpg",
        quote: "Professional trainers and well-structured programs. Love it!",
    },
    {
        name: "Olivia Martin",
        role: "Nutrition Coach",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        quote: "I’ve never felt more motivated. The community is incredible.",
    },
    {
        name: "Daniel Lee",
        role: "Gym Member",
        img: "https://randomuser.me/api/portraits/men/55.jpg",
        quote: "Top-notch facilities and world-class coaching. Worth every penny.",
    },
    {
        name: "Sophia Anderson",
        role: "Crossfit Athlete",
        img: "https://randomuser.me/api/portraits/women/28.jpg",
        quote: "The variety of classes keeps me excited and consistent.",
    },
    {
        name: "Matthew Thomas",
        role: "Bodybuilder",
        img: "https://randomuser.me/api/portraits/men/18.jpg",
        quote: "Results-driven and supportive environment. Couldn’t ask for more.",
    },
    {
        name: "Isabella Moore",
        role: "Wellness Coach",
        img: "https://randomuser.me/api/portraits/women/52.jpg",
        quote: "From day one, I felt welcomed. Truly an amazing experience.",
    },
];

const Testimonial = () => {
    return (
        <section className="w-full  py-20 px-6">
           
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
                    WHAT OUR MEMBERS SAY
                </h2>


                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    speed={700}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full border-yellow-400  border shadow-md p-10 flex flex-col items-center text-center hover:shadow-xl transition">
                                {/* Profile Image */}
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 mb-6"
                                />

                                {/* Quote */}
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    <span className="text-yellow-400 text-3xl font-bold mr-2">“</span>
                                    {t.quote}
                                    <span className="text-yellow-400 text-3xl font-bold ml-2">”</span>
                                </p>

                                {/* Name & Role */}
                                <div className="mt-auto ">
                                    <p className="font-bold text-xl text-gray-900">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonial;
