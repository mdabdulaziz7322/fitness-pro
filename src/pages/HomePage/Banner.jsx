import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section className="w-full relative">
      {/* Custom arrows */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white text-4xl cursor-pointer p-2  rounded-full hover:bg-black/50 transition">
        ❮
      </div>
      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white text-4xl cursor-pointer p-2  rounded-full hover:bg-black/50 transition">
        ❯
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Slide
            bg="#FFCC01"
            slogan="Join Our Fitness Community"
            heading={["ELEVATE YOUR JOURNEY"]}
            button="Get Started Now"
            image="/yellow.png"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Slide
            bg="#FE66BC"
            slogan="Push Limits"
            heading={["TRANSFORM YOUR BODY AND MIND"]}
            button="Learn More"
            image="/pink.png"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Slide
            bg="#3DBFCC"
            slogan="Stay Consistent"
            heading={["FITNESS THAT FITS YOUR LIFE"]}
            image="/blue.png"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

/* Slide content component */
const Slide = ({ bg, slogan, heading, button, image }) => (
  <div
    className="w-full flex flex-col md:flex-row items-center justify-between
               px-6 md:px-20 py-10 md:py-20 gap-5 min-h-[80vh]"
    style={{ backgroundColor: bg }}
  >
    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <p className="uppercase text-sm tracking-[0.3em] text-white mb-4">
        {slogan}
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        {heading[0]} <br /> {heading[1]}
      </h1>

      {button && (
        <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition">
          {button}
        </button>
      )}
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={image}
        alt="Fitness"
        className="w-full shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[320px] object-contain"
      />
    </div>
  </div>
);

export default Banner;
